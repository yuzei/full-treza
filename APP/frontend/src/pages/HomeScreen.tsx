import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import fondoActivo from "../assets/fondo-activo.png";

// Íconos
import headerMapIcon from "../assets/icons/header-map.svg";
import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

const HomeScreen: React.FC = () => {
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
            <span className="text-sm text-black/70">Hi, @{username}!</span>
            <button className="text-sm text-black underline">
              News in Treza
            </button>
          </div>
        </div>

        {/* Icono mapa header */}
        <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center">
          <img src={headerMapIcon} alt="Map" className="w-6 h-6" />
        </button>
      </header>

      {/* CARD 1 */}
      <section className="bg-white/90 rounded-3xl shadow-lg overflow-hidden mb-4">
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
          Foto bonita
        </div>
        <div className="px-4 py-3 text-sm text-black/80">Info 1</div>
      </section>

      {/* CARD 2 */}
      <section className="bg-white/90 rounded-3xl shadow-lg overflow-hidden mb-24">
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
          Foto bonita
        </div>
      </section>

      {/* NAV INFERIOR */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
        <div className="bg-white/95 rounded-3xl shadow-xl px-6 py-3 flex justify-between items-center">
          <button className="w-7 h-7">
            <img src={planeIcon} alt="Explore" className="w-full h-full" />
          </button>
          <button className="w-7 h-7">
            <img src={searchIcon} alt="Search" className="w-full h-full" />
          </button>
          <button className="w-7 h-7">
            <img src={walletIcon} alt="Wallet" className="w-full h-full" />
          </button>
          <button className="w-7 h-7">
            <img src={worldIcon} alt="World" className="w-full h-full" />
          </button>
          <button className="w-7 h-7">
            <img src={userIcon} alt="Profile" className="w-full h-full" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HomeScreen;
