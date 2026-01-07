import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import React from 'react'
import EventCard from './EventCard';
const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const UpcomingEvents = ({events}) => {
  return (
    <section className='  py-20 flex flex-col items-center gap-3'>
      <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-5 py-2 w-fit `}
        >
          don't miss out
        </span>
         <h1 className={`${meriweather.className} mt-5 text-4xl text-[#3D3029]`}>
         Upcoming Events
        </h1>
        <p
          className={`${roboto.className} text-[#4A4E6A] text-base leading-5 `}
        >
          Join us for workshops, seminars, and networking opportunities that will enhance your learning journey.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 mt-10 max-w-6xl '>

        {
          events.map((event,i)=>{
            return(

              <EventCard key={i} {...event}/>
            )
          })
        }
        </div>
    </section>
  )
}

export default UpcomingEvents