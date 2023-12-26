import * as React from "react";
import Image from "next/image";
import { ArrowIcon } from "../Icons/ArrowIcon";

export interface IProjectCardProps {}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-auto aspect-square bg-slate-500 rounded-3xl"></div>
      <p className="mt-4 text-zinc-800 text-sm lg:base">Description</p>
      <div className="flex items-center mt-2 gap-x-2">
        <p className=" text-zinc-900 text-xl lg:text-2xl font-medium">Link</p>
        <ArrowIcon className="text-3xl rotate-180" />
      </div>
    </div>
  );
}
