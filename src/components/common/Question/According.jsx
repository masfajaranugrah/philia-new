"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchFAQ } from "@/lib/fetchData"; 

const According = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   useEffect(() => {
     const getEvents = async () => {
       try {
         const data = await fetchFAQ();
         setQuestion(data);
       } catch (err) {
         setError(err.message);
       } finally {
         setLoading(false);
       }
     };
 
     getEvents();
   }, []);

  return (
    <div className="mt-20 relative">
      <div>
        <h1 className="text-[30px]  md:text-[40px] xl:text-[40px] font-[1000] text-[#2D210A] text-center mb-10">Apa yang ingin kamu tahu?</h1>
      </div>

      <div className="container mx-auto relative z-10 xl:pb-[80rem] md:pb-[40rem] pb-[30rem] lg:pb-[50rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[1rem]">
        {question.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {question.map((item, index) => (
              <motion.div
                key={item.id_question}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.0,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                <AccordionItem value={item.id_question.toString()}>
                  <AccordionTrigger className="text-[#2D210A]">{item.pertanyaan}</AccordionTrigger>
                  <AccordionContent>{item.jawaban}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        ) : (
          <div className="text-center text-xl font-semibold text-gray-600 mt-10">
            Question tidak ditemukan
          </div>
        )}
      </div>

      <div className="absolute -bottom-1 w-full">
        <img src="/images/01.png" alt="Gambar wahana" className="w-full h-full" />
      </div>
    </div>
  );
};

export default According;