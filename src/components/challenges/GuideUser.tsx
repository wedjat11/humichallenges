import { Button } from "../ui/button";

interface GuideUserProps {
  onClick?: () => void;
  haveChallenges: boolean;
}

export default function GuideUser({ onClick, haveChallenges }: GuideUserProps) {
  return (
    <section className="w-full text-lg flex flex-col gap-4 items-center justify-center">
      {haveChallenges ? (
        <h1>Start your journey creating a new challenge</h1>
      ) : (
        <h1>Add more challenges</h1>
      )}
      <Button className="cursor-pointer" onClick={onClick}>
        {haveChallenges ? "Create!" : "Add! "}
      </Button>
    </section>
  );
}
