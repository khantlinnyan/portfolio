import * as React from "react";
import SectionLayout from "../Layout/SectionLayout";
import Header from "../Typography/Header";
import RiAwardFill from "../Icons/RiAwardFill";
export interface IAward {
  name: string;
  time: string;
  prize?: string;
  whatIGot1: string;
  whatIGot2: string;
  whatIGot3: string;
}

const Awards: IAward[] = [
  {
    name: "Startup Weekend Yangon",
    time: "Dec 2023",
    prize: "Winner",
    whatIGot1: "Expanded professional network",
    whatIGot2: "Gained business knowledge",
    whatIGot3: "Enhanced communication skills",
  },
  {
    name: "LaraCamp Take Home Project",
    time: "Oct 2023",
    prize: "Winner",
    whatIGot1: "Gained Laravel knowledge",
    whatIGot2: "Gained backend knowledge",
    whatIGot3: "Enhanced teamwork skills",
  },
  {
    name: "Hub & Hack 2023",
    time: "Mar 2023",
    whatIGot1: "Learned about git and github",
    whatIGot2: "Learned TailwindCSS",
    whatIGot3: "Enhanced knowledge about Reactjs and Supabase",
  },
  {
    name: "CTLA Game-Jam Hackthon",
    time: "Feb 2022",
    prize: "Best Game Story ",
    whatIGot1: "Learned about Pygame",
    whatIGot2: "Gained game development knowledge",
    whatIGot3: "Increased soft skills",
  },
];

export default function AwardsSection() {
  return (
    <SectionLayout>
      <Header>Awards & Recognition</Header>
      <div className="flex flex-col gap-10 items-center justify-center">
        {Awards.map((award) => (
          <div
            key={award.name}
            className=" flex justify-between w-full items-start"
          >
            <div className="flex flex-col justify-between items-start">
              <div className="flex col-span-1 flex-col gap-1 lg:gap-2 w-fit">
                <p className="text-lg lg:text-3xl md:text-xl tracking-wider font-medium text-zinc-800">
                  {award.name}
                </p>
                <p className="text-sm md:text-base lg:text-lg  text-zinc-500">
                  {award.time}
                </p>
              </div>
              <div className="flex flex-col mt-2 gap-1 lg:gap-2  w-full">
                <ul className="list-disc text-zinc-800 tracking-wider ml-5 flex flex-col gap-1 pl-1 ">
                  <li>{award.whatIGot1}</li>
                  <li>{award.whatIGot2}</li>
                  <li>{award.whatIGot3}</li>
                </ul>
              </div>
            </div>
            {award.prize && (
              <div className="py-2 px-4 w-fit bg-zinc-400/10  rounded-full items-center flex gap-2">
                <RiAwardFill className="text-zinc-800 w-5" />
                <p className="text-sm text-zinc-800 font-medium lg:text-sm text-nowrap">
                  {award.prize}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
