interface ChampionCardProps {
  splashart: string;
  name: string;
  onClick?: () => void;
  className?: string; // 👈 agregado
}

export default function ChampionCard({
  splashart,
  name,
  onClick,
  className = "",
}: ChampionCardProps) {
  return (
    <figure
      onClick={onClick}
      className={`w-[200px] h-[300px] hover:sepia-0 p-2 flex flex-col gap-2 items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ${className}`}
    >
      <img
        src={splashart}
        alt={name}
        className="h-full object-cover rounded-md"
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
