import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingBackground from "../components/LandingBackground";
import TrezaLogo from "../components/TrezaLogo";
import BackButton from "../components/BackButton";
import { supabase } from "../lib/supabase";

const LoginOptions: React.FC = () => {
  const navigate = useNavigate();

  // Estilo base de tus botones
  const buttonBase =
    "w-full bg-white text-black py-3 rounded-2xl text-sm md:text-base font-medium shadow-xl flex items-center gap-3 justify-center";

  const iconCircle =
    "flex items-center justify-center w-7 h-7 rounded-full border border-black/30 bg-white";

  // --- SSO HANDLERS ---

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        // En dev:
        redirectTo: "http://localhost:5173/home",
        // Cuando tengas dominio, cambiar a: https://tu-dominio.com/home
      },
    });

    if (error) {
      console.error("Google SSO error:", error);
      alert("Hubo un problema al conectar con Google.");
    }
  };

  const handleAppleLogin = () => {
    // Cuando tengas Apple configurado, aquí va el signInWithOAuth
    // Por ahora un aviso suave:
    alert("Sign in with Apple estará disponible pronto.");
  };

  const handleFacebookLogin = () => {
    // Igual que Apple: placeholder hasta terminar config en Facebook
    alert("Sign in with Facebook estará disponible pronto.");
  };

  return (
    <LandingBackground>
      <BackButton to="/" />

      {/* Empuje para bajar contenido, como hiciste en otras pantallas */}
      <div className="h-32 md:h-40" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-sm mx-auto flex flex-col items-center px-6"
      >
        {/* Logo + tagline */}
        <TrezaLogo className="w-40 mb-4" />
        <p className="text-white text-base font-light mb-8 drop-shadow">
          Let&apos;s get you going!
        </p>

        {/* Botones SSO conservando tu diseño */}
        <div className="w-full max-w-xs flex flex-col gap-3">
          <button className={buttonBase} onClick={handleAppleLogin}>
            <span className={iconCircle}></span>
            <span>Sign in with Apple</span>
          </button>

          <button className={buttonBase} onClick={handleFacebookLogin}>
            <span className={iconCircle}>f</span>
            <span>Sign in with Facebook</span>
          </button>

          <button className={buttonBase} onClick={handleGoogleLogin}>
            <span className={iconCircle}>G</span>
            <span>Sign in with Google</span>
          </button>

          <button
            className={buttonBase}
            onClick={() => navigate("/login")}
          >
            <span className={iconCircle}>↪</span>
            <span>Sign in with email</span>
          </button>
        </div>
      </motion.div>
    </LandingBackground>
  );
}; 
export default LoginOptions;