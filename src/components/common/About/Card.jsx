"use client";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const cardData = [
  {
    id: 1,
    title: "Lokasi di Hutan yang Asri dan Luas",
    description:
      "Rasakan kesegaran udara alami jauh dari hiruk-pikuk kota! Philia Adventure Park berada di tengah hutan yang masih asri, menawarkan lingkungan yang bersih dan udara yang menyegarkan. Ini adalah tempat yang sempurna untuk menyegarkan pikiran dan mengisi ulang energi!",
    image: "/images/about/pohon.png",
  },
  {
    id: 2,
    title: "Wahana yang Beragam",
    description:
      "Dari wahana santai hingga yang memacu adrenalin, Philia Adventure Park punya semuanya! Baik Anda ingin menikmati keindahan alam dengan tenang atau mencari tantangan seru, pilihan wahana di sini tidak akan mengecewakan. Setiap kunjungan bisa menjadi pengalaman yang berbeda, tak ada kata bosan di Philia Adventure Park.",
    image: "/images//about/wahana.png",
  },
  {
    id: 3,
    title: "Sangat Ramah untuk Keluarga",
    description:
      "Philia Adventure Park adalah destinasi yang cocok untuk segala usia! Anak-anak bisa bermain dengan aman, orang dewasa bisa menikmati keindahan alam, dan seluruh keluarga bisa menghabiskan waktu berkualitas bersama. Dengan fasilitas yang mendukung kenyamanan semua pengunjung, ini adalah tempat yang ideal untuk liburan keluarga..",
    image: "/images/about/people.png",
  },
  {
    id: 4,
    title: "Pengalaman Menjelajahi Hutan yang Aman",
    description:
      "Philia Adventure Park menyediakan berbagai opsi eksplorasi, mulai dari berjalan kaki santai, naik cargo yang nyaman, hingga mengendarai ATV untuk petualangan yang lebih menantang. Semua dilakukan dalam pengawasan, sehingga Anda bisa menikmati alam dengan tenang dan tanpa rasa khawatir",
    image: "/images/about/jaket.png",
  },
];

const Card = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="container mx-auto relative z-10 pb-[10rem] lg:pb-[21rem] md:pb-[10rem] md:px-[1rem] lg:px-[40rem] xl:px-[2rem] px-[2rem]">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl shadow-[8px_8px_0px_#0A2D19] bg-[#F6FFEA]"
            >
              <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
                {/* Gambar */}
                <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                  <div className="xl:w-[180%]  lg:w-[150%] md:w-[150%] w-full flex  justify-center items-center pt-10 flex justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-30 w-28 xl:h-40 xl:w-60 md:h-30 md:w-40 lg:h-28 lg:w-28  md:pl-0"
                    />
                  </div>

                  {/* Teks */}
                  <div className="p-6 flex md:justify-start md:items-start flex-col">
                    <h4 className="mb-2 text-[20px] flex-1 text-[#2D210A]  md:text-[40px] lg:text-[20px] xl:text-start text-center md:text-left font-bold text-blue-gray-900">
                      {card.title}
                    </h4>
                    <p className="text-[16px] md:text-[20px] text-[#2D210A] text-center xl:text-[15px]   xl:text-start lg:text-start md:text-start text-gray-700">
                      {card.description}
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
