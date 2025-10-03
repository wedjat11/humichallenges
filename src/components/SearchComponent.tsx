"use client";

import Image from "next/image";
import { Input } from "./input";

interface SearchComponentProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  position: string;
  setPosition: (val: string) => void;
}

interface PositionButtonProps {
  icon: string;
  label: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
}

function PositionButton({ icon, label, value, isActive, onClick }: PositionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`position-filter-btn group relative flex flex-col items-center justify-center gap-2 p-3 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-b from-purple-600/40 to-purple-800/40 border-2 border-purple-500 shadow-lg shadow-purple-500/50"
          : "bg-white/5 border-2 border-white/10 hover:border-purple-400/50 hover:bg-white/10"
      }`}
      title={label}
    >
      <div className={`relative w-12 h-12 transition-all duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
        <Image
          src={icon}
          alt={label}
          fill
          className={`object-contain transition-all duration-300 ${
            isActive ? "brightness-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" : "brightness-90 group-hover:brightness-110"
          }`}
        />
      </div>
      <span className={`text-xs font-semibold transition-all duration-300 ${
        isActive ? "text-purple-300" : "text-white/70 group-hover:text-white"
      }`}>
        {label}
      </span>
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse" />
      )}
    </button>
  );
}

export default function SearchComponent({
  searchTerm,
  setSearchTerm,
  position,
  setPosition,
}: SearchComponentProps) {
  const positions = [
    { value: "all", label: "All", icon: "/position_all_icon_1766208553958.png" },
    { value: "Fighter", label: "Top", icon: "/position_top_icon_1766208487190.png" },
    { value: "Assassin", label: "Jungle", icon: "/position_jungle_icon_1766208501182.png" },
    { value: "Mage", label: "Mid", icon: "/position_mid_icon_1766208513804.png" },
    { value: "Marksman", label: "ADC", icon: "/position_adc_icon_1766208526312.png" },
    { value: "Support", label: "Support", icon: "/position_support_icon_1766208540617.png" },
  ];

  return (
    <section className="flex flex-col gap-6 w-full items-center justify-center">
      <div className="w-full flex flex-col items-center gap-4">
        <Input
          placeholder="Search champion..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500/50 focus:ring-purple-500/50"
        />
        
        <div className="flex flex-wrap gap-3 justify-center p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
          {positions.map((pos) => (
            <PositionButton
              key={pos.value}
              icon={pos.icon}
              label={pos.label}
              value={pos.value}
              isActive={position === pos.value || (position === "" && pos.value === "all")}
              onClick={() => setPosition(pos.value)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
