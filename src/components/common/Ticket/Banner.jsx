"use client";
import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section className="xl:mx-[40px] md:mx-[40px] lg:mx-[40px] mb-20   relative mt-[20px] lg:mt-[33px] xl:mt-[33px] sm:mt-[20px] md:mt-20 md:px-0 lg:px-0 xl:px-0 px-4">
      <motion.div
        className="relative overflow-hidden rounded-[20px] rounded  bg-cover bg-no-repeat text-center h-[329px] sm:h-[400px] md:h-[300px] xl:h-[400px] lg:h-[800px]"
        style={{
          backgroundImage: "url('/images/bg-about.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center px-8 sm:px-20">
          <motion.div
            className="text-white max-w-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-center md:text-[25px] text-[#F6FFEA] xl:text-[48px] lg:text-[48px] text-[40px] font-[1000]">
              INFORMASI TIKET
            </h4>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Banner;
