"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-cha.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Lol Challenges Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-bold text-lg hidden sm:block">
                Lol Challenges
              </span>
            </Link>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://u.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:underline underline-offset-4"
            >
              U.GG
            </a>
            <a
              href="https://op.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:underline underline-offset-4"
            >
              OP.GG
            </a>
            <a
              href="https://www.leagueofgraphs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:underline underline-offset-4"
            >
              League of Graphs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
