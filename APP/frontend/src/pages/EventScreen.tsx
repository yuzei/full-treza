import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fondoActivo from "../assets/fondo-activo.png";

// Íconos
import headerMapIcon from "../assets/icons/header-map.svg";import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

const EventsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert("Searching events in: " + search);
    }
  };

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
      <header className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <h1 className="text-xl font-semibold text-black/80">Events!</h1>
        </div>

        {/* Ícono azul para indicar que estamos en eventos */}
        <button className="w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center border border-[#2da4dc]">
          <img src={headerMapIcon} className="w-6 h-6" />
        </button>
      </header>

      {/* SEARCH BAR */}
      <div className="mb-5">
        <div className="bg-white/90 rounded-full px-4 py-2 shadow flex items-center">
          <input
            type="text"
            placeholder="Search your country..."
            className="bg-transparent w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
          <img src={searchIcon} className="w-5 h-5 opacity-70" />
        </div>
      </div>

      {/* LISTA DE EVENTOS / GRID */}
      <div className="grid grid-cols-2 gap-4 pb-28">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white/90 rounded-3xl shadow overflow-hidden"
          >
            <div className="w-full h-28 bg-gray-300"></div>
            <div className="px-3 py-2">
              <p className="text-sm font-medium">Event Name</p>

              <div className="flex justify-between mt-2">
                <span className="text-xs bg-white rounded px-2 py-1 shadow">
                  Price
                </span>
                <span className="text-xs bg-white rounded px-2 py-1 shadow">
                  Duration
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAV INFERIOR */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
        <div className="bg-white/95 rounded-3xl shadow-xl px-6 py-3 flex justify-between items-center">
          
          <button onClick={() => navigate("/home")} className="w-7 h-7">
            <img src={planeIcon} className="w-full h-full" />
          </button>

          <button onClick={() => navigate("/search")} className="w-7 h-7">
            <img src={searchIcon} className="w-full h-full" />
          </button>

          <button onClick={() => navigate("/wallet")} className="w-7 h-7">
            <img src={walletIcon} className="w-full h-full" />
          </button>

          <button onClick={() => navigate("/mytrips")} className="w-7 h-7">
            <img src={worldIcon} className="w-full h-full" />
          </button>

          <button onClick={() => navigate("/account")} className="w-7 h-7">
            <img src={userIcon} className="w-full h-full" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default EventsScreen;
