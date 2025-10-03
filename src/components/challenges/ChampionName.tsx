import { DeleteIcon } from "lucide-react";

export default function ChampionName({
  name,
  onDelete,
}: {
  name: string;
  onDelete: () => void;
}) {
  return (
    <li className="group flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-2 hover:bg-purple-800/60 transition-all duration-300 backdrop-blur-sm">
      <span className="text-white font-medium text-sm sm:text-base">{name}</span>
      <button
        onClick={onDelete}
        className="text-purple-300 hover:text-red-400 transition-colors p-1 rounded-full hover:bg-white/10"
        aria-label={`Remove ${name}`}
      >
        <DeleteIcon className="w-4 h-4" />
      </button>
    </li>
  );
}
