import Preloader from "@/components/Preloader";
import * as React from "react";
import { Suspense } from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <Preloader />
      <h1>Hello I'm Khant Lin Nyan. I Made Web App with Love</h1>
    </>
  );
}
