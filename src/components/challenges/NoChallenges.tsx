import Image from "next/image";
import Amumu from "@/assets/amumu-sad.gif";

export default function NoChallenges() {
  return (
    <section className="gap-10 pb-10 flex flex-col items-center justify-center font-inter">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-5xl font-bold">No challenges found</h2>
        <h4 className="text-3xl font-semibold text-[#EFF1F4]/60">
          Please add a challenge to start
        </h4>
      </div>
      <Image src={Amumu} alt="No challenges" width={200} height={200} />
    </section>
  );
}
