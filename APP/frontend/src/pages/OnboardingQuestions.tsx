import React from "react";
import { motion } from "framer-motion";
import { QUESTIONS } from "../data/questions";
import { useOnboardingStore } from "../store/onboardingStore";
import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { saveOnboardingAnswers } from "../lib/saveOnboarding";

import fondoActivo from "../assets/fondo-activo.png";

const OnboardingQuestions: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, setAnswer, nextStep, answers } = useOnboardingStore();

  const question = QUESTIONS[currentStep - 1];
  const isLast = currentStep === QUESTIONS.length;

  const handleSelect = async (value: string) => {
    // actualiza localmente
    setAnswer(currentStep, value);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // ⭐ ARREGLO: incluir la última respuesta manualmente
    const finalAnswers = {
      ...answers,
      [currentStep]: value
    };

    if (isLast) {
      try {
        await saveOnboardingAnswers(user.id, finalAnswers);

        await supabase
          .from("user_profile")
          .update({ onboarding_completed: true })
          .eq("id", user.id);

        navigate("/onboarding/done");
      } catch (err) {
        console.error(err);
        alert("Error saving onboarding data.");
      }

      return;
    }

    nextStep();
  };


  return (
    <div
      className="w-full h-full flex justify-center items-center px-6"
      style={{
        backgroundImage: `url(${fondoActivo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-white/90 rounded-3xl p-8 shadow-xl text-center border border-[#6ec3ff]"
      >
        <h2 className="text-xl font-semibold mb-8">{question.title}</h2>

        <button
          onClick={() => handleSelect(question.optionA.label)}
          className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6"
        >
          <img src={question.optionA.image} className="w-full h-36 object-cover" />
          <div className="py-4 text-black text-lg font-medium">
            {question.optionA.label}
          </div>
        </button>

        <p className="text-black/50 mb-6">o</p>

        <button
          onClick={() => handleSelect(question.optionB.label)}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <img src={question.optionB.image} className="w-full h-36 object-cover" />
          <div className="py-4 text-black text-lg font-medium">
            {question.optionB.label}
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default OnboardingQuestions;
