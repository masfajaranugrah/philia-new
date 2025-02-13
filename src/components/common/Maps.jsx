"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '../ui/animated-modal-img';

const Maps = () => {
  const [scale, setScale] = useState(1);

  const handleDoubleClick = () => {
    setScale(prevScale => (prevScale === 1 ? 2 : 1));
  };

  return (
    <motion.div 
      className='container xl:w-[95%] mx-auto flex my-10 flex-col justify-center items-center'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className='text-center'>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className=" text-center text-[30px] lg:text-[40px] text-[#2D210A] font-[Montserrat] font-[1000] my-10"
        >
          PETA PHILIA
        </motion.p>
      </div>
      
      <Modal className='flex justify-center items-center'>
        <ModalTrigger asChild>
          <motion.div 
            className='mx-2 border border-black hidden md:block lg:block xl:block  border-2 rounded-[14px] xl:rounded-[35px] md:rounded-[35px] lg:rounded-[35px] cursor-pointer'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src='/images/map.png' alt='maps' className='w-full h-80 sm:h-[60vh] xl:h-full lg:h-full md:h-full' />
          </motion.div>

          <motion.div 
            className='mx-2 border border-black border-2 md:hidden lg:hidden xl:hidden block rounded-[14px] xl:rounded-[35px] md:rounded-[35px] lg:rounded-[35px] cursor-pointer'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src='/images/kotak.png' alt='maps' className='w-full h-80 sm:h-[60vh] xl:h-full lg:h-full md:h-full' />
          </motion.div>
        </ModalTrigger>

        <ModalBody className='flex justify-center border-none bg-transparent items-center'>
          <ModalContent>
            <motion.img 
              src='/images/map.png' 
              alt='maps' 
              className='cursor-grab border my-20 border-gray-300 hidden md:block lg:block xl:block rounded-lg w-full h-full sm:w-[90vw] sm:h-[70vh]'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              drag="x" // Hanya bisa geser ke kiri dan kanan
              dragConstraints={{ left: -200, right: 200 }} // Batasi pergerakan horizontal
              onDoubleClick={handleDoubleClick} 
              animate={{ scale }}
            />
       
            <motion.img 
              src='/images/kotak.png' 
              alt='maps' 
              className='cursor-grab border my-20 block md:hidden lg:hidden xl:hidden border-gray-300 rounded-lg w-full sm:w-[90vw] sm:h-[70vh]'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              drag="x" // Hanya bisa geser ke kiri dan kanan
              dragConstraints={{ left: -200, right: 200 }} // Batasi pergerakan horizontal
              onDoubleClick={handleDoubleClick} 
              animate={{ scale }}
            />
          </ModalContent>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};

export default Maps;
