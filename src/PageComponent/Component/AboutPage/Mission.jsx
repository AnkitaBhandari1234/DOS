import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import React from 'react'
import { AiOutlineEye, AiOutlineRocket } from 'react-icons/ai'
import { FiAward, FiBookOpen, FiHeart } from 'react-icons/fi';
import { LuTarget, LuUsers } from 'react-icons/lu';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});
const Mission = () => {
 const coreValue = [
    { 
      icon:<LuTarget />,

      title: "Excellence",
      desc: "We strive for the highest standards in Korean language education.",
     },
    {
      icon: <FiHeart />,
      title: "Dedication",
      desc: "Our instructors are passionate about student success.",
    },
    {
      icon: <MdOutlineRemoveRedEye />,
      title: "Innovation",
      desc: "Modern teaching methods with traditional values.",
    },
    {
       icon: <LuUsers />,
      
      title: "Community",
      desc: "Building a supportive learning environment for all.",
    },
  ];
  return (
<section className="bg-[#F7F4F0] py-24 px-14">
  {/* Heading */}
  <div className="text-center max-w-xl mx-auto mb-16">
     <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-7 py-2 w-fit tracking-wider `}
        >
          what we stand for
        </span>
    <h2 className={`text-4xl text-[#2B303B] mt-8 ${meriweather.className}`}>
      Our Core<span className='text-[#B12531]'> Values</span>
    </h2>
    <p className={`text-[#4A4E6A] mt-4 ${roboto.className}`}>
      At Clarity IT Institute, our vision and mission guide everything we do – from empowering learners to shaping the future of IT professionals.
    </p>
  </div>

  {/* Vision & Mission Cards */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center  max-w-6xl mx-auto">
    {
      coreValue.map((val,i)=>{
        return(
          <div className='bg-white px-5 py-10 flex flex-col gap-2 items-center rounded-2xl text-center' key={i}>
             <div className="bg-[#F3E3E1] px-5 py-4 rounded-[20px] h-fit w-fit ">
              <span className="  text-[#B12531] text-3xl">{val.icon}</span>
                </div>
             <h3 className={`text-[#2B303B] text-lg ${meriweather.className} mt-4 `}>{val.title}</h3>
            <p className={`text-[#676F7E] text-sm`}>{val.desc}</p>
            </div>
        )
      })
    }
  
  </div>
</section>


  )
}

export default Mission