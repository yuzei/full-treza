import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="absolute top-6 left-4 text-white text-4xl font-light select-none"
    >
      ‹
    </button>
  );
};

export default BackButton;
