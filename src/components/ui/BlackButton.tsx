"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { cn } from "@/lib/utils";
import { mdiArrowRight } from "@mdi/js";
import Link from "next/link";
import React from "react";

interface BlackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  link?: string;
  minWidth?: string | number;
  icon?: string;
  iconClassName?: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  text = "Xem chi tiết sản phẩm",
  link,
  minWidth,
  icon = mdiArrowRight,
  iconClassName,
  className,
  style,
  ...props
}) => {
  const content = (
    <>
      {text}
      <Icon
        path={icon}
        className={cn(
          "h-5 w-5 translate-y-0.5 transition-transform group-hover:translate-x-1",
          iconClassName,
        )}
      />
    </>
  );

  const sharedClassName = cn(
    "group bg-eerieBlackV1 text-white p-5 flex items-center justify-between gap-[68px]",
    "text-lg xl:text-xl font-medium leading-none tracking-normal text-center align-middle",
    "hover:bg-eerieBlackV1/90 transition-colors",
    className,
  );

  const sharedStyle = { ...style, minWidth };

  if (link) {
    return (
      <Link href={link} className={sharedClassName} style={sharedStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} style={sharedStyle} {...props}>
      {content}
    </button>
  );
};

export default BlackButton;
