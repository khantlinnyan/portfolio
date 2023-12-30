import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../Icons/ArrowIcon";

export interface IProjectCardProps {
  imageSrc: string;
  href: string;
  description: string;
  title: string;
}

export default function ProjectCard({
  imageSrc,
  href,
  description,
  title,
}: IProjectCardProps) {
  return (
    <Link href={href} className="w-full h-auto flex flex-col">
      <Image
        src={imageSrc}
        layout="responsive"
        width="400"
        height="400" // 1:1 aspect ratio
        className="w-full object-contain  aspect-square bg-white/40  rounded-3xl"
      />
      <p className="mt-4 text-zinc-800 text-sm lg:base">{description}</p>
      <div className="flex items-center mt-2 gap-x-2">
        <p className=" text-zinc-900 text-xl lg:text-2xl font-medium">
          {title}
        </p>
        <ArrowIcon className="text-3xl rotate-180" />
      </div>
    </Link>
  );
}
