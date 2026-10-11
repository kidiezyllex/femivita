import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { RippleEffect } from "./ripple-effect";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 !margin-0 flex-shrink-0 transition-all duration-200 ease-in-out cursor-pointer",
  {
    variants: {
      variant: {
        default: "border border-primary/15 bg-primary hover:bg-primary/80 text-neutral-100",
        outline:
          "border border-primaryV1 hover:bg-primaryV1 hover:text-white text-primaryV1",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        blue:
          "border border-blue-500 bg-blue-950 text-secondary font-semibold hover:bg-blue-500/10",
        red:
          "border border-red-500 bg-red-950 text-red-400 font-semibold hover:bg-red-500/10",
        green:
          "border border-green-500 bg-green-950 text-green-400 font-semibold hover:bg-green-500/10",
        orange:
          "border border-orange-500 bg-orange-950 text-orange-400 font-semibold hover:bg-orange-500/10",
        gray:
          "border border-gray-500 bg-gray-950 text-gray-300 font-semibold hover:bg-gray-500/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "bg-transparent text-primaryV1 hover:bg-primaryV1/10 hover:text-primaryV1 text-sm",
        link: "text-secondary underline-offset-4 hover:underline",
        creamBackgroundV1:
          "bg-creamBackgroundV1 text-primaryV1 border border-primaryV1/20 hover:bg-creamBackgroundV1/90 font-semibold",
        primaryV1:
          "bg-primaryV1 text-creamBackgroundV1 border !border-primaryV1 hover:bg-primaryV1/90 font-semibold",
        secondaryV1:
          "bg-secondaryV1 text-creamBackgroundV1 border border-secondaryV1 hover:bg-secondaryV1/90 font-semibold",
        eerieBlackV1:
          "bg-eerieBlackV1 text-creamBackgroundV1 border border-eerieBlackV1 hover:bg-eerieBlackV1/90 font-semibold",
        accentV1:
          "bg-accentV1 text-creamBackgroundV1 border border-accentV1 hover:bg-accentV1/90 font-semibold",
        supportV1:
          "bg-supportV1 text-creamBackgroundV1 border border-supportV1 hover:bg-supportV1/90 font-semibold",
      },
      size: {
        default: "!h-10 px-3",
        sm: "!h-8 px-3 text-sm",
        icon: "!h-10 !w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ripple?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ripple = false,
      rippleColor,
      rippleDuration,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const buttonElement = (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );

    if (ripple) {
      return (
        <RippleEffect
          rippleColor={rippleColor || "rgba(255, 255, 255, 0.4)"}
          duration={rippleDuration || 500}
          className="inline-flex"
        >
          {buttonElement}
        </RippleEffect>
      );
    }

    return buttonElement;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

