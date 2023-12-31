import * as React from "react";
import Paragraph from "../Typography/Paragraph";
import TeeHtwinLogo from "@/../public/projectImage/TeeHtwinLogo.jpg";
import Image from "next/image";
import Header from "../Typography/Header";
import VirDigLogo from "@/../public/projectImage/VirDigLogo.jpg";
import SectionLayout from "../Layout/SectionLayout";

export interface IExperienceProps {}

export default function ExperienceSection(props: IExperienceProps) {
  const Experience = [
    {
      orgName: "VirDig",
      position: "Frontend Developer",
      src: VirDigLogo,
      alt: "VirDig Logo",
      time: "Dec 2023 - Present",
    },
    {
      orgName: "TeeHtwin",
      position: "Frontend Developer",
      src: TeeHtwinLogo,
      alt: "TeeHtwin Logo",
      time: "Aug 2023 - Present",
    },
  ];
  return (
    <SectionLayout>
      <Header>Experience</Header>
      <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center">
        {Experience.map((exp) => (
          <div key={exp.title} className=" grid grid-cols-4 items-center">
            <div className="flex col-span-3 items-start">
              <Image
                className="h-auto w-2/12 aspect-square rounded-xl 
                bg-white p-1
                object-contain lg:rounded-3xl mr-4 lg:mr-10"
                src={exp.src}
                alt={exp.src}
              />

              <div className="flex col-span-1 flex-col gap-1 lg:gap-2 w-fit">
                <p className="text-lg lg:text-2xl md:text-xl font-medium tracking-wider text-zinc-800">
                  {exp.position}
                  <span className="block text-sm md:text-base lg:text-lg  text-zinc-800">
                    {exp.orgName}
                  </span>
                </p>
                <p className="text-sm md:text-base lg:text-lg  text-zinc-500">
                  {exp.time}
                </p>
              </div>
            </div>
            <div className="px-2 py-1 w-fit mx-auto flex justify-around items-center gap-[6px] lg:gap-2 bg-zinc-800 rounded-full">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              <p className="text-sm text-white text-nowrap font-medium lg:text-sm ">
                Part time
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
