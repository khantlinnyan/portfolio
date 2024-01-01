import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Khant Lin Nyan",
  description:
    "Khant Lin Nyan as a frontend developer with a passion for creating beautiful and functional user interfaces. ",
  openGraph: {
    type: "website",
    url: "https://khantlinnyan.vercel.app/",
    description:
      "I'm a frontend developer with a passion for creating beautiful and functional user interfaces.",
    siteName: "Khant Lin Nyan",
  },
  twitter: {
    site: "https://khantlinnyan.vercel.app",
    title: "Khant Lin Nyan",
    description:
      "I'm a frontend developer with a passion for creating beautiful and functional user interfaces.",
  },
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
        <SpeedInsights />
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
