"use client";
import React from "react";
import { motion } from "framer-motion";

const _Getting = () => {
  return (
    <motion.div
      className="container mx-auto my-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div>
        <motion.h1
          className="text-[40px] font-[1000] text-center text-[#2D210A] "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        >
          JAM BUKA
        </motion.h1>

        <motion.p
          className="font-bold text-center text-[20px] text-[#2D210A]  xl:text-[30px] lg:text-[30px] md:text-[30px] mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        >
          Monday - Sunday : 00.00 - 00.00 | Last Entry : 19.00
        </motion.p>

        <motion.h2
          className="font-[1000] text-[30px] my-10 text-center text-[#2D210A] "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        >
TEMUKAN KAMI DISINI      
 </motion.h2>
      </div>

      <motion.div
        className="w-full px-[2rem] flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}>

        <div className="rounded-lg border border-black overflow-hidden w-full lg:h-[20rem] md:h-[20rem] xl:h-[40rem] h-[20rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d614.8713366412392!2d107.01665174106975!3d-6.511391651709591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bd722738af2f%3A0xf64383e1e58f26a!2sPhilia%20adventure%20land%20jonggol!5e1!3m2!1sid!2sid!4v1738763197262!5m2!1sid!2sid"
            allowFullScreen={true}
            loading="lazy"
            className="w-full lg:h-[20rem] md:h-[20rem] xl:h-[40rem] h-[20rem]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default _Getting;
