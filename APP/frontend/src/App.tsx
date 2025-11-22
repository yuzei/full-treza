import React from "react";
import { Routes, Route } from "react-router-dom";
import EntryRoot from "./pages/EntryRoot";
import LoginOptions from "./pages/LoginOptions";
import RegisterOptions from "./pages/RegisterOptions";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EntryRoot />} />
      <Route path="/login-options" element={<LoginOptions />} />
      <Route path="/register-options" element={<RegisterOptions />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Routes>
  );
};

export default App;
