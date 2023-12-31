import * as React from "react";
import Paragraph from "../Typography/Paragraph";
import ProjectCard from "./ProjectCard";
import kalasa from "@/../public/projectImage/kalasa.png";
import Header from "../Typography/Header";
import kanote from "@/../public/projectImage/KanoteLogo.jpg";

export interface IProjectSectionProps {}

export default function ProjectSection(props: IProjectSectionProps) {
  return (
    <section className="my-9 lg:my-12 ">
      <Header>What I've been working on</Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9 lg:gap-y-12 gap-8">
        <ProjectCard
          alt="Kalasa Logo"
          imageSrc={kalasa}
          title="Kalasa Art Space"
          description="on going process"
        />
        <ProjectCard
          alt="Kanote Logo"
          imageSrc={kanote}
          title="Kanote Art Platform"
          description="on going process"
        />
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  );
}
