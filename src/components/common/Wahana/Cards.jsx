"use client";
import React, { use, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Card = () => {
  const [wahana, setWahana] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    fetch("http://192.168.1.22:8000/api/wahana")
      .then((res) => res.json())
      .then((data) => setWahana(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
 
  
  return (
    <div className="relative xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem]">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-[40px] font-[1000] text-[#2D210A] text-center">
          RASAKAN KESERUANNYA!
        </h1>
      </motion.div>

      <div className="container mx-auto relative pb-[15em] md:pb-[46rem] xl:pt-[10rem] lg:pt-[10rem]">
        {wahana.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-600 mt-10">
            Wahana tidak ditemukan
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {wahana.map((item, index) => {
              let images = [];
              try {
                images = JSON.parse(item.images || "[]");
              } catch (error) {
                console.error("Invalid JSON in images:", item.images);
              }

              return (
                <Modal key={index}>
                  <ModalTrigger asChild>
                    <div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="bg-white border-2 border-black rounded-[30px] shadow-lg cursor-pointer flex flex-col h-full"
                      >
                        <div className="w-full h-[250px] overflow-hidden rounded-t-[30px]">
                          {images.length > 0 && (
                            <img
                              className="w-full h-full object-cover"
                              src={`http://192.168.1.22:8000/storage/wahana/${images[0]}`}
                              alt={item.title}
                            />
                          )}
                        </div>

                        <div className="p-5 border-t-4 border-black flex flex-col flex-grow">
                          <h5 className="mb-2 text-[20px] font-bold text-gray-900">{item.title}</h5>
                          <p className="mb-3 text-gray-700 text-[15px] line-clamp-3">
                            {item.description.length > 150
                              ? item.description.substring(0, 120) + "..."
                              : item.description}
                          </p>
                          <div className="mt-auto flex justify-between items-center">
                            <span className="text-white bg-[#2D210A] font-medium rounded-lg text-sm px-5 py-2.5 flex items-center">
                              <FaMapMarkerAlt /> {item.location.split(" ")[0] + " ..."}
                            </span>
                            <span className="text-white bg-[#2D210A] font-medium rounded-lg text-sm px-5 py-2.5">
                              {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              }).format(item.price)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </ModalTrigger>

                  <ModalBody className="flex justify-center my-10 border-none bg-white overflow-hidden items-center">
                    <ModalContent className="container mx-auto">
                      <h4 className="text-lg md:text-2xl text-neutral-600 text-center font-bold mb-8">
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 border border-gray-200">
                          {item.title}
                        </span>{" "}
                        🌳
                      </h4>
                      <div className="flex flex-col container mx-auto items-center">
                        {images.length > 0 && (
                          <>
                         <Swiper
  modules={[Autoplay, Thumbs]}
  thumbs={{ swiper: thumbsSwiper || null }}
  className="w-full max-w-lg"
>
  {images.map((img, i) => (
    <SwiperSlide key={i}>
      <img
        src={`http://192.168.1.22:8000/storage/wahana/${img}`}
        alt={`${item.title} - ${i}`}
        className="w-full h-60 md:h-80 lg:h-80 xl:h-80 object-cover rounded-lg"
      />
    </SwiperSlide>
  ))}
</Swiper>

<Swiper
  onSwiper={(swiper) => {
    if (swiper) {
      setThumbsSwiper(swiper);
    }
  }}
  slidesPerView={4}
  spaceBetween={10}
  watchSlidesProgress
  className="w-full max-w-lg mt-4"
>
  {images.map((img, i) => (
    <SwiperSlide key={i}>
      <img
        src={`http://192.168.1.22:8000/storage/wahana/${img}`}
        alt={`${item.title}`}
        className="w-20 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-black"
      />
    </SwiperSlide>
  ) )}
</Swiper>
                          </>
                        )}
                      </div>
                      <p className="mt-4 text-gray-700">{item.description}</p>
                    </ModalContent>
                  </ModalBody>
                </Modal>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Card;
