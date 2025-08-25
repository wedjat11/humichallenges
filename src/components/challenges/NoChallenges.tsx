import Image from "next/image";
import Amumu from "@/assets/amumu-sad.gif";

export default function NoChallenges() {
  return (
    <section className="p-4 flex flex-col items-center justify-center">
      <p>You have no challenges yet</p>
      <Image src={Amumu} alt="No challenges" width={250} height={250} />
    </section>
  );
}
