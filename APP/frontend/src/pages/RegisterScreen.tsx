import React, { useState } from "react";
import { motion } from "framer-motion";
import LandingBackground from "../components/LandingBackground";

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LandingBackground blur>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm rounded-3xl bg-[#f3ece2]/95 px-6 py-8 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">
          Register
        </h1>

        {/* Username */}
        <div className="mb-3">
          <label className="block text-sm mb-1 text-black/80">
            Username
          </label>
          <input
            type="text"
            className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/30"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm mb-1 text-black/80">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-5">
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

        {/* Botón principal */}
        <button className="w-full rounded-2xl bg-black text-white py-3 text-sm font-medium shadow-md mb-4">
          Sign Up
        </button>

        {/* Link inferior */}
        <p className="text-center text-xs text-black/70">
          Already have an account?{" "}
          <span className="font-semibold underline underline-offset-2">
            Sign in
          </span>
        </p>
      </motion.div>
    </LandingBackground>
  );
};

export default RegisterScreen;
