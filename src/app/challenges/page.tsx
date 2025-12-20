"use client";

import ActiveChallenge from "@/components/challenges/ActiveChallenge";
import GuideUser from "@/components/challenges/GuideUser";
import CreateChallengeModal from "@/components/modals/CreateChallengeModal";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";

import useFetchChampions from "@/utils/useFetchChampions";

type Challenge = {
  name: string;
  description: string;
  champions: string[];
};

export default function Challenges() {
  const [newChallenge, setNewChallenge] = useState(false);
  const [haveChallenges, setHaveChallenges] = useState(false);
  const [activeChallenges, setActiveChallenges] = useState<Challenge[]>([]);
  const { champions } = useFetchChampions();
  const totalChampions = champions.length;

  useEffect(() => {
    const stored = localStorage.getItem("challenges");
    if (stored) {
      setHaveChallenges(true);
      try {
        const parsed: Challenge[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setActiveChallenges(parsed);
        }
      } catch (error) {
        console.error("Error parsing challenges from localStorage", error);
      }
    }
  }, []);

  const handleDeleteChallenge = (index: number) => {
    const updatedChallenges = activeChallenges.filter((_, i) => i !== index);
    setActiveChallenges(updatedChallenges);
    localStorage.setItem("challenges", JSON.stringify(updatedChallenges));
    setHaveChallenges(updatedChallenges.length > 0);
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleCreateChallenge = () => {
    setNewChallenge(!newChallenge);
  };

  return (
    <section className="flex flex-col w-full h-full bg-black/85 gap-8 mx-auto overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        <ActiveChallenge 
          challenges={activeChallenges} 
          onDelete={handleDeleteChallenge}
          totalChampions={totalChampions}
        />
        
        <div className="mt-8 border-t border-white/10 pt-8">
          <GuideUser
            onClick={handleCreateChallenge}
            haveChallenges={haveChallenges}
          />
        </div>
        
        <CreateChallengeModal
          open={newChallenge}
          close={() => setNewChallenge(false)}
        />
      </div>
    </section>
  );
}
