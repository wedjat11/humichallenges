import { DeleteIcon } from "lucide-react";

export default function ChampionName({
  name,
  onDelete,
}: {
  name: string;
  onDelete: () => void;
}) {
  return (
    <section className="flex gap-3 items-center justify-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <DeleteIcon
        className="size-4 mt-2 cursor-pointer hover:text-red-500 transition-all duration-300 my-auto"
        onClick={onDelete}
      />
    </section>
  );
}
