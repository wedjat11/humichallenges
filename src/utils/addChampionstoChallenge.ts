interface addChampionsToChallengeProps {
  id: string;
  name: string;
}

type Challenge = {
  name: string;
  description: string;
  champions: string[];
};

export default function addChampionsToChallenge({
  id,
  name,
}: addChampionsToChallengeProps) {
  const stored = localStorage.getItem("challenges");
  if (stored) {
    const challenges: Challenge[] = JSON.parse(stored);
    const index = parseInt(id, 10);
    if (!isNaN(index) && challenges[index]) {
      const champions = challenges[index].champions;
      champions.push(name);
      challenges[index].champions = champions;
      localStorage.setItem("challenges", JSON.stringify(challenges));
    }
  }
}
