"use client";
import React from "react";
import { motion } from "framer-motion";

const _Group = () => {
  return (
    <motion.div
      className="container mx-auto my-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="text-[40px] font-[1000] text-center text-[#2D210A]"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          BERSAMA LEBIH SERU!
        </motion.h1>

        <motion.p
          className="font-bold text-center text-[20px] text-[#2D210A] pb-4 xl:text-[25px] lg:text-[25px] md:text-[25px]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Rasakan kebersamaan yang tak terlupakan bersama kami!
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full px-[2rem] flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div>
          <motion.img
            src="/images/group.png"
            alt="kunjungan"
            className="rounded-lg border border-black overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>

      <motion.p
        className="font-semibold text-justify px-8 container xl:text-center md:text-center lg:text-center text-[17px] text-[#2D210A] xl:text-[25px] lg:text-[25px] md:text-[25px] mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Jelajahi Philia Adventures Park dan temukan berbagai kenangan tak terlupakan untuk diciptakan bersama! Philia Adventures Park siap untuk mengakomodasi berbagai acara Anda (Min. 25 orang), seperti:
      </motion.p>
    </motion.div>
  );
};

export default _Group;
