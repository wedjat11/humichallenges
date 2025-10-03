import Image from "next/image";
import CloseIcon from "@/assets/close.png";

export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute top-0 right-0" onClick={onClick}>
      <Image src={CloseIcon} alt="Close" width={24} height={24} />
    </button>
  );
}
