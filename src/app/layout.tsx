import type { Metadata } from "next";
import Background from "@/assets/bg.png";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lol challenge tracker",
  description: "Track your LoL challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
