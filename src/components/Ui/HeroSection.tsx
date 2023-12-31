import * as React from "react";
import { ArrowIcon } from "@/components/Icons/ArrowIcon";
import { FacebookIcon } from "@/components/Icons/FacebookIcon";
import { GmailIcon } from "@/components/Icons/GmailIcon";
import { LinkedinIcon } from "@/components/Icons/LinkedinIcon";
import HighlightText from "@/components/Typography/HighlightText";
import Paragraph from "@/components/Typography/Paragraph";
import Link from "next/link";
import AnimatedText from "../Animation/AnimatedText";

export interface IHeroSectionProps {}

export default function HeroSection(props: IHeroSectionProps) {
  return (
    <main className="h-[93svh] pt-20 grid grid-rows-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 w-full container mx-auto">
      <div className="flex-col lg:col-span-2 lg:order-1 justify-center flex">
        <AnimatedText
          className="font-medium lg:text-3xl text-md text-start text-zinc-500 mb-2"
          text={["- A Journey Through the Mind of"]}
          el="p"
        />
        <h1 className="font-medium text-4xl lg:text-8xl text-zinc-900 w-full">
          Khant Lin Nyan ©
        </h1>
      </div>
      <div className="w-full lg:justify-start justify-end pb-4 flex-col flex gap-6 h-full order-last lg:order-2 ">
        <Paragraph className="lg:text-lg text-base">Get in touch</Paragraph>
        <div className="flex flex-row lg:flex-col gap-6 ">
          {" "}
          <Link
            className="text-2xl text-zinc-800 lg:text-3xl"
            href={
              "https://www.linkedin.com/in/khant-lin-nyan-233325287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          >
            <LinkedinIcon />
          </Link>
          <Link
            className="text-2xl text-zinc-800 lg:text-3xl"
            href={"https://www.facebook.com/khant.l.nyan.7"}
          >
            <FacebookIcon />
          </Link>
          <Link
            className="text-2xl text-zinc-800 lg:text-3xl"
            href={"mailto:khantlinnyan.dev@gmail.com"}
          >
            <GmailIcon />
          </Link>
        </div>
      </div>
      <div className="w-full row-span-2 ml-auto mr-6 flex justify-center flex-col  lg:order-3 lg:justify-start">
        {" "}
        <Paragraph>
          I &apos; m a <HighlightText>frontend developer</HighlightText> with a
          passion for creating <HighlightText>beautiful</HighlightText> and{" "}
          <HighlightText>functional</HighlightText> user interfaces. I love
          <HighlightText> minimalism</HighlightText> and{" "}
          <HighlightText>creative design</HighlightText>, and I &apos; m always
          excited to take on
          <HighlightText> new challenges.</HighlightText>
        </Paragraph>
        <div className="flex gap-2 mt-8 items-center">
          <ArrowIcon />
          <Link
            href="/about"
            className="text-zinc-800 underline text-base lg:text-xl"
          >
            Read more
          </Link>
        </div>
      </div>
    </main>
  );
}
