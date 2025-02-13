"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const According = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://10.200.228.250:8000/api/question", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-20 relative">
      <div>
        <h1 className="text-[40px] font-[1000] text-[#2D210A] text-center mb-10">What do you need?</h1>
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