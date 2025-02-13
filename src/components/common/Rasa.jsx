import React, { useRef } from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "../ui/wobble-card";
import { ImSearch } from "react-icons/im";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Rasa() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className="relative xl:w-[95%] container mx-auto px-2"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center relative my-10"
      >
        <p className="  text-[30px] lg:text-[40px] text-[#2D210A] font-[Montserrat] text-center font-[1000]">
          RASAKAN KESERUANNYA!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <WobbleCard className="min-h-[300px]" backgroundImage="/images/rasa/01.png">
            <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white p-4">
              ATV
            </h2>
          </WobbleCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <WobbleCard className="min-h-[300px]" backgroundImage="/images/rasa/01.png">
            <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white p-4">
              Sky Bridge
            </h2>
          </WobbleCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" rounded rounded-[24px]  bg-[#2D210A]  row-span-2 lg:h-[100%] xl:h-[100%] md:h-[100%] h-[60%] bg-center bg-[#0A2D19] flex justify-center items-center lg:order-none order-last"
        >
           <WobbleCard
    containerClassName=" row-span-2 lg:h-[100%] xl:h-[100%] md:h-[100%] h-[60%] bg-center flex justify-center items-center lg:order-none order-last"
  >
    <div className="flex flex-col justify-center items-center">
      <ImSearch className="text-white lg:text-[100px] xl:text-[100px]  md:text-[100px]  text-[50px]  text-center " />
      <p className="mt-4 max-w-[26rem] text-center text-[20px] lg:text-[40px] xl:text-[40px] md:tex-[30px] font-bold text-neutral-200">
        Learn More
      </p>
    </div>
  </WobbleCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2 relative  "
        >
          <WobbleCard className="min-h-[300px]" backgroundImage="/images/rasa/03.png">
            <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white p-4">
              Cave Adventure
            </h2>
          </WobbleCard>
        </motion.div>
      </div>
    </div>
  );
}
