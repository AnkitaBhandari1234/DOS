import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import React from 'react'
import { AiOutlineEye, AiOutlineRocket } from 'react-icons/ai'
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
  return (
<section className="bg-[#221F3C] py-24 px-14">
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <span className={`text-sm text-[#524DD3] ${quicksand.className} uppercase tracking-wider`}>
      Our Values
    </span>
    <h2 className={`text-4xl text-white mt-2 ${meriweather.className}`}>
      Vision & Mission
    </h2>
    <p className={`text-[#C8C6E3] mt-4 ${roboto.className}`}>
      At Clarity IT Institute, our vision and mission guide everything we do – from empowering learners to shaping the future of IT professionals.
    </p>
  </div>

  {/* Vision & Mission Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    {/* Vision */}
    <div className="bg-[linear-gradient(#26224A,#1D1A34)] p-8 rounded-2xl shadow-md hover:shadow-[0_8px_35px_rgba(82,77,211,0.45)] transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[#524DD3]/20 text-[#524DD3] rounded-full text-2xl">
          {/* Eye icon for Vision */}
          <AiOutlineEye />
        </div>
        <h3 className={`text-xl font-semibold text-white ${quicksand.className}`}>Our Vision</h3>
      </div>
      <p className={`${roboto.className} text-[#C8C6E3]`}>
        To empower every learner with the skills, confidence, and mindset to thrive in the rapidly evolving IT industry and become future-ready professionals.
      </p>
    </div>

    {/* Mission */}
    <div className="bg-[linear-gradient(#26224A,#1D1A34)] p-8 rounded-2xl shadow-md hover:shadow-[0_8px_35px_rgba(82,77,211,0.45)] transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[#524DD3]/20 text-[#524DD3] rounded-full text-2xl">
          {/* Rocket icon for Mission */}
          <AiOutlineRocket />
        </div>
        <h3 className={`text-xl font-semibold text-white ${quicksand.className}`}>Our Mission</h3>
      </div>
      <p className={`${roboto.className} text-[#C8C6E3]`}>
        To deliver practical, hands-on IT education guided by experienced mentors, fostering real-world problem-solving, industry-relevant skills, and career success for all students.
      </p>
    </div>
  </div>
</section>


  )
}

export default Mission