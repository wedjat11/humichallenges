"use client";

import "lenis/dist/lenis.css";
import ChampionCard from "./ChampionCard";

export type ChampionData = {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
};

export default function ChampionGridComponent({
  champions,
  onclick,
  sepia,
}: {
  champions: ChampionData[];
  onclick?: (name: string) => void;
  sepia?: (name: string) => boolean;
}) {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <section className="p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-2 ">
        {champions.map((champ) => (
          <ChampionCard
            key={champ.id}
            splashart={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              champ.id
            }_${getRandomInt(2)}.jpg`}
            name={champ.name}
            onClick={() => onclick?.(champ.name)}
            className={sepia && sepia(champ.name) ? "sepia" : ""}
          />
        ))}
      </ul>
    </section>
  );
}
