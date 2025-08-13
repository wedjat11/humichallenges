type Challenge = {
  name: string;
  description: string;
  champions: string[];
};

export default function deleteChampion(
  id: string,
  championName: string
): boolean {
  const stored = localStorage.getItem("challenges");
  if (!stored) return false;

  const challenges: Challenge[] = JSON.parse(stored);
  const index = parseInt(id, 10);

  if (isNaN(index) || !challenges[index]) return false;

  const champions = challenges[index].champions;
  const indexOfChampion = champions.indexOf(championName);

  if (indexOfChampion === -1) return false;

  champions.splice(indexOfChampion, 1);
  challenges[index].champions = champions;

  localStorage.setItem("challenges", JSON.stringify(challenges));

  return true;
}
