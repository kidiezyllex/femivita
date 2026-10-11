function Skeleton({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-skeleton-pulse rounded-[4px] ${className}`}
      {...props}
    />
  );
}

export { Skeleton };

