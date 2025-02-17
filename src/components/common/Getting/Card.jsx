"use client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const fasilitasData = [
  {
    id: 1,
    image: "/images/getting/kopi.png",
    title: "Kedai Philia",
    description:
      "Tempat makan seru dengan banyak pilihan makanan dan minuman lezat. Kamu bisa duduk santai sambil menikmati hidangan favoritmu di sini!",
    location: "Zona 4",
  },
  {
    id: 2,
    image: "/images/getting/keranjang.png",
    title: "Philia Mart",
    description:
      "Toko kecil yang menjual berbagai barang seperti camilan, minuman, atau kebutuhan lainnya. Tempat yang pas kalau kamu butuh sesuatu dengan cepat!.",
    location: "Zona 4",
  },
  {
    id: 3,
    image: "/images/getting/snack.png",
    title: "Warung",
    description:
      "Tempat makan sederhana yang menyediakan makanan lokal yang enak. Cocok kalau kamu ingin mencoba masakan yang rasanya seperti di rumah.",
    location: "Zona 4",
  },
  {
    id: 4,
    image: "/images/getting/lari.png",
    title: "Jogging Track",
    description:
      "Jalur untuk lari atau jalan santai di alam terbuka. Udara segar dan pemandangan yang indah bikin olahraga jadi lebih menyenangkan.",
    location: "Zona 4",
  },
  {
    id: 5,
    image: "/images/getting/maps.png",
    title: "Bobo Cabin",
    description:
      "Kabin kecil yang nyaman untuk beristirahat. Tempat ini seperti rumah mini yang cocok untuk tidur nyenyak setelah seharian bermain.",
    location: "Zona 4",
  },
  {
    id: 6,
    image: "/images/getting/mobil.png",
    title: "Campervan",
    description:
      "Mobil keren yang bisa kamu gunakan untuk camping. Di dalamnya ada tempat tidur dan perlengkapan lain untuk bermalam di alam. Serasa petualangan!.",
    location: "Zona 4",
  },
  {
    id: 7,
    image: "/images/getting/aula.png",
    title: "Aula",
    description:
      "Ruangan besar untuk berbagai acara seru. Kamu bisa ikut kegiatan seperti permainan, lomba, atau kumpul bersama teman-teman di sini.",
    location: "Zona 4",
  },
  {
    id: 8,
    image: "/images/getting/toilet.png",
    title: "Tiolet",
    description:
      "Tempat untuk keperluan buang air dan membersihkan diri. Bersih dan nyaman, jadi kamu bisa merasa tenang saat menggunakannya.",
    location: "Zona 4",
  },
];

const Card = () => {
  return (
    <div className="relative">
      <div>
        <h1 className="text-[20px] md:text-[40px] text-[#2D210A] lg:text-[40px] font-[1000] text-center">
        FASILITAS
        </h1>
      </div>
      
      <div className="container mx-auto relative z-10 pb-[10rem] lg:pb-[20rem] md:pb-[10rem] md:px-[1rem] lg:px-[40rem] xl:px-[2rem] px-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {fasilitasData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl shadow-[8px_8px_0px_#0A2D19] bg-[#F6FFEA]"
            >
              <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
                <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                  <div className="w-full pt-10 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-28 xl:h-40 xl:w-40 md:h-30 md:w-30 lg:h-28 lg:w-28 md:pl-0"
                    />
                  </div>

                  <div className="p-6 flex md:justify-start md:items-start flex-col">
                    <h4 className="mb-2 text-[20px] md:text-[10px] lg:text-[20px] xl:text-[30px] text-center font-bold text-blue-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-[16px] md:text-[20px] xl:text-[17px] text-center xl:text-start lg:text-start md:text-start text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex md:justify-start md:items-start flex-col lg:w-full md:w-full xl:w-full w-[46%] xl:px-4 md:px-7 mb-7">
                  <button
                    type="button"
                    className="gap-2 font-semibold text-[15x] mt-4 text-center focus:outline-none disabled text-white bg-[#2D210A] focus:ring-4 focus:ring-green-300 rounded-[5px] px-5 py-1 me-2 mb-2 flex justify-center items-center"
                  >
                    <FaMapMarkerAlt /> {item.location}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-1 w-full">
        <img src="/images/01.png" alt="Gambar wahana" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Card;
