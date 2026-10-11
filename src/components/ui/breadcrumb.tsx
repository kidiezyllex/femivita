"use client";

import { Slot } from "@radix-ui/react-slot";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiDotsHorizontal } from "@mdi/js";
import Link from "next/link";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-2 break-words text-sm text-gray-500 sm:gap-2",
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-2 text-sm", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
    href?: string;
  }
>(({ asChild, className, href, children, ...props }, ref) => {
  const linkClassName = cn(
    "transition-colors flex items-center group",
    className
  );

  const badgeContent = (
    <Badge
      variant="neutral"
    >
      {children}
    </Badge>
  );

  if (asChild) {
    return (
      <Slot
        ref={ref}
        className={linkClassName}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  if (href) {
    const { target, download, rel, onClick, ...linkProps } = props as any;
    return (
      <Link
        href={href}
        className={linkClassName}
        {...linkProps}
        onClick={(e) => {
          if (onClick) onClick(e);
        }}
        ref={ref as any}
      >
        {badgeContent}
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      className={linkClassName}
      {...props}
      onClick={(e) => {
        if (props.onClick) props.onClick(e);
      }}
    >
      {badgeContent}
    </a>
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <Badge
    variant="sky"
    className={cn(
      className
    )}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <Icon path={mdiChevronRight} size={0.6} />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <Badge
    variant="neutral"
    {...props}
  >
    <Icon path={mdiDotsHorizontal} size={0.8} />
    <span className="sr-only">More</span>
  </Badge>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbList, BreadcrumbPage,
  BreadcrumbSeparator
};
