import * as React from "react";
import { cn } from "@/lib/utils";

export interface IParagraphProps {
  className?: string;
  children: string | React.ReactNode;
}

export default function Paragraph({ className, children }: IParagraphProps) {
  return (
    <p
      className={cn(
        "lg:text-3xl text-xl  tracking-wider leading-8 font-medium text-zinc-500",
        className
      )}
    >
      {children}
    </p>
  );
}
