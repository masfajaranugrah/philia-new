"use client";
import React from "react";
import { motion } from "framer-motion";

const ticketData = [
  { id: 1, title: "Acara Koperasi" },
  { id: 2, title: "Acara CSR" },
  { id: 3, title: "Peluncuran Product" },
  { id: 4, title: "Dan Lain Lainnya" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
  }),
};

const Card = () => {
  return (
    <div className="relative mt-20">
      <div className="container mx-auto relative z-10 md:pb-[30rem] xl:pb-[30rem] lg:pb-[30rem] pb-[8rem] md:px-4 lg:px-10 xl:px-10 px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ticketData.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              className="p-6 border flex justify-center items-center text-center border-green-900 bg-[#F6FFEA] rounded-[20px] shadow-[8px_8px_0px_#0A2D19]"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.05, boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-[30px] font-[1000] text-[#2D210A] mb-1">{ticket.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center bg-[#F6FFEA] p-6 rounded-[20px] shadow-[8px_8px_0px_#0A2D19]"
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
            className="px-6 my-4 py-4 text-[30px] font-[1000] text-white bg-[#2D210A] rounded-[20px]"
            whileHover={{ scale: 1.05, backgroundColor: "#2D210A" }}
            whileTap={{ scale: 0.95 }}
          >
           KONTAK KAMI
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute -bottom-1 w-full">
        <img src="/images/01.png" alt="Gambar wahana" className="w-full h-full" />
      </div>
      
    </div>
  );
};

export default Card;
