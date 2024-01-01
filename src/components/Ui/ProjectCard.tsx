import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../Icons/ArrowIcon";

export interface IProjectCardProps {
  imageSrc: StaticImageData;
  alt: string;
  description: string;
  title: string;
}

export default function ProjectCard({
  imageSrc,
  alt,
  description,
  title,
}: IProjectCardProps) {
  return (
    <div className="w-full h-auto flex flex-col">
      <Image
        alt={alt}
        src={imageSrc}
        layout="responsive"
        width="300"
        height="300"
        className="w-full object-contain  aspect-square bg-white/40  rounded-3xl p-3"
      />
      <div className="mt-4 bg-green-400/40 text-zinc-800 text-sm lg:base w-fit px-2 py-1 rounded-full">
        {description}
      </div>
      <div className="flex items-center mt-2 gap-x-2">
        <p className=" text-zinc-900 text-xl lg:text-2xl font-medium">
          {title}
        </p>
        <ArrowIcon className="text-3xl rotate-180" />
      </div>
    </div>
  );
}
