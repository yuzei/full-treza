import React from "react";
import Background from "../assets/fondo-inicio-treza.svg";

interface LandingBackgroundProps {
  children: React.ReactNode;
  blur?: boolean; // <- NUEVO
}

const LandingBackground: React.FC<LandingBackgroundProps> = ({
  children,
  blur = false,
}) => {
  return (
    
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Capa oscura + opcional blur */}
      <div
        className={`absolute inset-0 ${
          blur
            ? "bg-black/60 backdrop-blur-sm"
            : "bg-black/45"
        }`}
      />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
};

export default LandingBackground;
