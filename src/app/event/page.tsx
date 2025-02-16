import dynamic from 'next/dynamic';

// Menggunakan dynamic import untuk komponen
const Banner = dynamic(() => import('@/components/common/Callender/Banner'));
const Card = dynamic(() => import('@/components/common/Callender/Card'));
const CalendarEvent = dynamic(() => import('@/components/common/Callender/CalendarEvent'));
const Whatsapp = dynamic(() => import('@/components/common/Whatsapp'));


function Calender() {
 

  
 
  return (
    <div  >
     <Banner/>
    <Whatsapp/>
    <CalendarEvent/>
    <Card/>

     </div>
  )
}

 

 export default Calender