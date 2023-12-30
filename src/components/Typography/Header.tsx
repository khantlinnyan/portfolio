import * as React from "react";

export interface IHeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <h1 className="text-zinc-950 font-medium lg:text-5xl text-4xl w-3/4 mb-9 tracking-wider lg:mb-12">
      {children}
    </h1>
  );
}
