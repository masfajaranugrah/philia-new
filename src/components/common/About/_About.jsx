"use client";
import React from "react";
import { motion } from "framer-motion";

const _About = () => {
  return (
    <div className="relative">
      {/* Main Container */}
      <div className="container mx-auto lg:px-40 xl:px-40 md:px-10 px-4 my-20 relative z-10">
        
        {/* Heading Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[#2D210A]  text-[30px] lg:text-[40px] xl:text-[30px] md:text-[40px] text-center font-bold">
            SELAMAT DATANG DI PHILIA ADVENTURE PARK!
          </h1>
        </motion.div>

        {/* Description Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-center text-[#2D210A]  xl:text-justify md:text-justify lg:text-justify"
        >
          <p className="text-[20px] text-[#2D210A]  mb-4">
            Sebuah destinasi petualangan yang menawarkan pengalaman tak
            terlupakan bagi Anda yang ingin menjelajahi keindahan alam sambil
            menikmati aktivitas yang penuh keseruan. Terletak di lokasi yang
            tenang dan hijau, taman ini dirancang khusus untuk menghadirkan
            harmoni sempurna antara rekreasi dan eksplorasi alam.
          </p>
          <p className="text-[20px] text-[#2D210A] ">
            Ayo, jadikan akhir pekan Anda lebih bermakna di Philia Adventure
            Park! Rasakan keseruan yang mendekatkan Anda dengan alam, diri
            sendiri, dan orang-orang tercinta. Kunjungi kami sekarang dan bawa
            pulang cerita petualangan yang tak terlupakan!
          </p>
        </motion.div>

      </div> 
    </div>
  );
};

export default _About;
