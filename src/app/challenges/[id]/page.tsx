"use client";

import ChampionGridComponent from "@/components/challenges/ChampionGridComponent";
import ChampionName from "@/components/challenges/ChampionName";
import SearchComponent from "@/components/SearchComponent";
import TitleComponent from "@/components/TitleComponent";
import useFetchChampions from "@/utils/useFetchChampions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IndividualChampion from "@/components/challenges/IndividualChampion";
import Logo from "@/assets/logo.png";
import Image from "next/image";

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

  const router = useRouter();

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
    <section className="p-6 w-full text-white gap-10 flex flex-col relative ">
      <div className="absolute top-4 left-4">
        <Image src={Logo} alt="Logo" width={45} height={45} className="pb-10" />
      </div>
      <div className="flex flex-col w-full mt-15">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-3xl font-bold ">{challenge.name}</h1>
          <p onClick={router.back}> goback</p>
        </div>
        <p className="text-white/40 text-[20px] font-semibold ">
          {challenge.description}
        </p>
      </div>

      <div className="w-full flex justify-between">
        <h2 className="text-3xl font-bold">Champions used:</h2>
        <p className="text-white/40 text-3xl font-semibold">
          {challenge.champions.length}/{numberOfChampions}
        </p>
      </div>
      <div className="w-full flex flex-col  ">
        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
          {challenge.champions.length > 0 ? (
            challenge.champions.map((champion, i) => (
              <IndividualChampion
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
