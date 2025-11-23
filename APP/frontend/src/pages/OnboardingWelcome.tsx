import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OnboardingWelcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full flex justify-center items-center px-6"
      style={{
        backgroundImage: "url('/src/assets/fondo-activo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 w-full max-w-sm rounded-3xl px-6 py-10 text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-3">Welcome!</h2>
        <p className="text-sm text-black/70 mb-6">
          We can't wait to help whisk you away to your next travel adventure.
        </p>

        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6 text-4xl text-black/60">
          ¿?
        </div>

        <p className="text-sm text-black/70 mb-8">
          Let's start by getting to know you a little. Answer a few questions to help us determine how you like to travel and what your budget might be.
        </p>

        <button
          onClick={() => navigate("/onboarding/questions")}
          className="w-full py-3 bg-[#2da4dc] text-white rounded-xl font-semibold"
        >
          Let's Go!
        </button>
      </motion.div>
    </div>
  );
};

export default OnboardingWelcome;
