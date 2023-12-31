import * as React from "react";

export interface ISectionLayoutProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export default function SectionLayout({ children, ref }: ISectionLayoutProps) {
  return (
    <section ref={ref} className="max-w-3xl mx-auto mt-16">
      {children}
    </section>
  );
}
