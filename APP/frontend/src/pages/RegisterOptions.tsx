import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingBackground from "../components/LandingBackground";
import TrezaLogo from "../components/TrezaLogo";
import BackButton from "../components/BackButton";
import { supabase } from "../lib/supabase";

const RegisterOptions: React.FC = () => {
  const navigate = useNavigate();

  const buttonBase =
    "w-full bg-white text-black py-3 rounded-2xl text-sm md:text-base font-medium shadow-xl flex items-center gap-3 justify-center";

  const iconCircle =
    "flex items-center justify-center w-7 h-7 rounded-full border border-black/30 bg-white";

  // ------------------------------
  // SSO: Google (completo y funcional)
  // ------------------------------
  const handleGoogleRegister = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/onboarding/welcome",
      },
    });

    if (error) {
      console.error(error);
      alert("Hubo un problema al iniciar sesión con Google.");
    }
  };

  // ------------------------------
  // Placeholders para Apple & Facebook
  // ------------------------------
  const handleApple = () => {
    alert("Apple SSO estará disponible pronto.");
  };

  const handleFacebook = () => {
    alert("Facebook SSO estará disponible pronto.");
  };

  return (
    <LandingBackground>
      <div className="w-full h-full flex flex-col items-center px-6">
        
        <BackButton to="/" />

        {/* Espaciado superior */}
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

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-xs flex flex-col gap-3"
        >
          {/* APPLE */}
          <button className={buttonBase} onClick={handleApple}>
            <span className={iconCircle}></span>
            <span>Register with Apple</span>
          </button>

          {/* FACEBOOK */}
          <button className={buttonBase} onClick={handleFacebook}>
            <span className={iconCircle}>f</span>
            <span>Register with Facebook</span>
          </button>

          {/* GOOGLE */}
          <button className={buttonBase} onClick={handleGoogleRegister}>
            <span className={iconCircle}>G</span>
            <span>Register with Google</span>
          </button>

          {/* EMAIL / PASSWORD */}
          <button
            className={buttonBase}
            onClick={() => navigate("/register")}
          >
            <span className={iconCircle}>➜</span>
            <span>Register</span>
          </button>
        </motion.div>
      </div>
    </LandingBackground>
  );
};

export default RegisterOptions;
