import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type Challenge = {
  name: string;
  description: string;
  champions: string[];
};

export default function ActiveChallenge({
  challenges,
}: {
  challenges: Challenge[];
}) {
  const router = useRouter();

  const goToChallenge = (index: number) => {
    router.push(`/challenges/${index}`);
  };

  return (
    <section>
      {challenges.length > 0 ? (
        challenges.map((challenge, index) => (
          <div key={index} className="p-2 border-b flex gap-6">
            <h3 className="font-bold">{challenge.name}</h3>
            <p>{challenge.description}</p>
            <Button onClick={() => goToChallenge(index)}>Add champions</Button>
            <Button>Delete</Button>
          </div>
        ))
      ) : (
        <p>No hay challenges activos</p>
      )}
    </section>
  );
}
