import * as React from "react";
import Paragraph from "../Typography/Paragraph";
import ProjectCard from "./ProjectCard";
import kalasa from "@/../public/projectImage/kalasa.png";
import Header from "../Typography/Header";

export interface IProjectSectionProps {}

export default function ProjectSection(props: IProjectSectionProps) {
  return (
    <section className="my-9 lg:my-12 ">
      <Header>What I've been working on</Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9 lg:gap-y-12 gap-8">
        <ProjectCard
          href="/kalasa"
          imageSrc={kalasa}
          title="Kalasa Portfolio"
          description="This is Kalasa Portfolio, with TeeHtwin team"
        />
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  );
}
