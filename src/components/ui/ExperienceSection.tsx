import * as React from "react";
import Paragraph from "../Typography/Paragraph";
import TeeHtwinLogo from "@/../public/projectImage/TeeHtwinLogo.jpg";
import Image from "next/image";
import Header from "../Typography/Header";
import VirDigLogo from "@/../public/projectImage/VirDigLogo.jpg";

export interface IExperienceProps {}

export default function ExperienceSection(props: IExperienceProps) {
  const Experience = [
    {
      title: "VirDig - Frontend Developer",
      src: VirDigLogo,
      alt: "VirDig Logo",
      time: "Dec 2023 - Present",
    },
    {
      title: "TeeHtwin - Frontend Developer",
      src: TeeHtwinLogo,
      alt: "TeeHtwin Logo",
      time: "Aug 2023 - Present",
    },
  ];
  return (
    <section className="max-w-3xl mx-auto mt-14">
      <Header>Experience</Header>
      <div className="flex flex-col gap-2 lg:gap-8 items-center justify-center">
        {Experience.map((exp) => (
          <div key={exp.title} className="  flex justify-between items-center">
            <Image
              className="h-auto w-2/12 aspect-square rounded-3xl mr-4 lg:mr-10"
              src={exp.src}
              alt={exp.src}
            />

            <div className="flex flex-col gap-1 lg:gap-2 w-full">
              <p className="text-base lg:text-3xl md:text-xl font-medium text-zinc-800">
                {exp.title}
              </p>
              <p className="text-sm md:text-base lg:text-lg  text-zinc-500">
                {exp.time}
              </p>
            </div>
            <p>Partime</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </section>
  );
}
