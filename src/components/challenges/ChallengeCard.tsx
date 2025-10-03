import { Button } from "../ui/button";

interface ChampionCardProps {
  title: string;
  desc: string;
  id: number;
  onClick?: () => void;
  onDelete?: () => void;
}

export default function ChallengeCard({
  title,
  desc,
  id,
  onClick,
  onDelete,
}: ChampionCardProps) {
  return (
    <section
      className="bg-[#100E0E] flex flex-col gap-2 text-white  p-5 rounded-md min-w-[200px]"
      key={id}
    >
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-white/40">{desc}</p>
      </div>

      <div className="pb-14">
        <h3 className="text-lg">Champions used:</h3>
        <p>0/151</p>
      </div>
      <div className="flex justify-between">
        <Button onClick={onClick}>Open</Button>
        <Button variant={"outline"} onClick={onDelete}>
          Delete
        </Button>
      </div>
    </section>
  );
}
