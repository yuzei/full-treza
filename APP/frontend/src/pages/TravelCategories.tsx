import React from "react";
import { useNavigate } from "react-router-dom";
import fondoActivo from "../assets/fondo-activo.png";

import headerMapIcon from "../assets/icons/header-map.svg";
import planeIcon from "../assets/icons/nav-plane.svg";
import searchIcon from "../assets/icons/nav-search.svg";
import walletIcon from "../assets/icons/nav-wallet.svg";
import worldIcon from "../assets/icons/nav-world.svg";
import userIcon from "../assets/icons/nav-user.svg";

const dummyData = [
  {
    section: "Europe and Middle East",
    cities: ["City", "City", "City"]
  },
  {
    section: "North America",
    cities: ["City", "City", "City"]
  },
  {
    section: "Europe and Middle East",
    cities: ["City", "City", "City"]
  }
];

const TravelCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCityClick = (city: string) => {
    navigate(`/travel/${city.toLowerCase()}`);
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
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <h1 className="text-xl font-semibold text-black/80">Travels</h1>
        </div>

        <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"
            onClick={() => navigate("/events")}
          >
          <img src={headerMapIcon} className="w-6 h-6" />
        </button>
      </header>

      {/* SECTIONS */}
      {dummyData.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold text-black/80 mb-2">
            {section.section}
          </h2>

          <div className="flex gap-3 overflow-x-auto pb-1">
            {section.cities.map((city, i) => (
              <button
                key={i}
                onClick={() => handleCityClick(city)}
                className="min-w-[120px] bg-white/90 rounded-3xl shadow-md overflow-hidden"
              >
                <div className="w-full h-28 bg-gray-300"></div>
                <div className="p-2 text-sm">
                  <p className="font-medium">{city}</p>
                  <p className="text-xs text-black/50">10D/7N — Price</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* NAV */}
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

export default TravelCategories;
