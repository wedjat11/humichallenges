"use client";

import ChampionGridComponent from "@/components/challenges/ChampionGridComponent";
import ChampionName from "@/components/challenges/ChampionName";
import SearchComponent from "@/components/SearchComponent";
import TitleComponent from "@/components/TitleComponent";
import useFetchChampions from "@/utils/useFetchChampions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Challenge = {
  name: string;
  description: string;
  champions: string[];
};

export default function IndividualChallenge() {
  const { champions, loading, error } = useFetchChampions();
  const numberOfChampions = champions.length;
  const params = useParams();
  const id = params?.id as string;
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("");

  const filteredChampions = champions.filter((champ) => {
    const matchesSearch = champ.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPosition =
      position === "all" || position === ""
        ? true
        : champ.tags?.some(
            (tag: string) => tag === position
          );

    return matchesSearch && matchesPosition;
  });

  useEffect(() => {
    if (id) {
      const stored = localStorage.getItem("challenges");
      if (stored) {
        const challenges: Challenge[] = JSON.parse(stored);
        const index = parseInt(id, 10);
        if (!isNaN(index) && challenges[index]) {
          setChallenge(challenges[index]);
        }
      }
    }
  }, [id]);

  const handleAddChampion = (championName: string) => {
    const stored = localStorage.getItem("challenges");
    if (stored) {
      const challenges: Challenge[] = JSON.parse(stored);
      const index = parseInt(id, 10);
      if (!isNaN(index) && challenges[index]) {
        if (!challenges[index].champions.includes(championName)) {
          challenges[index].champions.push(championName);
          localStorage.setItem("challenges", JSON.stringify(challenges));
          setChallenge({ ...challenges[index] });
        }
      }
    }
  };

  const handleDeleteChampion = (championName: string) => {
    const stored = localStorage.getItem("challenges");
    if (stored) {
      const challenges: Challenge[] = JSON.parse(stored);
      const index = parseInt(id, 10);
      if (!isNaN(index) && challenges[index]) {
        const championIndex = challenges[index].champions.indexOf(championName);
        if (championIndex !== -1) {
          challenges[index].champions.splice(championIndex, 1);
          localStorage.setItem("challenges", JSON.stringify(challenges));
          setChallenge({ ...challenges[index] }); // Actualiza estado para renderizar
        }
      }
    }
  };

  if (!challenge) {
    return <p>Cargando challenge...</p>;
  }

  const handleSepia = (championName: string) => {
    if (challenge?.champions.includes(championName)) {
      return true;
    }
    return false;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link 
          href="/challenges" 
          className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Challenges</span>
        </Link>

        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
            {challenge.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {challenge.description}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Selected Champions
              <span className="bg-purple-600/80 px-3 py-1 rounded-full text-sm font-mono">
                {challenge.champions.length}/{numberOfChampions}
              </span>
            </h2>
          </div>
          
          <ul className="flex flex-wrap gap-3 justify-center min-h-[100px] items-center bg-black/20 rounded-xl p-4">
            {challenge.champions.length > 0 ? (
              challenge.champions.map((champion, i) => (
                <ChampionName
                  key={i}
                  name={champion}
                  onDelete={() => handleDeleteChampion(champion)}
                />
              ))
            ) : (
              <li className="text-gray-400 italic">No champions added yet. Start building your team!</li>
            )}
          </ul>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
            <TitleComponent title="Add Champions" />
            <SearchComponent
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              position={position}
              setPosition={setPosition}
            />
          </div>

          <div className="mt-8">
            <ChampionGridComponent
              champions={filteredChampions}
              onclick={handleAddChampion}
              sepia={handleSepia}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
