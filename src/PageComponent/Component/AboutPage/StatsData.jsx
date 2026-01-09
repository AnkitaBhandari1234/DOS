import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import React from 'react'
import { AiOutlineProject, AiOutlineTeam, AiOutlineTrophy, AiOutlineUser } from 'react-icons/ai';
const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});


const StatsData = () => {
   const stats = [
  {
    icon: <AiOutlineUser />,
    number: 500,
    title: "Graduates Placed",
  },
  {
    icon: <AiOutlineProject />,
    number: 120,
    title: "Real-World Projects",
  },
  {
    icon: <AiOutlineTeam/>,
    number: 50,
    title: "Expert Mentors",
  },
  {
    icon: <AiOutlineTrophy />,
    number: 10,
    title: "Years of Excellence",
  },
];

  return (
<section className="bg-[#2B303B] py-24 px-14 relative">
  <div className='absolute inset-0 opacity-10'>
    <div className=' absolute top-0  left-1/4 w-64 h-64 bg-[#B12631] blur-3xl '>hjj

    </div>
    <div className=' absolute bottom-0  right-1/4 w-48 h-48 bg-[#B12631] blur-3xl '>hjj

    </div>
    
    </div>
  
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-5 py-2 w-fit `}
        >
          our achievements
        </span>
    <h2 className={`text-4xl text-[#FCFBF8] mt-9 ${meriweather.className}`}>
      Numbers That Define Our Impact
    </h2>
    <p className={`text-[#BDBDB7] mt-4 ${roboto.className}`}>
      We are proud of our track record in transforming learners into industry-ready IT professionals.
    </p>
  </div>

  {/* Statistics Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center ">
    {stats.map((item, i) => (
      <div key={i} className="flex flex-col items-center justify-center group  cursor-pointer  ">
       <div
    className="
      text-[#B12531] text-4xl mb-7
      bg-[#B12531]/20 px-3 py-3 rounded-xl
      transition-all duration-300 ease-in-out
      group-hover:bg-[#B12531]
      group-hover:text-white
    "
  >
    {item.icon}
  </div>
        <h3 className={`text-4xl font-bold text-[#FCFBF8] ${meriweather.className} `}>
          {item.number}+
        </h3>
     
        <p className={`text-[#BDBDB7] text-sm mt-2 ${roboto.className} uppercase tracking-wider`}>
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>



  )
}

export default StatsData