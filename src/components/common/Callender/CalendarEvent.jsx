// "use client";

// import React, { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// const CalendarEvent = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [event, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("http://192.168.1.22:8000/api/events/");
//         if (!response.ok) {
//           throw new Error("Gagal mengambil data");
//         }
//         const data = await response.json();

//         const formattedEvents = data.map(event => ({
//           title: event.title,
//           start: event.start,
//           end: event.end || event.start,
//           location: event.location,
//           description: event.description,
//           className: event.className,
//           extendedProps: {
//             description: event.description || "Tidak ada deskripsi",
//             url: event.description.includes("http") ? event.description.match(/https?:\/\/[^\s]+/)[0] : null
//           },
//         }));

//         setEvents(formattedEvents);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleEventClick = (clickInfo) => {
//     const eventUrl = clickInfo.event.extendedProps.url;
//     if (eventUrl) {
//       window.open(eventUrl, "_blank");
//     } else {
//       setSelectedEvent({
//         title: clickInfo.event.title,
//         start: clickInfo.event.startStr,
//         end: clickInfo.event.endStr,
//         description: clickInfo.event.extendedProps.description,
//       });
//     }
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="container mx-auto min-h-screen p-4 md:p-6 flex bg-blur flex-col gap-6">
//         <div>
//         <h1 className="text-[20px] md:text-[40px] text-[#2D210A] lg:text-[40px] font-[1000] text-center">
//           Event Calendar
//         </h1>
//       </div>
//       <div className="rounded-xl shadow-lg bg-white p-3 md:p-4">
//         {loading ? (
//           <p className="text-gray-600">Loading events...</p>
//         ) : error ? (
//           <p className="text-red-600">Error: {error}</p>
//         ) : (
//           <FullCalendar
//             plugins={[dayGridPlugin]}
//             initialView="dayGridMonth"
//             events={events}
//             height="auto"
//             aspectRatio={1}
//             eventTextColor="white"
//             eventDisplay="block"
//             eventClick={handleEventClick}
//             eventContent={(info) => (
//               <div className="text-white bg-[#2D210A] !border-none border-transparent font-bold text-center p-1 rounded-md">{info.event.title}</div>
//             )}
//             headerToolbar={{
//               left: "prev,next",
//               center: "title",
//               right: "today",
//             }}
//           />
//         )}
//       </div>

//       {selectedEvent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[9999]">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-bold text-[#2D210A] mb-2">{selectedEvent.title}</h2>
//             <p className="text-gray-700">{selectedEvent.description}</p>
//             <p className="text-gray-600 mt-2">
//               {new Date(selectedEvent.start).toLocaleDateString()} - {selectedEvent.end ? new Date(selectedEvent.end).toLocaleDateString() : "Single Day"}
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}


//       {/* Event List */}
// <div className="rounded-xl shadow-lg bg-white p-4">
//   <h4 className="text-lg font-bold text-[#2D210A] mb-4">Event List</h4>
//   <div className="flex flex-col gap-4">
//     {events.length > 0 ? (
//       events.map((event, index) => {
//         const currentDate = new Date();
//         const eventEndDate = new Date(event.end || event.start); // Gunakan start jika tidak ada end
//         const isEventCompleted = eventEndDate < currentDate; // Cek apakah event telah selesai

//         return (
//           <div
//             key={index}
//             className="flex justify-between items-center border-b pb-2"
//           >
//             <div>
//             <p className="text-[18px] font-semibold text-[#2D210A]">
//   {new Date(event.start).toISOString().split("T")[0]} 
//   {event.end && new Date(event.start).toISOString().split("T")[0] !== new Date(event.end).toISOString().split("T")[0]
//     ? ` - ${new Date(event.end).toISOString().split("T")[0]}`
//     : ""}
// </p>


//               <p className="text-[15px] text-[#2D210A]">
//                 {event.title} <br />
//                 {event.location || "Unknown Location"}
//               </p>
//             </div>
//             <button
//               className={`px-4 py-2 text-[15px] rounded-[10px] text-white font-bold ${
//                 isEventCompleted ? 'bg-gray-500' : 'bg-[#2D210A]'
//               }`}
//             >
//               {isEventCompleted ? 'Selesai' : 'Berlangsung'}
//             </button>
//           </div>
//         );
//       })
//     ) : (
//       <p className="text-gray-600">No events available</p>
//     )}
//   </div>
// </div>

// {/* Contact Section */}
// <div className="rounded-xl shadow-lg bg-white p-6 text-center">
//   <p className="text-[40px] font-semibold text-[#2D210A]">
//     Book for  
//     <span className="text-[40px] font-extrabold text-[#2D210A]"> YOUR EVENT </span>
//     now!
//   </p>
//   <button className="px-6 py-4 my-10 text-[20px] font-medium text-white bg-[#2D210A] rounded-[20px] hover:bg-[#1E1708]">
//     Contact Us
//   </button>
// </div>

//     </div>
//   );
// };

// export default CalendarEvent;
"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://192.168.1.22:8000/api/events/");
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const data = await response.json();

        const formattedEvents = data.map(event => ({
          title: event.title,
          start: event.start,
          end: event.end || event.start,
          location: event.location,
          description: event.description,
          className: event.className,
          extendedProps: {
            description: event.description || "Tidak ada deskripsi",
            url: event.description.includes("http") ? event.description.match(/https?:\/\/[^\s]+/)[0] : null
          },
        }));

        setEvents(formattedEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description,
      url: clickInfo.event.extendedProps.url,
    });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto min-h-screen p-4 md:p-6 flex bg-blur flex-col gap-6">
      <h1 className="text-[20px] md:text-[40px] text-[#2D210A] lg:text-[40px] font-[1000] text-center">
        Event Calendar
      </h1>
      <div className="rounded-xl shadow-lg bg-white p-3 md:p-4">
        {loading ? (
          <p className="text-gray-600">Loading events...</p>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : (
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            aspectRatio={1}
            eventTextColor="white"
            eventDisplay="block"
            eventClick={handleEventClick}
            eventContent={(info) => (
              <div className="text-white bg-[#2D210A] !border-none border-transparent font-bold text-center p-1 rounded-md">
                {info.event.title}
              </div>
            )}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "today",
            }}
          />
        )}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[9999]">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-[#2D210A] mb-2">{selectedEvent.title}</h2>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <p className="text-[18px] font-semibold text-[#2D210A]">
    {new Date(selectedEvent.start).toISOString().split("T")[0]} 
    {selectedEvent.end && new Date(selectedEvent.start).toISOString().split("T")[0] !== new Date(selectedEvent.end).toISOString().split("T")[0]
     ? ` - ${new Date(selectedEvent.end).toISOString().split("T")[0]}`
     : ""}
  </p>
  <p className="text-[18px] font-semibold text-[#2D210A]">
  {new Date(selectedEvent.start).toLocaleTimeString("id-ID", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", hour12: false }) !== "00:00"
    ? new Date(selectedEvent.start).toLocaleTimeString("id-ID", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", hour12: false })
    : ""}
  
  {selectedEvent.end &&
    new Date(selectedEvent.end).toLocaleTimeString("id-ID", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", hour12: false }) !== "00:00"
    ? ` - ${new Date(selectedEvent.end).toLocaleTimeString("id-ID", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", hour12: false })}`
    : ""}
</p>


            {selectedEvent.url && (
              <a
                href={selectedEvent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-center"
              >
                Buka Link
              </a>
            )}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
     {/* Event List */}
  <div className="rounded-xl shadow-lg bg-white p-4">
    <h4 className="text-lg font-bold text-[#2D210A] mb-4">Event List</h4>
    <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
      {events.length > 0 ? (
        events.map((event, index) => {
          const currentDate = new Date();
          const eventEndDate = new Date(event.end || event.start);   
          const isEventCompleted = eventEndDate < currentDate;   

          return (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
              <p className="text-[18px] font-semibold text-[#2D210A]">
  {event.end && new Date(event.start).toISOString().split("T")[0] !== new Date(event.end).toISOString().split("T")[0]
    ? new Date(event.start).getMonth() === new Date(event.end).getMonth() && new Date(event.start).getFullYear() === new Date(event.end).getFullYear()
      ? `${new Intl.DateTimeFormat("id-ID", { day: "2-digit" }).format(new Date(event.start))} - ${new Intl.DateTimeFormat("id-ID", { day: "2-digit" }).format(new Date(event.end))} ${new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(new Date(event.end))}`
      : `${new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(event.start))} - ${new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(event.end))}`
    : `${new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(event.start))}`
  }
</p>



<p className="text-[18px] font-semibold text-[#2D210A]">
  {new Date(event.start).toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: true }) !== "12:00 AM"
    ? new Date(event.start).toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: true })
    : ""}

  {event.end &&
    new Date(event.end).toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: true }) !== "12:00 AM"
    ? ` - ${new Date(event.end).toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: true })}`
    : ""}
</p>

                <p className="text-[15px] text-[#2D210A]">
                  {event.title} <br />
                  {event.location || "Unknown Location"}
                </p>
              </div>
              <button
                className={`px-4 py-2 text-[15px] rounded-[10px] text-white font-bold ${
                  isEventCompleted ? 'bg-gray-500' : 'bg-[#2D210A]'
                }`}
              >
                {isEventCompleted ? 'Selesai' : 'Berlangsung'}
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-gray-600">No events available</p>
      )}
    </div>
  </div>


 {/* Contact Section */}
 <div className="rounded-xl shadow-lg bg-white p-6 text-center">
   <p className="text-[40px] font-semibold text-[#2D210A]">
     Book for  
     <span className="text-[40px] font-extrabold text-[#2D210A]"> YOUR EVENT </span>
     now!
   </p>
   <button className="px-6 py-4 my-10 text-[20px] font-medium text-white bg-[#2D210A] rounded-[20px] hover:bg-[#1E1708]">
     Contact Us
   </button>
 </div>

     </div>
   );
 };

export default CalendarEvent;
