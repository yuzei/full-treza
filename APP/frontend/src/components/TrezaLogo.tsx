import React from "react";
import Logo from "../assets/treza-logo-white.svg";

interface TrezaLogoProps {
  className?: string;
}

const TrezaLogo: React.FC<TrezaLogoProps> = ({ className }) => {
  return (
    <img
      src={Logo}
      alt="Treza Logo"
      className={className ?? "w-40 h-auto select-none"}
      draggable={false}
    />
  );
};

export default TrezaLogo;
