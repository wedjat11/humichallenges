import { Button } from "../ui/button";
import NoChallenges from "./NoChallenges";

interface GuideUserProps {
  onClick?: () => void;
  haveChallenges: boolean;
}

export default function MainComponent({
  onClick,
  haveChallenges,
}: GuideUserProps) {
  return (
    <section className="w-full text-lg flex flex-col gap-4 items-center justify-center relative">
      {!haveChallenges ? <NoChallenges /> : <h1>Add more challenges</h1>}
      <Button className="cursor-pointer" onClick={onClick}>
        {haveChallenges ? "Create!" : "Add! "}
      </Button>
    </section>
  );
}
