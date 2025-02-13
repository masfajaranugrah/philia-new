import dynamic from 'next/dynamic';

// Import komponen secara dinamis untuk optimalisasi
const According = dynamic(() => import('@/components/common/Question/According'));
const Banner = dynamic(() => import('@/components/common/Question/Banner'));
const Whatsapp = dynamic(() => import('@/components/common/Whatsapp'));
 
function Questoin() {
 

 
  return (
    <div >
     <Banner/>
    <According/>
    <Whatsapp/>
     </div>
  )
}

 

 export default Questoin