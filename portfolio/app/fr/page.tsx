import { SlArrowDown } from "react-icons/sl";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "./components/LogoLoop";
import { ProjectSection } from "./components/ProjectSection";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Frhome() {
  return (
    <div className="min-h-screen px-4">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl md:text-7xl py-6 font-bold tracking-tighter text-center bg-clip-text">
          Bonjour, c&apos;est <span className="text-blue-500">Mohamed 👋</span>
        </h1>
        <h1 className="text-4xl md:text-4xl py-4 tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-100">
          Je suis développeur full-stack & designer UI/UX.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center">
          Développeur full-stack et designer UI/UX, je crée des expériences
          numériques élégantes et fonctionnelles.
        </p>
        <div className="w-full mt-16 relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Technology partners"
          />
        </div>
        <div className="mt-40 animate-bounce">
          <SlArrowDown size={32} className="text-gray-400" />
        </div>
        <p className="text-gray-400">Scroll down</p>
      </section>
      <ProjectSection />
    </div>
  );
}
