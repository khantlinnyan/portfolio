"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollContext } from "../Context/ScrollContextProvider";
import { createRef } from "react";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

interface ParagraphProps {
  paragraph: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mt-2 mr-2 lg:mr-3 lg:mt-3">
      <span className="absolute opacity-20 duration-75">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const { nextSectionRef } = useScrollContext();
  const targetRef = nextSectionRef ?? createRef<HTMLElement>();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [0, 0.28],
  });

  const words: string[] = paragraph.split(" ");

  return (
    <p className="flex lg:text-3xl py-5 mx-auto text-xl max-w-3xl text-zinc-800 flex-wrap">
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
};

export default Paragraph;
