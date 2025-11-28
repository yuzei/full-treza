import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import fondoActivo from "../assets/fondo-activo.png";

import headerMapIcon from "../assets/icons/header-map.svg";
import backIcon from "../assets/icons/back-arrow.svg"; 
import settingsIcon from "../assets/icons/settings.svg"; 

import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

const TravelDetails: React.FC = () => {
  const navigate = useNavigate();
  const { city } = useParams(); // ← obtiene la ciudad desde la URL

  return (
    <div
      className="w-full h-full min-h-screen px-5 py-6"
      style={{
        backgroundImage: `url(${fondoActivo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} className="w-6 h-6" />
        </button>

        <h1 className="text-lg font-semibold text-black/80">
          {city?.toUpperCase()}
        </h1>

        <button>
          <img src={headerMapIcon} className="w-6 h-6" />
        </button>
      </header>

      {/* MAIN IMAGE */}
      <div className="bg-gray-300 rounded-3xl w-full h-56 mb-3 p-4 flex flex-col justify-between">
        <div className="text-xs text-white/80">Dep date / Comeback date</div>
        <div className="text-xs text-white/80">travel cost details</div>
      </div>

      {/* DAY 1 */}
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-black/80">Day 1</p>
        <img src={settingsIcon} className="w-5 h-5" />
      </div>

      <button className="bg-white/90 rounded-xl shadow px-4 py-3 w-full mb-3 flex justify-between items-center">
        <span>Fly data option</span>
        <span className="px-3 py-1 bg-[#2da4dc] text-white rounded-md text-sm">
          Price
        </span>
      </button>

      <button className="bg-white/90 rounded-xl shadow px-4 py-3 w-full flex justify-between items-center">
        <span>Hotel/residence data option</span>
        <span className="px-3 py-1 bg-[#2da4dc] text-white rounded-md text-sm">
          Price
        </span>
      </button>

      {/* DAY 2 */}
      <div className="mt-4 font-semibold text-black/80">Day 2</div>

      {/* NAV */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
        <div className="bg-white/95 rounded-3xl shadow-xl px-6 py-3 flex justify-between items-center">
          <button onClick={() => navigate("/home")} className="w-7 h-7">
            <img src={planeIcon} />
          </button>
          <button onClick={() => navigate("/search")} className="w-7 h-7">
            <img src={searchIcon} />
          </button>
          <button onClick={() => navigate("/wallet")} className="w-7 h-7">
            <img src={walletIcon} />
          </button>
          <button onClick={() => navigate("/mytrips")} className="w-7 h-7">
            <img src={worldIcon} />
          </button>
          <button onClick={() => navigate("/account")} className="w-7 h-7">
            <img src={userIcon} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TravelDetails;
