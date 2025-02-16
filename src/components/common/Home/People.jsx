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
    title: "Charles Dickens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Jakarta",
  },
  {
    id: 2,
    title: "Jane Austen",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    location: "Bandung",
  },
  {
    id: 3,
    title: "Mark Twain",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    location: "Surabaya",
  },
  {
    id: 4,
    title: "Leo Tolstoy",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Jakarta Selatan",
  },
  {
    id: 5,
    title: "Emily Brontë",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    location: "Yogyakarta",
  },
];
