import Image from "next/image";
import Amumu from "@/assets/amumu-sad.gif";

export default function NoChallenges() {
  return (
    <section className="p-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-5xl font-bold text-white">No challenges found</p>
        <p className="text-4xl font-semibold text-white/40">
          Please add a challenge to start
        </p>
      </div>
      <Image src={Amumu} alt="No challenges" width={250} height={250} />
    </section>
  );
}
