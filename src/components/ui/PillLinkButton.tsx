import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PillLinkButtonVariant = "solid" | "soft" | "brand";

interface PillLinkButtonProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  /** "solid": light purple pill with a white arrow circle. "soft": light lavender pill with a purple arrow circle. "brand": deep purple pill with a white arrow circle. */
  variant?: PillLinkButtonVariant;
}

const VARIANT_STYLES: Record<PillLinkButtonVariant, { button: string; circle: string; arrow: string }> = {
  solid: {
    button: "bg-brand-light text-white hover:bg-brand",
    circle: "bg-white",
    arrow: "/logos/arrow-right.svg",
  },
  soft: {
    button: "bg-brand-soft text-black hover:bg-brand-lavender/40",
    circle: "bg-brand",
    arrow: "/logos/arrow-right-white.svg",
  },
  brand: {
    button: "bg-brand text-white hover:bg-brand-light",
    circle: "bg-white",
    arrow: "/logos/arrow-right.svg",
  },
};

export const PillLinkButton: React.FC<PillLinkButtonProps> = ({
  href,
  label,
  onClick,
  className,
  variant = "solid",
}) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full py-2 pl-4 pr-2 font-inter text-sm font-medium leading-normal transition-colors",
        styles.button,
        className,
      )}
    >
      {label}
      <span
        className={cn(
          "flex size-[26px] shrink-0 items-center justify-center rounded-full transition-colors",
          styles.circle,
        )}
      >
        <Image src={styles.arrow} alt="" width={18} height={18} quality={100} draggable={false} />
      </span>
    </Link>
  );
};
