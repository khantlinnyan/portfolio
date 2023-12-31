import Card from "@/components/3D/Card";
import * as React from "react";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main className="w-full overflow-hidden overflow-y-hidden h-screen">
      <Card />
    </main>
  );
}
