import Preloader from "@/components/Preloader";
import HeroSection from "@/components/Ui/HeroSection";
import ProjectSection from "@/components/Ui/ProjectSction";
import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <Preloader />
      <HeroSection />
      <ProjectSection />
    </>
  );
}
