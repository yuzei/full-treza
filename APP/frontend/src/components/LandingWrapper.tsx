import React from "react";
import Bg from "../assets/bg-landing.jpg";

const LandingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Capa oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
};

export default LandingWrapper;
