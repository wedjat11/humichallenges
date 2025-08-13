"use client";

import ChampionGridComponent from "@/components/challenges/ChampionGridComponent";
import ChampionName from "@/components/challenges/ChampionName";
import TitleComponent from "@/components/TitleComponent";
import SearchComponent from "@/components/ui/SearchComponent";
import useFetchChampions from "@/utils/useFetchChampions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
            (tag: string) => tag.toLowerCase() === position.toLowerCase()
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
    <section>
      <h1 className="text-3xl text-center font-bold">{challenge.name}</h1>
      <p className="text-center">{challenge.description}</p>
      <div className="w-10/12 flex flex-col gap-4  justify-center mx-auto">
        <h2 className="text-xl font-bold">
          Champions used:
          <span className="text-purple-800">
            {challenge.champions.length}/{numberOfChampions}
          </span>
        </h2>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-2">
          {challenge.champions.length > 0 ? (
            challenge.champions.map((champion, i) => (
              <ChampionName
                key={i}
                name={champion}
                onDelete={() => handleDeleteChampion(champion)}
              />
            ))
          ) : (
            <li>No champions added yet</li>
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <TitleComponent title="Add Champions" />
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          position={position}
          setPosition={setPosition}
        />

        <ChampionGridComponent
          champions={filteredChampions}
          onclick={handleAddChampion}
          sepia={handleSepia}
        />
      </div>
    </section>
  );
}
