import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PageHeroProps {
  title: string;
  /** Extra classes for the heading, e.g. a max width when the title is long. */
  titleClassName?: string;
}

/** Page title banner shared by the inner pages (Figma "Hero", 1440 x 400). The header overlays its top edge. */
export const PageHero: React.FC<PageHeroProps> = ({ title, titleClassName }) => (
  <section className="relative h-[280px] w-full overflow-hidden md:h-[340px] lg:h-[400px]">
    <Image
      src="/images/page-hero.webp"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      draggable={false}
      className="object-cover object-[70%_center] lg:object-center"
    />

    <div className="relative flex h-full items-end px-4 pb-8 md:px-8 lg:px-12 lg:pb-10">
      <h1
        className={cn(
          "font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]",
          titleClassName,
        )}
      >
        {title}
      </h1>
    </div>
  </section>
);

export default PageHero;
