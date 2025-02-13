"use client";

import React, { useEffect, useState, useRef } from "react";
 

import dynamic from "next/dynamic";
 
const Banner = dynamic(() => import("@/components/common/Banner"), {ssr: false,});
const What = dynamic(() => import("@/components/common/What"), {ssr: false,});
const Rasa = dynamic(() => import("@/components/common/Rasa"), {ssr: false,});
const Maps = dynamic(() => import("@/components/common/Maps"), {ssr: false,});
const People = dynamic(() => import("@/components/common/People"), {ssr: false,});
const Kunjungan = dynamic(() => import("@/components/common/Kunjungan"), {ssr: false,});
const Whatsapp = dynamic(() => import("@/components/common/Whatsapp"), {ssr: false,});
 

import { isTablet } from "react-device-detect";
import axios from "axios";

function Home() {
  const [ipAddress, setIpAddress] = useState("");
  const hasSentData = useRef(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Cek ukuran layar setelah komponen dimount
  useEffect(() => {
    setIsMobileDevice(window.innerWidth <= 768);
  }, []);

  // Mendapatkan alamat IP pengunjung
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIpAddress();
  }, []);

  const device = isMobileDevice ? "Mobile" : isTablet ? "Tablet" : "Desktop";

  // Mengirim data perangkat dan IP ke backend melalui API Route Next.js
  useEffect(() => {
    const sendDeviceData = async () => {
      if (ipAddress && !hasSentData.current) {
        try {
          await axios.post("/api/visitor", {
            device,
            ip_address: ipAddress,
          });
          hasSentData.current = true;
        } catch (error) {
          console.error("Error sending device data:", error); // Gunakan error di sini
        }
      }
    };
  
    sendDeviceData();
  }, [ipAddress, device]);
  

  return (
    <div className="min-h-screen bg-cover bg-no-repeat">
      <Banner />
      <What />
      <Rasa />
      <Maps />
      <People />
      <Kunjungan />
      <Whatsapp />
    </div>
  );
}

export default Home;
