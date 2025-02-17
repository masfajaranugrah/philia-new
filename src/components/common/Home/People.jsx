import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

export default function People() {
  return (
    <div className="w-full mx-auto  mb-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="  text-center text-[30px]  md:text-[40px] xl:text-[40px] text-[#2D210A]    font-[Montserrat] font-[1000] my-10"
        >
          KESERUAN PHILIA
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <InfiniteMovingCards   items={testimonials} direction="right" speed="slow" />
      </motion.div>
    </div>
  );
}

const testimonials = [
  {
    id: 1, // Tambahkan ID unik
    title: "Sudiyo ST",
    description:
      "Banyak gazebo gratis dan spot foto instagramable, trek apv menantang, akses jalan sudah bagus kecuali masuk ke parkiran (perlu ditingkatkan), ada penginapannya juga...overall bagus.",
    location: "Jakarta",
  },
  {
    id: 2,
    title: "Fariz Rizki",
    description:
      "Cocok untuk mengisi liburan anak2 ada gazebo, kolam renang dan juga mini marketnya, harga tiket masih termasuk murah.",
    location: "Bandung",
  },
  {
    id: 3,
    title: "dsm sinarmandiri",
    description:
      "Ayo teman2 serbu dan ramaikan,ngga bohong tempatnya indah enak ramah2 bebas pungli,kumplit permainannya..semoga terus maju...tempat camping ya juga ada,next saya mau kemping ,kira2 berapa harganya ya admin.",
    location: "Surabaya",
  },
  {
    id: 4,
    title: "dwi kurniawan",
    description:
      "recomended sih buat saya, kapan kapan bakal main kesitu lagi.. dari kota bekasi.",
    location: "Bekasi",
  },
  {
    id: 5,
    title: "Prasetya Aji Irwan",
    description:
      "Datang weekday ,suasana oke ,asri , untuk biaya parkir dan masuk murah ,wahana juga murah ,menu di minimarket juga lumayan komplit dan murah,ada cafe ,kolam renang,mini market,srodotan,atf ,taman bermain , joging track dan penginapan,overall oke.",
    location: "Bekasi",
  },
];
