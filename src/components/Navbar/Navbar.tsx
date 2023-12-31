"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveTab } from "../Context/ActiveTabContextProvider";
import { navLink } from "../Context/ActiveTabContextProvider";

export default function Navbar() {
  const { activeTab, setActiveTab } = useActiveTab();

  return (
    <motion.nav
      key={1}
      className="fixed left-1/2 transform -translate-x-1/2 w-fit z-10 flex justify-between shadow-sm backdrop-blur-3xl bg-[#F5F5F5]/50
      p-1 rounded-full top-5"
    >
      <ul className="flex items-center">
        {navLink.map((link) => (
          <Link
            key={link.name}
            onClick={() => setActiveTab(link.name)}
            className={`px-3 py-1 z-20 transition relative font-medium text-md ${
              activeTab === link.name
                ? "text-white"
                : "text-[#86868A]  hover:text-opacity-50"
            }`}
            href={link.to}
          >
            {activeTab === link.name && (
              <motion.span
                layoutId="bubble"
                className="absolute -z-10  inset-0 backdrop-blur-3xl  bg-[#B8B8B9] "
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {link.name}
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}
