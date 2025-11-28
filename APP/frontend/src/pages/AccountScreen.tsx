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

const AccountScreen: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("@User");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const loadProfile = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (!user) return;

      setEmail(user.email ?? "");

      const { data: profile } = await supabase
        .from("user_profile")
        .select("username")
        .eq("id", user.id)
        .single();

      if (profile?.username) {
        setUsername(profile.username);
      }
    };

    loadProfile();
  }, []);

  // -----------------------
  //   LOG OUT HANDLER
  // -----------------------
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
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
      <header className="flex items-start justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-black/90 mb-1">
            Your account!
          </h1>
          <p className="text-xs text-black/60">{username}</p>
        </div>

        <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"
          onClick={() => navigate("/events")}
          >
          <img src={headerMapIcon} alt="Map" className="w-6 h-6" />
        </button>
      </header>

      {/* MAIN */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {/* AVATAR */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 shadow-inner" />
            <button className="absolute -bottom-1 right-2 w-10 h-10 rounded-full bg-white border border-black/20 shadow flex items-center justify-center text-xl">
              📷
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* CARD 1 */}
          <div className="relative bg-white/92 rounded-3xl shadow-lg px-4 py-4">
            <button
              className="absolute -top-3 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-black/70 shadow-md border border-black/10"
              onClick={() => alert("Editar perfil próximamente")}
            >
              Editar
            </button>

            <p className="text-xs font-semibold text-black/60 mb-1">
              Account details
            </p>
            <p className="text-sm text-black mb-1">
              <span className="font-medium">Username: </span>
              {username}
            </p>
            <p className="text-sm text-black/80">
              <span className="font-medium">Email: </span>
              {email || "—"}
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/92 rounded-3xl shadow-lg px-4 py-4">
            <p className="text-xs font-semibold text-black/60 mb-1">
              Your travel style
            </p>
            <p className="text-sm text-black/80">
              Aquí mostraremos tu resumen del onboarding.
            </p>
          </div>

          {/* CARD 3 + LOG OUT */}
          <div className="bg-white/92 rounded-3xl shadow-lg px-4 py-4">
            <p className="text-xs font-semibold text-black/60 mb-2">
              Extra info
            </p>
            <p className="text-sm text-black/80 mb-4">
              Espacio para futura información.
            </p>

            {/* LOG OUT BUTTON */}
            <button
              onClick={handleLogout}
              className="w-full bg-[#2da4dc] text-white py-2 rounded-xl font-semibold shadow-md active:scale-[0.98] transition"
            >
              Log out
            </button>
          </div>
        </div>
      </main>

      {/* NAV INFERIOR */}
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
          <button className="w-7 h-7" onClick={() => navigate("/mytrips")}>
            <img src={worldIcon} alt="World" className="w-full h-full" />
          </button>

          {/* Usuario activo */}
          <button className="w-7 h-7 rounded-full border-2 border-[#2da4dc] p-0.5">
            <img src={userIcon} alt="Profile" className="w-full h-full" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AccountScreen;
