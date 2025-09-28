import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import LightRays from "@/components/LightRays";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed EL GUERJOUMA | Developer & Designer",
  description: "Crafting elegant digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white dark`}>
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#000"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={0.6}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
