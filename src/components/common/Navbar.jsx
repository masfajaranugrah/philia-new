"use client"; // Jika menggunakan App Router (Next.js 13+)

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:my-10 xl:my-10 lg:my-10 my-0  ">
    <nav
  className={`bg-green-900 top-0 xl:top-4 md:top-4 lg:top-4 mx-auto xl:w-[95%] text-white p-4 flex justify-between items-center xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-none shadow-lg transition-all duration-300 z-40 ${
    isScrolled ? "fixed top-0 left-0 right-0 bg-green-900 text-white p-4 shadow-lg z-40 transition-all duration-300" : "sticky top-4"
  }`}
>

        <div className="w-full  flex justify-between items-center max-w-screen-xl">
          <div className="flex items-center space-x-2">
            <img src="/images/banner/logo.png" alt="Logo" className="w-10 h-10" />
            <div className="text-sm hidden lg:block xl:block">
            <p className="text-[15px] font-bold">Senin-Minggu : 08:00 - 17:00</p>
            <p className="text-[15px] font-bold">Tutup : 19:00</p>
            </div>
          </div>

          <div className="text-sm block text-center font-bold md:hidden">
            <p className="text-[15px] font-bold">Senin-Minggu :08:00 - 17:00</p>
            <p className="text-[15px] font-bold">Tutup : 19:00</p>
          </div>

          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-[15px] font-bold">HOME</Link>
            <Link href="/about" className="text-[15px] font-bold">TENTANG KAMI</Link>
            <Link href="/getting" className="text-[15px] font-bold">KUNJUNGI</Link>
            <Link href="/wahana" className="text-[15px] font-bold">WAHANA </Link>
            <Link href="/tiket" className="text-[15px] font-bold">TIKET</Link>
            <Link href="/question" className="text-[15px] font-bold">PERTANYAAN</Link>
            <Link href="/event" className="text-[15px] font-bold">ACARA</Link>
            <Link href="/group" className="text-[15px] font-bold">GROUP</Link>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            ref={buttonRef}
            className="md:block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 right-0 left-0 mx-auto max-w-screen-md bg-green-900 text-center text-white p-4 shadow-lg rounded-lg lg:hidden z-[9999]"

          >
            <a href="/" className="  text-[15px]  block font-bold py-2">HOME</a>
            <a href="/about" className="  text-[15px]  block font-bold py-2">ABOUT</a>
            <a href="/getting" className="  text-[15px]  block font-bold py-2">KUNJUNGI</a>
            <a href="/wahana" className="  text-[15px]  block font-bold py-2">WAHANA</a>
            <a href="/tiket" className="  text-[15px]  block font-bold py-2">TIKET</a>
            <a href="/question" className="  text-[15px]  block font-bold py-2">PERTANYAAN</a>
            <a href="/event" className="  text-[15px]  block font-bold py-2">EVENT</a>
            <a href="/group" className="  text-[15px]  block font-bold py-2">GROUP</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
