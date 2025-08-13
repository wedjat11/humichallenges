import { useState } from "react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "framer-motion";

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
            className="bg-white rounded-md p-6 w-full max-w-lg"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Input
              placeholder="Challenge name"
              value={nameChallenge}
              onChange={(e) => setNameChallenge(e.target.value)}
            />
            <Input
              placeholder="Challenge description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2"
            />

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={close} className="px-4 py-2 bg-gray-300 rounded">
                Cancelar
              </button>
              <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Crear
              </button>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
