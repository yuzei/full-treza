import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingBackground from "../components/LandingBackground";
import TrezaLogo from "../components/TrezaLogo";

const EntryRoot: React.FC = () => {
  const [phase, setPhase] = useState<"splash" | "entry">("splash");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setPhase("entry"), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingBackground>
      <div className="w-full h-full flex flex-col items-center px-6">
        {/* Spacer para empujar hacia abajo (ajustaste esto tú) */}
        <div className="h-56 md:h-48" />

        {/* Logo + texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: phase === "splash" ? 100 : -10,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center"
        >
          <TrezaLogo className="w-64 h-auto mb-4" />

          {phase === "entry" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white text-lg font-light text-center mt-6 drop-shadow-lg"
            >
              Let’s get you going!
            </motion.p>
          )}
        </motion.div>

        {/* Botones: navegan a opciones de Login / Register */}
        {phase === "entry" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full max-w-xs flex flex-col gap-4 mt-12"
          >
            <button
              className="w-full bg-white text-black py-3 rounded-2xl text-lg font-medium shadow-xl"
              onClick={() => navigate("/login-options")}
            >
              Sign In
            </button>

            <button
              className="w-full bg-white text-black py-3 rounded-2xl text-lg font-medium shadow-xl"
              onClick={() => navigate("/register-options")}
            >
              Register
            </button>
          </motion.div>
        )}
      </div>
    </LandingBackground>
  );
};

export default EntryRoot;
