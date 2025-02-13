'use client';
import dynamic from 'next/dynamic';

// Import komponen secara dinamis untuk optimalisasi
 
const Banner = dynamic(() => import('@/components/common/Ticket/Banner'));
const Card = dynamic(() => import('@/components/common/Ticket/Card'));
const Whatsapp = dynamic(() => import('@/components/common/Whatsapp'));

export default function About() {
 

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-bottom transition-all"
    
    >
       <Banner />
      <Whatsapp />
      <Card />
     </div>
  );
}
