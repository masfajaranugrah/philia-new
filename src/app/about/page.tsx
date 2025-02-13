"use client";

import dynamic from "next/dynamic";

// Lazy load components untuk mempercepat waktu render awal
const Banner = dynamic(() => import("@/components/common/About/Banner"));
const _About = dynamic(() => import("@/components/common/About/_About"));
const Card = dynamic(() => import("@/components/common/About/Card"));
const Whatsapp = dynamic(() => import("@/components/common/Whatsapp"));

const Page = () => {
  return (
    <div>
      <Banner />
      <_About />
      <Card />
      <Whatsapp />
    </div>
  );
};

export default Page;
