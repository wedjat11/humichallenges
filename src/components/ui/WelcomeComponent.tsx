"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import useRandomSplash from "@/utils/useRandomSplash";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const GridLoader = dynamic(
  () => import("react-spinners").then((m) => m.GridLoader),
  { ssr: false }
);

export default function WelcomeComponent() {
  const router = useRouter();

  const [splash, loading] = useRandomSplash();

  return (
    <section className="relative w-screen h-screen bg-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="absolute inset-0 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GridLoader color="#1D3242" size={10} />
          </motion.div>
        ) : splash ? (
          <motion.div
            key="splash"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${splash})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-full h-full bg-black/60 flex items-center justify-center flex-col gap-6">
              <motion.div className="absolute top-5 left-5 z-10">
                <Image src={Logo} alt="Logo" width={100} height={100} />
              </motion.div>
              <motion.h1
                className="text-white text-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                Discover a new level of{" "}
                <span className="font-my">challenges</span>
              </motion.h1>
              <Button onClick={() => router.push("/challenges")}>Start</Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="fallback"
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
