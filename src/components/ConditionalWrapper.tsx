"use client";

import { usePathname } from "next/navigation";

export default function ConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <main className={isHomePage ? "" : "pt-16 min-h-screen"}>
      {children}
    </main>
  );
}
