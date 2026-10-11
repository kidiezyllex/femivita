import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex items-center justify-center border px-2 py-1 h-fit rounded-[4px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer text-sm h-6 leading-[1px] w-fit text-nowrap px-2 py-0 text-xs gap-1",
  {
    variants: {
      variant: {
        default: "border-primaryV1/20 text-primaryV1 text-nowrap",
        secondary:
          "border-primaryV1/20 bg-secondary text-secondary-foreground hover:bg-secondary/80 text-primaryV1 text-nowrap",
        destructive:
          "bg-red-500/10 text-red-400 border-red-500/20",
        orange:
          "bg-orange-500/10 text-orange-400 border-orange-500/20",
        red: "bg-red-500/10 text-red-400 border-red-500/20",
        amber:
          "bg-amber-500/10 text-amber-400 border-amber-500/20",
        yellow:
          "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        lime: "bg-lime-500/10 text-lime-400 border-lime-500/20",
        green:
          "bg-green-500/10 text-green-400 border-green-500/20",
        emerald:
          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
        cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
        blue: "bg-blue-500/10 text-secondary border-blue-500/20",
        indigo:
          "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        violet:
          "bg-violet-500/10 text-violet-400 border-violet-500/20",
        purple:
          "bg-purple-500/10 text-purple-400 border-purple-500/20",
        fuchsia:
          "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
        pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
        rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        slate:
          "bg-slate-500/10 text-slate-400 border-slate-500/20",
        gray: "bg-gray-500/10 text-gray-400 border-gray-500/20",
        zinc: "bg-zinc-500/10 text-neutral-400 border-zinc-500/20",
        neutral:
          "bg-neutral-500/10 text-primaryV1 border-neutral-500/20",
        stone:
          "bg-stone-500/10 text-stone-400 border-stone-500/20",
        ghost:
          "hover:text-primaryV1 border-primaryV1/20 bg-primaryV1/10 text-primaryV1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

