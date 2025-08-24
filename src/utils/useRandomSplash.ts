import { useState, useEffect } from "react";

interface ChampionData {
  id: string;
  name: string;
}

export default function useRandomSplash() {
  const [splashUrl, setSplashUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const versionRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions: string[] = await versionRes.json();
        const latestVersion = versions[0];

        const champsRes = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        const json = await champsRes.json();
        const champions: ChampionData[] = Object.values(json.data);

        // Escoger campeón random
        const randomChampion =
          champions[Math.floor(Math.random() * champions.length)];

        // Escoger un skin random (hasta 15, por seguridad)
        const randomSkin = Math.floor(Math.random() * 15);

        // URL del splash
        const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomChampion.id}_${randomSkin}.jpg`;

        // Probamos que la imagen exista
        const res = await fetch(url);
        if (res.ok) {
          setSplashUrl(url);
        } else {
          // fallback a skin base (0)
          setSplashUrl(
            `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomChampion.id}_0.jpg`
          );
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return [splashUrl, loading];
}
