"use client";

import Logo from "@/assets/logo.png";
import ActiveChallenge from "@/components/challenges/ActiveChallenge";
import MainComponent from "@/components/challenges/MainComponent";
import CreateChallengeModal from "@/components/modals/CreateChallengeModal";
import useRandomSplash from "@/utils/useRandomSplash";
import { motion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <motion.section
      key="splash"
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${splash})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <section className="flex p-4 flex-col w-full relative bg-black/90 gap-6 mx-auto h-screen items-center justify-center">
        <ActiveChallenge
          challenges={activeChallenges}
          onDelete={handleDeleteChallenge}
        />

        <Image
          src={Logo}
          alt="Logo"
          width={45}
          height={45}
          className="absolute top-4 left-4"
        />
        <MainComponent
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
