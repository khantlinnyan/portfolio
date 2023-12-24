"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const text = "KHANT LIN NYAN'S PORTFOLIO";
  const characters = text.split("");
  const [show, setShow] = useState(true);

  const radius = 80;
  const fontSize = "18px";
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  const animateLoader = async () => {
    const letterAnimation = [];
    characters.forEach((_, i) => {
      letterAnimation.push([
        `.letter-${i}`,
        { opacity: 0 },
        { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
      ]);
    });
    characters.forEach((_, i) => {
      letterAnimation.push([
        `.letter-${i}`,
        { opacity: 1 },
        { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
      ]);
    });
    animate(letterAnimation, {
      ease: "linear",
      repeat: Infinity,
    });
    animate(
      scope.current,
      { rotate: 360 },
      { duration: 4, ease: "linear", repeat: Infinity }
    );
  };
  useEffect(() => {
    animateLoader();
    setTimeout(() => {
      setShow(false);
    }, 4500);
  }, []);

  return (
    show && (
      <div className="h-screen w-screen fixed bg-white flex justify-center items-center m-0 p-0 overflow-hidden z-50">
        <motion.div
          ref={scope}
          className="relative aspect-[1]"
          style={{ width: radius * 2 }}
        >
          <p aria-label={text} />
          <p aria-hidden="true">
            {characters.map((ch, i) => (
              <motion.span
                key={i}
                className={`absolute font-bold top-0 left-1/2 letter-${i}`}
                style={{
                  transformOrigin: `0 ${radius}px`,
                  transform: `rotate(${i * letterSpacing}deg)`,
                  fontSize,
                }}
              >
                {ch}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    )
  );
}
