"use client";

import dynamic from 'next/dynamic';

// Import komponen secara dinamis untuk optimalisasi
 
const  Banner = dynamic(() => import('@/components/common/Wahana/Banner'));
const Maps = dynamic(() => import('@/components/common/Maps'));
const  Card = dynamic(() => import('@/components/common/Wahana/Cards'), {ssr: false});
const Whatsapp = dynamic(() => import('@/components/common/Whatsapp'));

function Wahana() {
 

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      
    >
       <Banner />
      <Maps />
      <Card />
      <Whatsapp />
     </div>
  );
}

export default Wahana;
