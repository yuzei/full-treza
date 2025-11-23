import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import fondoActivo from "../assets/fondo-activo.png";

const OnboardingDone: React.FC = () => {
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
        <h2 className="text-2xl font-bold mb-4">It's time!</h2>
        <p className="text-sm text-black/70 mb-10">
          Now that we know you a little better, start exploring your possibilities!
        </p>

        <button
          onClick={() => navigate("/home")}
          className="w-full py-3 bg-[#2da4dc] text-white rounded-xl font-semibold"
        >
          Start
        </button>
      </motion.div>
    </div>
  );
};

export default OnboardingDone;
