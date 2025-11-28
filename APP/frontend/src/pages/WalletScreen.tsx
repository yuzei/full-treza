import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

import fondoActivo from "../assets/fondo-activo.png";

// Íconos (mismos que el resto de pantallas)
import headerMapIcon from "../assets/icons/header-map.svg";
import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

interface AirlineCard {
  id: number;
  name: string;
}

const airlines: AirlineCard[] = [
  { id: 1, name: "airline 1" },
  { id: 2, name: "airline 2" },
  { id: 3, name: "airline 3" },
  { id: 4, name: "airline 4" },
  { id: 5, name: "airline 5" },
  { id: 6, name: "airline 6" },
  { id: 7, name: "airline 7" },
  { id: 8, name: "airline 8" },
  { id: 9, name: "airline 9" },
];

const WalletScreen: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const loadProfile = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (!user) return;

      const { data: profile } = await supabase
        .from("user_profile")
        .select("username")
        .eq("id", user.id)
        .single();

      if (profile?.username) setUsername(profile.username);
    };

    loadProfile();
  }, []);

  const handleConnect = (airlineName: string) => {
    // Más adelante: aquí conectas con la API de la aerolínea, OAuth, etc.
    alert(`Here we will connect your account with ${airlineName} ✈️`);
  };

  return (
    <div
      className="w-full h-full min-h-screen px-5 py-6 flex flex-col"
      style={{
        backgroundImage: `url(${fondoActivo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="flex flex-col">
            <span className="text-lg text-black/85 font-semibold">
              Tickets Wallet
            </span>
            <span className="text-xs text-black/60">@{username}</span>
          </div>
        </div>

        <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center">
          <img src={headerMapIcon} alt="Map" className="w-6 h-6" />
        </button>
      </header>

      {/* SUBTEXTO */}
      <p className="text-center text-sm text-black/70 mb-4">
        You&apos;re not connected to any airline :c
      </p>

      {/* GRID DE AEROLÍNEAS */}
      <main className="flex-1 pb-24 overflow-y-auto">
        <div className="grid grid-cols-3 gap-3">
          {airlines.map((airline) => (
            <button
              key={airline.id}
              onClick={() => handleConnect(airline.name)}
              className="bg-white/92 rounded-2xl shadow-md flex flex-col justify-between items-stretch h-32"
            >
              {/* “logo” gris */}
              <div className="flex-1 bg-gray-200/90 rounded-t-2xl flex items-center justify-center text-[11px] text-black/60 px-1 text-center">
                {airline.name} logo
              </div>
              {/* botón CONNECT */}
              <div className="py-2 text-center text-xs font-medium text-black/80 bg-white rounded-b-2xl border-t border-black/10">
                Connect
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* NAV INFERIOR (wallet activo) */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
        <div className="bg-white/95 rounded-3xl shadow-xl px-6 py-3 flex justify-between items-center">
          <button className="w-7 h-7" onClick={() => navigate("/home")}>
            <img src={planeIcon} alt="Explore" className="w-full h-full" />
          </button>

          <button className="w-7 h-7" onClick={() => navigate("/search")}>
            <img src={searchIcon} alt="Search" className="w-full h-full" />
          </button>

          {/* Wallet ACTIVO (borde celeste) */}
          <button className="w-7 h-7 rounded-full border-2 border-[#2da4dc] p-0.5">
            <img src={walletIcon} alt="Wallet" className="w-full h-full" />
          </button>

          <button className="w-7 h-7" onClick={() => navigate("/mytrips")}>
            <img src={worldIcon} alt="My travels" className="w-full h-full" />
          </button>

          <button className="w-7 h-7" onClick={() => navigate("/account")}>
            <img src={userIcon} alt="Profile" className="w-full h-full" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default WalletScreen;
