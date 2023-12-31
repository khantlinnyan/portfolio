import * as React from "react";
import { cn } from "@/lib/utils";

export interface IHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: IHeaderProps) {
  return (
    <h1
      className={cn(
        "text-zinc-950 font-medium lg:text-5xl text-4xl w-3/4 mb-9 tracking-wider lg:mb-12",
        className
      )}
    >
      {children}
    </h1>
  );
}
