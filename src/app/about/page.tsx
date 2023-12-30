import dynamic from "next/dynamic";
import Paragraph from "@/components/Typography/Paragraph";
import AnimatedParagraph from "@/components/Animation/AnimatedParagraph";
import ImageGallery from "@/components/ui/ImageGallery";
import SkillsSection from "@/components/ui/SkillsSection";
// const NoSSRAnimatedParagraph = dynamic(
//   () => import"),
//   { ssr: false }
// );
import * as React from "react";
import ExperienceSection from "@/components/ui/ExperienceSection";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <>
      <div className="overflow-hidden gap-4 h-screen grid grid-cols-1 lg:grid-cols-7">
        <ImageGallery />
        <p className="font-medium text-4xl lg:text-start md:text-center leading-tight lg:leading-snug md:text-6xl lg:text-7xl col-span-1 lg:col-span-4 lg:my-auto gap-3 text-zinc-800 w-full">
          Hey 👋, I'm Khant Lin Nyan
        </p>
      </div>
      <div className="h-screen">
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
      </div>
      <SkillsSection />
      <ExperienceSection />
    </>
  );
}
