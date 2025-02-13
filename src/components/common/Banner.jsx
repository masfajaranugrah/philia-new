"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Banner() {
  return (
    <section className="container xl:w-[95%] rounded rounded-full mx-auto relative mt-5 lg:mt-8 px-4 md:px-0">
      {/* Background muncul dulu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded rounded-[20px] bg-cover bg-no-repeat text-center flex items-center min-h-[329px] sm:min-h-[400px] md:min-h-[500px] xl:min-h-[600px]"
        style={{
          backgroundImage: "url('/images/banner/banner.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-start px-8 sm:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.2 }}
            className="text-white max-w-lg"
          >
            {/* Logo muncul setelah background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1, type: "spring" }}
              className="mb-4 xl:w-[17rem] md:w-[10rem] w-[7rem]"
            >
              <Image
                src="/images/banner/logo.png"  
                alt="logo"
                width={200}  
                height={170}
                priority
              />
            </motion.div>

            {/* Text muncul setelah logo */}
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-left text-[20px] md:text-[25px] xl:text-[40px] font-[1000] leading-tight"
            >
              LET'S MAKE ADVENTURES <br /> TOGETHER WITH US!
            </motion.h4>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Banner;
