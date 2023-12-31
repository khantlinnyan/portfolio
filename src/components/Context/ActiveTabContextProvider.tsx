"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const navLink = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
];

const ActiveTabContext = createContext<{
  activeTab: string;
  setActiveTab: (newActiveTab: string) => void;
}>({ activeTab: "", setActiveTab: () => {} });

export default function ActiveTabProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState<string>(navLink[0].name);

  useEffect(() => {
    const matchingNavLink = navLink.find((link) => link.to === pathName);

    if (matchingNavLink) {
      setActiveTab(matchingNavLink.name);
    }
  }, [pathName]);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export const useActiveTab = () => useContext(ActiveTabContext);
