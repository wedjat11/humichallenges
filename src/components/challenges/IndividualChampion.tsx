import Image from "next/image";
import CloseIcon from "@/assets/close-red.png";

interface IndividualChampionProps {
  name: string;
  onDelete: () => void;
}
export default function IndividualChampion({
  name,
  onDelete,
}: IndividualChampionProps) {
  return (
    <div className="flex justify-between border rounded border-white/40  text-white/40 w-[133px] px-2">
      <figure>a</figure>
      <p>{name}</p>
      <button
        onClick={onDelete}
        className="hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Image src={CloseIcon} alt="champion1" width={12} height={12} />
      </button>
    </div>
  );
}
