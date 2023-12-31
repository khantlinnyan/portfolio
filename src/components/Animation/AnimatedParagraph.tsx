"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({ paragraph }: any) {
  const containerRef = useRef<HTMLElement>(null!);
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const customOffset = [nextSectionRef, 0.28] as const;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: customOffset,
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={containerRef}
      className="flex lg:text-3xl py-5 mx-auto text-xl  max-w-3xl text-zinc-800 flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mt-2 mr-2 lg:mr-3 lg:mt-3">
      <span className="absolute opacity-20 duration-75">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
