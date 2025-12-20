"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/logo-cha.png";
import useRandomSplash from "@/utils/useRandomSplash";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [splash, loading] = useRandomSplash();

  return (
    <section className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        {!loading && splash && (
          <motion.div
            key="splash"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${splash})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }} // Reduced opacity for readability
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Overlay Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
          <Image
            src={Logo}
            alt="Lol Challenges Logo"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            priority
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-sm">
          Lol Challenges
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light drop-shadow-md">
          Master your League of Legends journey. Create custom challenges, build your dream team, and track your progress like a pro.
        </p>
        
        <div className="pt-8">
          <Link href="/challenges">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-400 text-sm z-10">
        &copy; {new Date().getFullYear()} Lol Challenges. All rights reserved.
      </footer>
    </section>
  );
}
