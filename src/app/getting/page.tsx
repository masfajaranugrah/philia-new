"use client";
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@/components/common/getting/Banner'));
const _Getting = dynamic(() => import('@/components/common/getting/_Getting'));
const Card = dynamic(() => import('@/components/common/getting/Card'));
const Whatsapp = dynamic(() => import('@/components/common/Whatsapp'));

function Page() {
   
  return (
    <div  >
 
    <Banner/>
    <_Getting/>
   <Card/>
   <Whatsapp/>
    
    </div>
  )
}

 

 export default Page