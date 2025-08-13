"use client";
import { Button } from "./button";
import LogoComponent from "./LogoComponent";

const handleClick = () => {
  window.location.href = "/challenges";
};
export default function WelcomeComponent() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full h-screen">
      <LogoComponent />
      <div className="flex flex-col gap-4 w-1/2  text-center [&>p]:text-xl">
        <h1 className="text-xl">
          Welcome to <strong>HumiChallenges</strong>, the ultimate destination
          for League of Legends players looking to spice up their game.
        </h1>
        <p>
          Tired of the same old meta? Ready to rediscover the fun of Summoners
          Rift? Our community-driven platform offers a wide variety of unique
          challenges to push your skills and creativity to the limit.
        </p>
        <p>
          From mastering the alphabet by playing champions in ascending or
          descending order, to proving your versatility by playing every
          champion in a single role, our challenges are designed to test your
          champion pool, adaptability, and game knowledge.
        </p>
        <p>
          So, are you ready to take on the challenge? Choose your gauntlet,
          assemble your team, and prove your worth on the Rift. Let the games
          begin!
        </p>
      </div>

      <Button
        onClick={() => handleClick()}
        className=" text-lg bg-[#1D3242] cursor-pointer hover:bg-[bg-[#1D3242]/60] transition-all "
      >
        Start your journey
      </Button>
    </section>
  );
}
