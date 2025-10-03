"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { IconSignature } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PenIcon, PlaneIcon } from "lucide-react";

export function ProjectSection() {
  return (
    <div className="h-screen max-w-4xl mx-auto" id="projects">
      <h1 className="text-4xl font-bold mb-8">Mes Projets Phares</h1>
      <BentoGrid className=" md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            href={item.href}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonThree = ({ img }: { img: string }) => {
  return (
    <div className="h-48 w-full">
      <img
        src={img}
        alt=""
        className="rounded-sm w-full h-44 object-cover object-top-left"
      />
    </div>
  );
};

const items = [
  {
    title: "CINQ CINQ",
    description: (
      <span className="text-sm">
        Plateforme d&apos;apprentissage en ligne avec cours interactifs et
        vidéos.
      </span>
    ),
    header: <SkeletonThree img="./cinqcinq.png" />,
    href: "https://cinq5.vercel.app/",
    className: "md:col-span-1",
    icon: <PenIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Facade Atelier",
    description: (
      <span className="text-sm">
        Site web moderne avec React/Next.js pour un atelier d&apos;architecture.
      </span>
    ),
    header: <SkeletonThree img="./facadeatelier.png" />,
    href: "https://atelierfacade.com/",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ABLAviation",
    description: (
      <span className="text-sm">
        Site web pour une compagnie de leasing d&apos;avion.
      </span>
    ),
    header: <SkeletonThree img="./ablaviation.png" />,
    href: "https://ablaviation.com/",
    className: "md:col-span-1",
    icon: <PlaneIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ARCH-INOV",
    description: (
      <span className="text-sm">
        Site web moderne avec React/Next.js pour un atelier d&apos;architecture.
      </span>
    ),
    header: <SkeletonThree img="./archinov.png" />,
    href: "https://arch-inov.com/",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SwiftCore",
    description: (
      <span className="text-sm">
        Logiciel de gestion de projets pour équipes agiles.
      </span>
    ),
    header: <SkeletonThree img="./swiftcore.png" />,
    href: "https://swiftcore.app/",
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
