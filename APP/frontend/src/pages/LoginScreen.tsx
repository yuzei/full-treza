import React, { useState } from "react";
import { motion } from "framer-motion";
import LandingBackground from "../components/LandingBackground";
import BackButton from "../components/BackButton";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("SUPABASE LOGIN RESPONSE:", { data, error });


    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    // LOGIN OK → ir al home
    navigate("/home");
  };

  const handleForgot = async () => {
    if (!email) {
      setErrorMsg("Enter your email first.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    alert("Check your email to reset your password.");
  };

  return (
    <LandingBackground blur>
      <BackButton to="/login-options" />

      <div className="h-56 md:h-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm rounded-3xl bg-[#f3ece2]/95 px-6 py-8 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm mb-1 text-black/80">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/40"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-black/80">Password</label>
          <input
            type="password"
            className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Error */}
        {errorMsg && (
          <p className="text-red-600 text-center text-xs mb-3">{errorMsg}</p>
        )}

        {/* Login button */}
        <button
          disabled={loading}
          onClick={handleLogin}
          className="w-full rounded-2xl bg-black text-white py-3 text-sm font-medium shadow-md mb-3 disabled:opacity-40"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Forgot password */}
        <button
          onClick={handleForgot}
          className="block w-full text-center text-xs text-black/70 underline underline-offset-2 mb-3"
        >
          Forgot password?
        </button>

        {/* Register link */}
        <p className="text-center text-xs text-black/70">
          Don't have an account?{" "}
          <span
            className="font-semibold underline underline-offset-2"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </motion.div>
    </LandingBackground>
  );
};

export default LoginScreen;
