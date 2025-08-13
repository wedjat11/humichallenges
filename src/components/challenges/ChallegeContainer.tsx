import TitleComponent from "../TitleComponent";
import SearchComponent from "../ui/SearchComponent";
import ChampionGridComponent from "./ChampionGridComponent";

export default function ChallegeContainer() {
  return (
    <section>
      <TitleComponent title="Create a new challenge" />
      <SearchComponent />
      <ChampionGridComponent />
    </section>
  );
}
