import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Ui/Footer";
import ActiveTabProvider from "@/components/Context/ActiveTabContextProvider";
import Navbar from "@/components/Navbar/Navbar";
import { ScrollProvider } from "@/components/Context/ScrollContextProvider";

const myFont = localFont({
  src: [
    {
      path: "../font/ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/ppneuemontreal-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/ppneuemontreal-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/ppneuemontreal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/ppneuemontreal-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "HOME",
  description:
    "I'm a frontend developer with a passion for creating beautiful and functional user interfaces. I love minimalism and creative design, and I'm always excited to take on new challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#EEEEEA] ${myFont.className} `}>
        <Analytics />
        <ActiveTabProvider>
          <ScrollProvider>
            <Navbar />
            <main className={`${myFont.className} mx-8 lg:mx-14`}>
              {children}
            </main>

            <Footer />
          </ScrollProvider>
        </ActiveTabProvider>
      </body>
    </html>
  );
}
