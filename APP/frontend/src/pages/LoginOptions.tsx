import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingBackground from "../components/LandingBackground";
import TrezaLogo from "../components/TrezaLogo";

const LoginOptions: React.FC = () => {
  const navigate = useNavigate();

  const buttonBase =
    "w-full bg-white text-black py-3 rounded-2xl text-sm md:text-base font-medium shadow-xl flex items-center gap-3 justify-center";

  const iconCircle =
    "flex items-center justify-center w-7 h-7 rounded-full border border-black/30 bg-white";

  return (
    <LandingBackground>
      <div className="w-full h-full flex flex-col items-center px-6">
        <div className="h-24" />

        {/* Logo + texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-10"
        >
          <TrezaLogo className="w-40 h-auto mb-3" />
          <p className="text-white text-lg font-light text-center drop-shadow-lg">
            Let’s get you going!
          </p>
        </motion.div>

        {/* Botones de proveedores */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-xs flex flex-col gap-3"
        >
          <button className={buttonBase}>
            <span className={iconCircle}></span>
            <span>Sign in with Apple</span>
          </button>

          <button className={buttonBase}>
            <span className={iconCircle}>f</span>
            <span>Sign in with Facebook</span>
          </button>

          <button className={buttonBase}>
            <span className={iconCircle}>G</span>
            <span>Sign in with Google</span>
          </button>

          <button
            className={buttonBase}
            onClick={() => navigate("/login")}
          >
            <span className={iconCircle}>➜</span>
            <span>Sign in</span>
          </button>
        </motion.div>
      </div>
    </LandingBackground>
  );
};

export default LoginOptions;
