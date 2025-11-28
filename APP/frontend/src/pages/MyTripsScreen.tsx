import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

import fondoActivo from "../assets/fondo-activo.png";

// Icons
import headerMapIcon from "../assets/icons/header-map.svg";
import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

interface Trip {
  id: number;
  title: string;
  subtitle?: string;
}

const MyTripsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  // Placeholder de viajes (luego lo podemos conectar a Supabase)
  const [trips] = useState<Trip[]>([
    { id: 1, title: "Travel 1", subtitle: "Short description" },
    { id: 2, title: "Travel 2", subtitle: "Short description" },
    { id: 3, title: "Travel 3", subtitle: "Short description" },
  ]);

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

  const handleAddTrip = () => {
    // Más adelante: abrir modal / ir a pantalla de crear viaje
    alert("Here you will be able to create a new trip ✈️");
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
            <span className="text-sm text-black/70">My Travels!</span>
            <span className="text-xs text-black/50">@{username}</span>
          </div>
        </div>

        <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"
            onClick={() => navigate("/events")}
          >
          <img src={headerMapIcon} alt="Map" className="w-6 h-6" />
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Big + button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleAddTrip}
            className="w-20 h-20 rounded-full bg-white/95 shadow-xl flex items-center justify-center text-4xl text-black/70"
          >
            +
          </button>
        </div>

        {/* Trips list */}
        <div className="flex flex-col gap-4">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white/92 rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="px-4 py-2 text-sm font-semibold text-black/80 border-b border-black/10">
                {trip.title}
              </div>
              <div className="px-4 py-3 text-sm text-black/70 h-16 flex items-center">
                {trip.subtitle || "Tap to see details"}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
        <div className="bg-white/95 rounded-3xl shadow-xl px-6 py-3 flex justify-between items-center">
          <button className="w-7 h-7" onClick={() => navigate("/home")}>
            <img src={planeIcon} alt="Explore" className="w-full h-full" />
          </button>

          <button className="w-7 h-7" onClick={() => navigate("/search")}>
            <img src={searchIcon} alt="Search" className="w-full h-full" />
          </button>

          <button className="w-7 h-7" onClick={() => navigate("/wallet")}>
            <img src={walletIcon} alt="Wallet" className="w-full h-full" />
          </button>

          {/* World icon ACTIVO */}
          <button className="w-7 h-7 rounded-full border-2 border-[#2da4dc] p-0.5">
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

export default MyTripsScreen;
