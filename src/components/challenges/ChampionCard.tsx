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
      className={`group relative w-full aspect-[3/4] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <img
        src={splashart}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
      <figcaption className="absolute bottom-0 left-0 w-full p-3 text-center">
        <span className="text-white font-bold text-lg tracking-wide drop-shadow-md group-hover:text-purple-300 transition-colors duration-300">
          {name}
        </span>
      </figcaption>
    </figure>
  );
}
