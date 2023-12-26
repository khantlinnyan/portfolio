import Preloader from "@/components/Preloader";
import HeroSection from "@/components/ui/HeroSection";
import ProjectSection from "@/components/ui/ProjectSction";
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
{
  /* <main className="h-[93svh]  grid grid-rows-3 w-full container mx-auto">
        <div></div>
        <div className="w-1/2 mx-auto flex justify-center">
          <Paragraph>
            I'm a <HighlightText>frontend developer</HighlightText> with a
            passion for creating beautiful and functional user interfaces. I
            love
            <HighlightText> minimalism and creative design</HighlightText>, and
            I'm always excited to take on
            <HighlightText> new challenges.</HighlightText>
          </Paragraph>
        </div>
        <div className="flex-col justify-end flex">
          <p className="font-medium lg:text-3xl text-md text-start text-zinc-700 mb-2">
            - A Journey Through the Mind of
          </p>
          <h1 className="font-medium text-4xl lg:text-9xl text-zinc-900 w-full">
            Khant Lin Nyan &copy;
          </h1>
        </div>
      </main> */
}
