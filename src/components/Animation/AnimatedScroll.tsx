"use client";
import * as React from "react";
import animatedScroll from "@/../public/animation/animatedScroll.json";
import Lottie from "lottie-react";

export default function AnimatedScroll() {
  return (
    <Lottie
      animationData={animatedScroll}
      className="w-[74px] lg:w-20 "
      loop={true}
    />
  );
}
