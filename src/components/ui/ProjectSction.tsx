import * as React from "react";
import Paragraph from "../Typography/Paragraph";
import ProjectCard from "./ProjectCard";

export interface IProjectSectionProps {}

export default function ProjectSection(props: IProjectSectionProps) {
  return (
    <section className="my-9 lg:my-12 ">
      <h1 className="text-zinc-950 font-medium lg:text-5xl text-4xl w-3/4 mb-9 tracking-wider lg:mb-12">
        What I've been working on
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9 lg:gap-y-12 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
