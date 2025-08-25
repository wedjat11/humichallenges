import { useState } from "react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import CloseIcon from "@/assets/close.png";
import Image from "next/image";

export default function CreateChallengeModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  const [nameChallenge, setNameChallenge] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    const storedChallenges = localStorage.getItem("challenges");
    let challenges = storedChallenges ? JSON.parse(storedChallenges) : [];

    if (!Array.isArray(challenges)) {
      challenges = [];
    }

    challenges.push({
      name: nameChallenge,
      description: description,
      champions: [],
    });

    localStorage.setItem("challenges", JSON.stringify(challenges));

    setNameChallenge("");
    setDescription("");

    location.reload();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          className="h-screen w-screen bg-black/50 flex items-center justify-center fixed top-0 left-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black rounded-md relative p-6 w-full max-w-[420px] min-h-[350px] flex flex-col gap-7 border items-center justify-center border-white"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-3 right-3">
              <button className="cursor-pointer" onClick={close}>
                <Image src={CloseIcon} alt="Close" width={24} height={24} />
              </button>
            </div>
            <h1 className="text-4xl font-bold text-white">
              Add a new challenge
            </h1>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label className="text-white text-sm">Name</label>
                <Input
                  className="bg-white/40 text-sm placeholder-white"
                  placeholder="Challenge name"
                  value={nameChallenge}
                  onChange={(e) => setNameChallenge(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white text-sm">Description</label>
                <Input
                  placeholder="Challenge description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 bg-white/40"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              {/* <Button onClick={close} className="px-4 py-2 bg-gray-300 rounded">
                Cancelar
              </Button> */}
              <Button
                onClick={handleClick}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
