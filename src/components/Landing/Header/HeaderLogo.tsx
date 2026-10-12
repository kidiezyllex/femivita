import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderLogoProps {
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ onClick, className, imageClassName }) => (
  <Link
    href="/"
    onClick={onClick}
    aria-label="Femivita"
    className={cn("flex h-12 w-40 shrink-0 cursor-pointer items-center justify-center", className)}
  >
    <Image
      src="/logos/femivita-logo.svg"
      alt="Femivita"
      width={137}
      height={30}
      className={cn("h-auto w-[136px]", imageClassName)}
      quality={100}
      draggable={false}
      priority
    />
  </Link>
);
