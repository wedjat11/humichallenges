import { useState } from "react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateChallengeModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  const [nameChallenge, setNameChallenge] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

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

    // Get the index of the newly created challenge
    const newChallengeIndex = challenges.length - 1;

    setNameChallenge("");
    setDescription("");
    close();

    // Redirect to the new challenge page
    router.push(`/challenges/${newChallengeIndex}`);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          className="h-screen w-screen bg-black/70 backdrop-blur-sm flex items-center justify-center fixed top-0 left-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="bg-gradient-to-br from-purple-900/40 via-black/60 to-blue-900/40 backdrop-blur-xl relative rounded-2xl p-8 w-full max-w-lg border border-purple-500/30 shadow-2xl shadow-purple-500/20"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
              Create New Challenge
            </h2>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Challenge Name
                </label>
                <Input
                  placeholder="Enter challenge name..."
                  value={nameChallenge}
                  onChange={(e) => setNameChallenge(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500/50 focus:ring-purple-500/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <Input
                  placeholder="Enter challenge description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500/50 focus:ring-purple-500/50"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={close}
                className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-200 border border-white/20"
              >
                Cancel
              </button>
              <button
                onClick={handleClick}
                disabled={!nameChallenge.trim() || !description.trim()}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-200 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-purple-600 disabled:hover:to-blue-600"
              >
                Create Challenge
              </button>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
