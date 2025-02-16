"use client";
import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="relative mt-20">
   

      <div className="container mx-auto relative z-10 xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem]  ">
     
        

        {/* "Check on WAHANA" Section Animation */}
        <motion.div
          className="text-center bg-[#F6FFEA] p-6 rounded-[20px] mx-8  shadow-[8px_8px_0px_#0A2D19]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="my-4 flex justify-center items-center xl:gap-3 lg:gap-3 flex-col xl:flex-row lg:flex-row">
            <p className="text-[30px] font-bold text-[#2D210A] ">Pesan</p>
            <p className="text-[40px] font-[1000] text-[#2D210A] ">ACARA KAMU</p>
            <p className="text-[30px] font-bold text-[#2D210A] ">Sekarang!</p>
          </div>

          <motion.button
            className="px-6 my-4 py-4 text-[20px] font-[1000] text-white bg-[#2D210A]  rounded-[20px] "
            whileHover={{ scale: 1.05, backgroundColor: "#2D210A" }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT KAMI
          </motion.button>
        </motion.div>
      </div>

      {/* Fixed Background Image */}
      <div className="absolute -bottom-1 w-full">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Card;
