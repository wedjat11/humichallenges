"use client";

import ActiveChallenge from "@/components/challenges/ActiveChallenge";
import GuideUser from "@/components/challenges/GuideUser";
import CreateChallengeModal from "@/components/modals/CreateChallengeModal";
import TitleComponent from "@/components/TitleComponent";
import useRandomSplash from "@/utils/useRandomSplash";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Challenge = {
  name: string;
  description: string;
  champions: string[];
};

export default function Challenges() {
  const [splash, loading] = useRandomSplash();
  const [newChallenge, setNewChallenge] = useState(false);
  const [haveChallenges, setHaveChallenges] = useState(false);
  const [activeChallenges, setActiveChallenges] = useState<Challenge[]>([]);

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
    <motion.section
      key="splash"
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${splash})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <section className="flex flex-col w-full h-full bg-black/85 gap-6 mx-auto">
        <TitleComponent title="HumiChallenges" />
        <ActiveChallenge challenges={activeChallenges} />
        <GuideUser
          onClick={handleCreateChallenge}
          haveChallenges={haveChallenges}
        />
        <CreateChallengeModal
          open={newChallenge}
          close={() => setNewChallenge(false)}
        />
      </section>
    </motion.section>
  );
}
