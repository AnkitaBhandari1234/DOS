import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const quicksand = Quicksand({
  weight: "700",
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
<section className='bg-[#F4F2ED] py-20 px-14 flex flex-col items-center'>
  
  {/* Heading */}
  <div className="text-center flex flex-col gap-4 items-center w-7/12">
     <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-7 py-2 w-fit tracking-wider `}
        >
          our team
        </span>

    <h1 className={`text-[#3D3029] text-4xl ${meriweather.className} mt-7`}>
      Meet the Experts Behind Our Success
    </h1>

    <p className={`text-[#4A4E6A] text-base ${roboto.className}`}>
      Industry professionals shaping the next generation of tech leaders.
    </p>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-3 place-items-center gap-y-15 mt-20 w-full  pb-10">
    {team.map((val, i) => (
      <div
        key={i}
        className="relative 
                   w-[330px] h-[400px]
                   rounded-xl
                   shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                   hover:shadow-[0_14px_40px_rgba(177,37,49,0.3)]
                   hover:-translate-y-2 transition-all duration-300"
      >
        <Image
          src={val.image}
          alt=''
          width={300}
          height={400}
          className='w-full h-full rounded-xl object-cover'
        />

        {/* text overlay */}
        <div className='absolute bottom-0 bg-[#F4F2ED]/10 backdrop-blur-2xl w-[300px] mx-4 px-4 py-4 rounded-sm my-4'>
          <h4 className={`${quicksand.className} text-lg mb-2 text-white`}>{val.name}</h4>
          <h5 className={`${roboto.className} text-sm text-[#FCFBF8]`}>{val.position}</h5>
        </div>
      </div>
    ))}
  </div>

</section>



  )
}

export default Team