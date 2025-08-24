"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import useRandomSplash from "@/utils/useRandomSplash";

const GridLoader = dynamic(
  () => import("react-spinners").then((m) => m.GridLoader),
  { ssr: false }
);

export default function HomeSplash() {
  const [splash, loading] = useRandomSplash();

  return (
    <section className="relative w-screen h-screen bg-black">
      <AnimatePresence mode="wait">
        {loading ? (
          // Loader con animación de entrada/salida
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
          // Imagen de fondo con animación de aparición
          <motion.div
            key="splash"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${splash})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-full h-full bg-black/40 flex items-center justify-center">
              <motion.h1
                className="text-white text-4xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                Bienvenido a mi página
              </motion.h1>
            </div>
          </motion.div>
        ) : (
          // Fallback por si no hay splash
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
