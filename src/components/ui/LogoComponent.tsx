import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function LogoComponent() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full ">
      <Image src={Logo} alt="Logo" width={200} height={200} />
    </section>
  );
}
