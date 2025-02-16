"use client";

import dynamic from 'next/dynamic';

// Import komponen secara dinamis untuk optimalisasi
 
const  Banner = dynamic(() => import('@/components/common/Group/Banner'));
const  _Group = dynamic(() => import('@/components/common/Group/_Group'));
const  Card = dynamic(() => import('@/components/common/Group/Card'));
 
const Whatsapp = dynamic(() => import('@/components/common/Whatsapp'));

function Wahana() {
 

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      
    >
       <Banner />
      <_Group/>
      <Card/>
      <Whatsapp />
     </div>
  );
}

export default Wahana;
