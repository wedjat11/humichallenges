import { useRouter } from "next/navigation";
import ChallengeCard from "./ChallengeCard";

type Challenge = {
  name: string;
  description: string;
  champions: string[];
};
interface ActiveChallengeProps {
  challenges: Challenge[];
  onDelete: (index: number) => void;
}
export default function ActiveChallenge({
  challenges,
  onDelete,
}: ActiveChallengeProps) {
  const router = useRouter();

  const goToChallenge = (index: number) => {
    router.push(`/challenges/${index}`);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
      {challenges.length > 0
        ? challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              id={index}
              title={challenge.name}
              desc={challenge.description}
              onClick={() => goToChallenge(index)}
              onDelete={() => onDelete(index)}
            />
          ))
        : null}
      <div>agrega mas</div>
    </section>
  );
}
