import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const quicksand = Quicksand({
  weight: "600",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const Team = () => {
  const team=[
  {
    "name": "Aayush Shrestha",
    "position": "Frontend & UI Instructor",
    "image": "/team1.jpg"
  },
  {
    "name": "Rashmi Bhatta",
    "position": "UI/UX Designer",
    "image": "/team2.jpg"
  },
  {
    "name": "Prakash Thapa",
    "position": "Backend Developer (Node.js)",
    "image": "/team3.jpg"
  },
  {
    "name": "Anisha Koirala",
    "position": "Python & Data Science Trainer",
   "image": "/team5.jpg"
  },
  {
    "name": "Rojen Lama",
    "position": "Flutter & Mobile App Instructor",
   "image": "/team6.jpg"
  },
  {
    "name": "Suman Adhikari",
    "position": "Full Stack MERN Instructor",
  "image": "/team1.jpg"
  }
]

  return (
   <section>
  <div className="bg-[#1D1A34] py-20 px-14 flex flex-col items-center">
    
    {/* Heading */}
    <div className="text-center flex flex-col gap-4 items-center w-7/12">
      <span className="bg-[#524DD3] text-white text-sm rounded-full px-3 py-1">
        Our Team
      </span>

      <h1 className="text-white text-4xl">
        Meet the Experts Behind Our Success
      </h1>

      <p className="text-[#C8C6E3] text-base">
        Industry professionals shaping the next generation of tech leaders.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-3 place-items-center  gap-y-15 mt-20 w-full  pb-10  ">
      {team.map((val, i) => (
        <div
          key={i}
          className="relative 
          
             w-[330px] h-[430px]
             rounded-xl
          hover:shadow-[0_12px_40px_rgba(82,77,211,0.45)]
          hover:-translate-y-2 transition-all duration-300"
        >

        <Image src={val.image} alt='' width={300} height={400} className=' w-full h-full rounded-xl  object-cover'/>
        {/* text */}
        <div className='absolute bottom-0 bg-[#1D1A34]/40 backdrop-blur-2xl w-[300px] mx-4 px-4 py-4 rounded-sm my-4'>
          <h4 className={`${quicksand.className} text-lg mb-4`}>{val.name}</h4>
          <h5 className={`${roboto.className}  text-sm`}>{val.position}</h5>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

  )
}

export default Team