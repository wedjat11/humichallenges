import { Button } from "../ui/button";
import NoChallenges from "./NoChallenges";

interface GuideUserProps {
  onClick?: () => void;
  haveChallenges: boolean;
}

export default function GuideUser({ onClick, haveChallenges }: GuideUserProps) {
  return (
    <section className="w-full text-lg flex flex-col gap-6 items-center justify-center py-8">
      {!haveChallenges ? (
        <NoChallenges />
      ) : (
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
          Ready for a new adventure?
        </h1>
      )}
      <Button
        className="cursor-pointer text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-xl shadow-purple-900/30 transition-all duration-300 hover:scale-105"
        onClick={onClick}
      >
        {haveChallenges ? "Create New Challenge" : "Start Your First Challenge"}
      </Button>
    </section>
  );
}
