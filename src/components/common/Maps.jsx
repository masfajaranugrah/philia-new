"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Maps = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDoubleClick = () => {
    setScale((prevScale) => {
      if (prevScale === 1) return 1.5;
      if (prevScale === 1.5) return 2;
      if (prevScale === 2) return 2.5;
      setPosition({ x: 0, y: 0 }); // Reset posisi ke tengah saat kembali ke normal
      return 1;
    });
  };

  const handleDragEnd = (_, info) => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 }); // Jika skala normal, reset ke posisi awal
    } else {
      // Pastikan tidak keluar batas setelah dilepas
      setPosition({
        x: Math.min(200 * (scale - 1), Math.max(-200 * (scale - 1), info.point.x)),
        y: Math.min(150 * (scale - 1), Math.max(-150 * (scale - 1), info.point.y)),
      });
    }
  };

  return (
    <motion.div
      className="container xl:w-[95%] mx-auto flex my-10 flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
        <div className='text-center'>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className=" text-center text-[30px]  md:text-[40px] xl:text-[40px] text-[#2D210A] font-[Montserrat] font-[1000] my-10"
        >
          PETA PHILIA
        </motion.p>
      </div>
      <motion.div
        className="border border-black rounded-[14px] xl:rounded-[35px] cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.img
          src="/images/map.png"
          alt="maps"
          className="w-full h-80 sm:h-[60vh] xl:h-full lg:h-full md:h-full"
          style={{ scale, position: "relative" }} // Tambahkan position: "relative"
          drag={scale > 1} // Bisa digeser jika diperbesar
          onDoubleClick={handleDoubleClick}
          onDragEnd={handleDragEnd} // Simpan posisi terakhir atau reset
          animate={{ x: position.x, y: position.y, scale }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Maps;
