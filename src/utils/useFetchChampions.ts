import { useState, useEffect } from "react";

interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ChampionData {
  tags: string[];
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImage;
}

export default function useFetchChampions() {
  const [champions, setChampions] = useState<ChampionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const versionRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions: string[] = await versionRes.json();
        const latestVersion = versions[0];
        setVersion(latestVersion);

        const champsRes = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        if (!champsRes.ok) throw new Error("Error al obtener campeones");

        const json = await champsRes.json();
        const champsArray: ChampionData[] = Object.values(json.data);
        setChampions(champsArray);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { champions, loading, error, version };
}
