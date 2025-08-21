import { useState } from "react";
import TitleComponent from "../TitleComponent";
import SearchComponent from "../ui/SearchComponent";
import ChampionGridComponent from "./ChampionGridComponent";

export default function ChallegeContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("all");

  return (
    <section>
      <TitleComponent title="Create a new challenge" />
      <SearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        position={position}
        setPosition={setPosition}
      />
      {/* <ChampionGridComponent /> */}
    </section>
  );
}
