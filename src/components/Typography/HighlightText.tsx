import * as React from "react";

export interface IHighlightTextProps {
  children: string;
}

export default function HighlightText({ children }: IHighlightTextProps) {
  return (
    <span className="text-zinc-950" aria-label={children}>
      {children}
    </span>
  );
}
