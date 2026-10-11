import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDragScroll } from "@/hooks/useDragScroll";
import { cn } from "@/lib/utils";

const TableContext = React.createContext<{ showHoverTooltip: boolean }>({
  showHoverTooltip: true,
});

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { showHoverTooltip?: boolean }
>(({ className, showHoverTooltip = true, ...props }, ref) => {
  const dragScrollRef = useDragScroll();

  return (
    <TableContext.Provider value={{ showHoverTooltip }}>
      <TooltipProvider>
        <div
          ref={dragScrollRef}
          className="w-full overflow-auto border border-primaryV1/20 rounded-2xl"
        >
          <table
            ref={ref}
            className={cn(
              "w-full caption-bottom text-sm bg-eerieBlackV1 !border-primaryV1/20",
              className
            )}
            {...props}
          />
        </div>
      </TooltipProvider>
    </TableContext.Provider>
  );
});
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("[&_tr]:border-b [&_tr]:border-primaryV1/20 [&_tr]:bg-eerieBlackV1", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:last-child]:border-0 [&_tr:nth-child(odd)]:bg-eerieBlackV1/80 [&_tr:nth-child(even)]:bg-eerieBlackV1",
      className
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "font-semibold text-secondary-foreground bg-eerieBlackV1",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  showHoverTooltip?: boolean;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, showHoverTooltip: localShowHoverTooltip, ...props }, ref) => {
    const { showHoverTooltip: contextShowHoverTooltip } =
      React.useContext(TableContext);

    const showHoverTooltip = localShowHoverTooltip ?? contextShowHoverTooltip;

    const row = (
      <tr
        ref={ref}
        className={cn(
          "border-b border-b-primaryV1/20 transition-colors data-[state=selected]:bg-muted",
          className
        )}
        {...props}
      />
    );

    if (!showHoverTooltip) return row;

    return (
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>{row}</TooltipTrigger>
        <TooltipContent>Click vào dòng để xem chi tiết</TooltipContent>
      </Tooltip>
    );
  }
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12  p-3 md:p-4 font-semibold text-primaryV1 text-nowrap text-center align-middle border-r border-r-primaryV1/20 last:border-r-0 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      " p-3 md:p-4 align-middle border-r border-r-primaryV1/20 last:border-r-0 [&:has([role=checkbox])]:pr-0 text-primaryV1",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-gray-500", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table, TableBody, TableCaption, TableCell, TableFooter,
  TableHead, TableHeader, TableRow
};

