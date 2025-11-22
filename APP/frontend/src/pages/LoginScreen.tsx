import React, { useState } from "react";
import { motion } from "framer-motion";
import LandingBackground from "../components/LandingBackground";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <LandingBackground blur>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm rounded-3xl bg-[#f3ece2]/95 px-6 py-8 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-center mb-6 underline decoration-black/60">
          Sign In
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-black/80">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm mb-1 text-black/80">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember + Forgot password */}
        <div className="flex items-center justify-between mb-5 text-xs text-black/70">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-3 w-3"
            />
            <span>Remember me</span>
          </label>
          <button className="underline underline-offset-2">
            Forgot password?
          </button>
        </div>

        {/* Botón principal */}
        <button className="w-full rounded-2xl bg-black text-white py-3 text-sm font-medium shadow-md mb-4">
          Enter
        </button>

        {/* Link inferior */}
        <p className="text-center text-xs text-black/70">
          Don&apos;t have an account?{" "}
          <span className="font-semibold underline underline-offset-2">
            Register
          </span>
        </p>
      </motion.div>
    </LandingBackground>
  );
};

export default LoginScreen;
