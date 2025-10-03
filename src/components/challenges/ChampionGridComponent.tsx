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
  return (
    <section className="w-full">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 p-4">
        {champions.map((champ) => (
          <ChampionCard
            key={champ.id}
            splashart={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              champ.id
            }_${champ.id.charCodeAt(0) % 2}.jpg`}
            name={champ.name}
            onClick={() => onclick?.(champ.name)}
            className={sepia && sepia(champ.name) ? "sepia" : ""}
          />
        ))}
      </ul>
    </section>
  );
}
