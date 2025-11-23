import React from "react";

const AppLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
    <div className="animate-spin rounded-full w-12 h-12 border-4 border-[#2da4dc] border-t-transparent" />
  </div>
);

export default AppLoader;
