"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLink = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navLink[0].name);
  const isScrolling = true;

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

// import { motion } from "framer-motion";
// import { useState } from "react";

// let tabs = [
//   { id: "world", label: "World" },
//   { id: "ny", label: "N.Y." },
//   { id: "business", label: "Business" },
//   { id: "arts", label: "Arts" },
//   { id: "science", label: "Science" },
// ];

// export default function Navbar() {
//   let [activeTab, setActiveTab] = useState(tabs[0].id);

//   return (
//     <div className="flex space-x-1">
//       {tabs.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => setActiveTab(tab.id)}
//           className={`${
//             activeTab === tab.id ? "" : "hover:text-white/60"
//           } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
//           style={{
//             WebkitTapHighlightColor: "transparent",
//           }}
//         >
//           {activeTab === tab.id && (
//             <motion.span
//               layoutId="bubble"
//               className="absolute inset-0 z-10 bg-white mix-blend-difference"
//               style={{ borderRadius: 9999 }}
//               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//             />
//           )}
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// }
