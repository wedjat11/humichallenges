import Background from "@/assets/bg.png";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../public/font/youregone.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/youregoneit.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--my-font",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
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
        className={`${poppins.variable} ${myFont.variable} antialiased`}
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
