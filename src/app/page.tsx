import { Metadata } from "next";

import Hero from "../components/Hero";

const url = process.env.SITE_URL;

export const metadata: Metadata = {
  title: "Devansh",
  description:
    "A Full stack Developer. I love to build beautiful and interactive websites.",
  
  

  

  // icons: {
  //   icon: `${url}/images/icons/favicon.ico`,
  //   shortcut: `${url}/images/icons/favicon-16x16.png`,
  //   apple: `${url}/images/icons/apple-touch-icon.png`,
  // },
};

export default function Home() {
  return (
    <main className="px-5 md:px-0 max-w-[815px] mx-auto flex-1">
      <Hero />
      
    </main>
  );
}
