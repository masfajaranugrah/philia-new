"use client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Card = () => {
  return (
    <div className="relative">
      <div>
      
      </div>
      {/* Main Content */}
      <div className="container mx-auto relative z-10 pb-[10rem] lg:pb-[20rem] md:pb-[10rem] md:px-[1rem] lg:px-[40rem] xl:px-[2rem] px-[2rem]">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl shadow-[8px_8px_0px_#0A2D19] bg-white"
            >
              <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
                {/* Gambar */}
                <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                  <div className="w-full pt-10 flex justify-center">
                    <img
                      src="/images/pohon.png"
                      alt="pohon"
                      className="h-28 w-28 xl:h-30 xl:w-30 md:h-30 md:w-40 lg:h-28 lg:w-28 pl-4 md:pl-0"
                    />
                  </div>

                  {/* Teks */}
                  <div className="p-6 flex md:justify-start md:items-start flex-col">
                    <h4 className="mb-2 text-[20px] text-[#2D210A]  md:text-[40px] lg:text-[30px] text-center font-bold text-blue-gray-900">
                      Kedai Philia
                    </h4>
                    <p className="text-[16px] md:text-[20px] text-[#2D210A]  xl:text-[15px] text-center xl:text-start lg:text-start md:text-start text-gray-700">
                      Tempat makan seru dengan banyak pilihan makanan dan minuman lezat. Kamu bisa duduk santai sambil menikmati hidangan favoritmu di sini!
                    </p>
                  </div>
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fixed Background Image */}
      <div className="absolute -bottom-1 w-full">
        <img src="/images/01.png" alt="Gambar wahana" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Card;
