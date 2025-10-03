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
    <section className="w-full max-w-2xl mx-auto space-y-4">
      {challenges.length > 0 ? (
        challenges.map((challenge, index) => (
          <div
            key={index}
            className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex flex-col sm:flex-row gap-4 sm:items-center justify-between hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {challenge.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {challenge.description}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => goToChallenge(index)}
                className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/20"
              >
                View
              </Button>
              <Button
                variant="destructive"
                className="bg-red-500/20 text-red-300 hover:bg-red-500/40 border border-red-500/30"
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10 border-dashed">
          <p className="text-gray-400 italic">No active challenges found.</p>
        </div>
      )}
    </section>
  );
}
