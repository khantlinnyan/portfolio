import AnimatedParagraph from "@/components/Animation/AnimatedParagraph";
import ImageGallery from "@/components/Ui/ImageGallery";
import SkillsSection from "@/components/Ui/SkillsSection";
import * as React from "react";
import ExperienceSection from "@/components/Ui/ExperienceSection";
import AwardsSection from "@/components/Ui/AwardsSection";
import AnimatedScroll from "@/components/Animation/AnimatedScroll";
import PortalGallery from "@/components/Ui/PortalGallery";
import Link from "next/link";

export interface IpageProps {}

export const metadata: Metadata = {
  title: "About",
  description: "More Detail about Khant Lin Nyan",
};

export default function page(props: IpageProps) {
  return (
    <>
      <div className="overflow-hidden gap-4 h-screen grid grid-cols-1 lg:grid-cols-7">
        <ImageGallery />
        <div className="col-span-1 flex flex-col justify-between h-5/6  lg:col-span-4 lg:my-auto">
          <p className="font-medium text-4xl lg:text-start md:text-center leading-tight lg:leading-snug md:text-6xl lg:text-7xl  lg:my-auto gap-3 my-auto text-zinc-800 w-full">
            Hey 👋,{" "}
            <span className="block lg:-mt-4">I&apos;m Khant Lin Nyan</span>
            <Link
              href={"/id-card"}
              className="px-6 py-3 hidden lg:inline text-lg bg-zinc-800 rounded-lg  text-red-500/90 font-medium"
            >
              Visual Identity
            </Link>
          </p>
          <div className="flex gap-8 pb-3 items-center justify-between">
            <AnimatedScroll />
            <Link
              href={"/id-card"}
              className="px-6 w-full text-center py-3 h-fit inline-block lg:hidden text-base  bg-zinc-800 rounded-lg  text-red-500/90 font-medium"
            >
              Visual Identity
            </Link>
          </div>
        </div>
      </div>
      <AnimatedParagraph
        paragraph="As a 16 years old frontend developer, I love exploring new things and enjoy coding. I have been learning Python and web development
    for the past 2years. I have good communication and soft skills, which
    makes me a friendly person to work with. I really enjoy attending meetup
    events and hackathons, as they are fun and give me a chance to learn and
    showcase my skills. I also have a minimalist approach to design,
    focusing on creating clean and user-friendly websites. I'm excited to
    continue my journey in frontend development and keep improving my
    skills."
      />
      <SkillsSection />
      <ExperienceSection />
      <AwardsSection />
    </>
  );
}
