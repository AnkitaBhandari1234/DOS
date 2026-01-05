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
<section className="bg-[#F5F6FA] py-24 px-14">
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <span className={`text-sm text-[#524DD3] ${quicksand.className} uppercase tracking-wider`}>
      Our Achievements
    </span>
    <h2 className={`text-4xl text-[#1E1B3C] mt-2 ${meriweather.className}`}>
      Numbers That Define Our Impact
    </h2>
    <p className={`text-[#4A4E6B] mt-4 ${roboto.className}`}>
      We are proud of our track record in transforming learners into industry-ready IT professionals.
    </p>
  </div>

  {/* Statistics Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
    {stats.map((item, i) => (
      <div key={i} className="flex flex-col items-center justify-center">
        <span className="text-[#524DD3] text-4xl mb-2">
          {item.icon}
        </span>
        <h3 className={`text-5xl font-bold text-[#1E1B3C] ${meriweather.className}`}>
          {item.number}+
        </h3>
        <p className={`text-[#4A4E6B] text-sm mt-2 ${roboto.className} uppercase tracking-wider`}>
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>



  )
}

export default StatsData