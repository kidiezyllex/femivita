import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { HEADER_CTA } from "./types";

interface HeaderBuyButtonProps {
  isOpen: boolean;
  /** The header sits on its white card (scrolled, or a menu is open) rather than on the hero. */
  onCard: boolean;
  controls?: string;
  onClick: () => void;
  className?: string;
}

/** Desktop "Mua chính hãng": opens the buy panel. Open state is the pink pill with the arrow turned up-right (Figma). */
export const HeaderBuyButton: React.FC<HeaderBuyButtonProps> = ({ isOpen, onCard, controls, onClick, className }) => {
  const look = isOpen
    ? { button: "bg-brand-text text-white", circle: "bg-white", arrow: "/logos/arrow-right-pink.svg", rotate: true }
    : onCard
      ? { button: "bg-brand-soft text-black hover:bg-brand-lavender/40", circle: "bg-brand", arrow: "/logos/arrow-right-white.svg", rotate: false }
      : { button: "bg-brand-light text-white hover:bg-brand", circle: "bg-white", arrow: "/logos/arrow-right.svg", rotate: false };

  return (
    <button
      type="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full py-2 pl-4 pr-2 font-inter text-sm font-medium leading-normal transition-colors",
        look.button,
        className,
      )}
    >
      {HEADER_CTA.label}
      <span className={cn("flex size-[26px] shrink-0 items-center justify-center rounded-full transition-colors", look.circle)}>
        <Image
          src={look.arrow}
          alt=""
          width={18}
          height={18}
          quality={100}
          draggable={false}
          className={cn("transition-transform duration-300", look.rotate && "-rotate-45")}
        />
      </span>
    </button>
  );
};
