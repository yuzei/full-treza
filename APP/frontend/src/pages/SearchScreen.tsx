import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

import fondoActivo from "../assets/fondo-activo.png";

// Íconos
import headerMapIcon from "../assets/icons/header-map.svg";
import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

const SearchScreen: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");
  const [query, setQuery] = useState("");

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

  const triggerSearch = () => {
    if (!query.trim()) {
      alert("Type a city or place to search 🙂");
      return;
    }
    alert(`Searching trips for: ${query}`);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      triggerSearch();
    }
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
              Search Time!
            </span>
            <span className="text-xs text-black/60">@{username}</span>
          </div>
        </div>

        <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"
            onClick={() => navigate("/events")}
          >
          <img src={headerMapIcon} alt="Map" className="w-6 h-6" />
        </button>
      </header>

      {/* SEARCH BAR */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Barcelona"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-white/95 rounded-full py-2.5 pl-4 pr-10 text-sm shadow-md border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/10"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center"
          onClick={triggerSearch}
        >
          <img src={searchIcon} alt="Search" className="w-full h-full" />
        </button>
      </div>

      {/* RESULT CARDS MOCK */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Card 1 */}
        <section className="bg-white/92 rounded-3xl shadow-lg overflow-hidden mb-4">
          <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-sm text-black/60">
            Result card 1 (photo)
          </div>
          <div className="px-4 py-2 flex justify-between items-center text-xs text-black/70">
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded-full border border-black/20">
                Price
              </span>
              <span className="px-2 py-0.5 rounded-full border border-black/20">
                Duration
              </span>
            </div>
            <span>?D/?N</span>
          </div>
        </section>

        {/* Card 2 */}
        <section className="bg-white/92 rounded-3xl shadow-lg overflow-hidden mb-4">
          <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-sm text-black/60">
            Result card 2 (photo)
          </div>
          <div className="px-4 py-2 flex justify-between items-center text-xs text-black/70">
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded-full border border-black/20">
                Price
              </span>
              <span className="px-2 py-0.5 rounded-full border border-black/20">
                Duration
              </span>
            </div>
            <span>?D/?N</span>
          </div>
        </section>
      </main>

      {/* NAV INFERIOR (search activo) */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
        <div className="bg-white/95 rounded-3xl shadow-xl px-6 py-3 flex justify-between items-center">
          <button className="w-7 h-7" onClick={() => navigate("/home")}>
            <img src={planeIcon} alt="Explore" className="w-full h-full" />
          </button>

          {/* Search ACTIVO */}
          <button className="w-7 h-7 rounded-full border-2 border-[#2da4dc] p-0.5">
            <img src={searchIcon} alt="Search" className="w-full h-full" />
          </button>

          <button className="w-7 h-7" onClick={() => navigate("/wallet")}>
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

export default SearchScreen;
