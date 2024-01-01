"use client";
import * as React from "react";
import SkillIconsNextjsDark from "../Icons/SkillIcons/SkillIconsNextjsDark";
import SkillIconsReactDark from "../Icons/SkillIcons/SkillIconsReactDark";
import SkillIconsTailwindcssDark from "../Icons/SkillIcons/SkillIconsTailwindcssDark";
import SkillIconsHtml from "../Icons/SkillIcons/SkillIconsHtml";
import SkillIconsCss from "../Icons/SkillIcons/SkillIconsCss";
import SkillIconsJavascript from "../Icons/SkillIcons/SkillIconsJavascript";
import SkillIconsPythonDark from "../Icons/SkillIcons/SkillIconsPythonDark";
import SkillIconsTypescript from "../Icons/SkillIcons/SkillIconsTypescript";
import SkillIconsSupabaseDark from "../Icons/SkillIcons/SkillIconsSupabaseDark";
import SkillIconsGithubDark from "../Icons/SkillIcons/SkillIconsGithubDark";
import Header from "../Typography/Header";
import SectionLayout from "../Layout/SectionLayout";
import { useScrollContext } from "../Context/ScrollContextProvider";
import { useState } from "react";

export interface ISkillsSectionProps {}

const skills = [
  {
    icon: <SkillIconsReactDark />,
    name: "Reactjs",
  },
  {
    icon: <SkillIconsNextjsDark />,
    name: "Nextjs",
  },
  {
    icon: <SkillIconsTailwindcssDark />,
    name: "Tailwind",
  },
  {
    icon: <SkillIconsHtml />,
    name: "Html",
  },
  {
    icon: <SkillIconsCss />,
    name: "Css",
  },
  {
    icon: <SkillIconsJavascript />,
    name: "Javascript",
  },
  {
    icon: <SkillIconsTypescript />,
    name: "Typescript",
  },
  {
    icon: <SkillIconsPythonDark />,
    name: "Python",
  },
  {
    icon: <SkillIconsSupabaseDark />,
    name: "Supabase",
  },
  {
    icon: <SkillIconsGithubDark />,
    name: "Github",
  },
];

export default function SkillsSection(props: ISkillsSectionProps) {
  const [isHovered, setIsHovered] = useState(null);
  const { nextSectionRef } = useScrollContext();

  return (
    <SectionLayout ref={nextSectionRef}>
      <Header>Skills</Header>
      <div className=" grid-cols-4 grid gap-4 lg:gap-6 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative p-1 lg:p-6 w-full h-full"
            onMouseEnter={() => setIsHovered(skill)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {React.cloneElement(skill.icon, {
              className: "w-full hover:opacity-15 h-full",
            })}
            {isHovered === skill && (
              <div className="absolute -z-10 top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[10px] lg:text-base  text-zinc-800 font-bold uppercase">
                {skill.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
