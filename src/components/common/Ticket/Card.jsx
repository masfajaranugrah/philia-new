"use client";
import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="relative mt-20">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }} // Initial state for the heading
        whileInView={{ opacity: 1, y: 0 }} // Final state for the heading when in view
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition for heading
        viewport={{ once: true }} // Trigger once when in view
      >
        <div className="my-10">
          <h1 className="text-[30px]  md:text-[40px] xl:text-[40px] text-[#2D210A]  font-[1000] text-center">  INFORMASI TIKET</h1>
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10 xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[2rem]">
        {/* Ticket Cards Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8"
          initial={{ opacity: 0 }} // Initial opacity
          whileInView={{ opacity: 1 }} // Final opacity when in view
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }} // Trigger once when in view
        >
          {/* Weekdays Card */}
          <motion.div
            className="p-6 border border-green-900 bg-[#F6FFEA] rounded-[20px] rounded shadow-[8px_8px_0px_#0A2D19]"
            whileHover={{ scale: 1.05, boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-[40px] font-[1000] text-center text-[#2D210A]  mb-1">HARI KERJA</h3>
            <p className="text-[20px] text-center text-[#2D210A] font-semibold mb-1">Tutup : 19.00</p>
            <p className="text-[20px] text-center font-bold text-[#2D210A] ">Dewasa : Rp 20.000</p>
            <p className="text-[20px] text-center font-bold text-[#2D210A] ">Anak-Anak : Rp 15.000</p>
          </motion.div>

          {/* Weekend Card */}
          <motion.div
            className="p-6 border border-green-900 rounded-[20px] rounded shadow-[8px_8px_0px_#0A2D19] bg-[#F6FFEA]"
            whileHover={{ scale: 1.05, boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-[40px] font-[1000] text-center text-[#2D210A]  mb-1">HARI LIBUR</h3>
            <p className="text-[20px] text-center text-[#2D210A] font-semibold mb-1">Tutup : 19.00</p>
            <p className="text-[20px] text-center font-bold text-[#2D210A] ">Dewasa : Rp 25.000</p>
            <p className="text-[20px] text-center font-bold text-[#2D210A] ">Anak-Anak : Rp 20.000</p>
          </motion.div>
        </motion.div>

        {/* "Check on WAHANA" Section Animation */}
        <motion.div
          className="text-center bg-[#F6FFEA] p-6 rounded-[20px]  shadow-[8px_8px_0px_#0A2D19]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="my-4">
            <p className="text-[30px] font-bold text-[#2D210A] ">Cek</p>
            <p className="text-[40px] font-[1000] text-[#2D210A] ">WAHANA TIKET</p>
            <p className="text-[30px] font-bold text-[#2D210A] ">sekarang!</p>
          </div>

          <motion.button
            className="px-6 my-4 py-4 text-[30px] font-[1000] text-white bg-[#2D210A]  rounded-[20px] "
            whileHover={{ scale: 1.05, backgroundColor: "#2D210A" }}
            whileTap={{ scale: 0.95 }}
          >
            WAHANA TIKET
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
