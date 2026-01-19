"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string; // For the wrapper positioning
  sideOffset?: number;
}

export function Tooltip({ children, text, className, sideOffset = 4 }: TooltipProps) {
  return (
    <div className={cn("relative flex items-center justify-center group", className)}>
      {children}
      <div 
        className={cn(
          "absolute top-full mt-2 px-2 py-1 z-50",
          "hidden group-hover:flex items-center justify-center",
          "bg-popover text-popover-foreground text-[10px] font-medium rounded-md shadow-md border ring-1 ring-black/5",
          "whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 origin-top",
          "select-none pointer-events-none"
        )}
        style={{ marginTop: sideOffset }}
      >
        {text}
      </div>
    </div>
  );
}
