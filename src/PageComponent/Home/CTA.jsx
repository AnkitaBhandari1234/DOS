import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import React from 'react'
const quicksand = Quicksand({ weight: "600" });
const roboto = Roboto({ weight: "400" });
const meriweather = Merriweather({ weight: "700" });

const CTA = () => {
  return (
 <section className=" py-16 px-6 lg:px-14 flex justify-center relative">
  {/* CTA Box */}
  <div className="bg-[#26224A] rounded-3xl shadow-lg max-w-5xl w-full p-12 text-center">
    
    {/* Heading */}
    <h2 className={`${meriweather.className} text-white text-3xl lg:text-4xl font-bold`}>
      Take the Next Step in Your IT Career
    </h2>

    {/* Subheading */}
    <p className={`${quicksand.className} text-[#C8C6E3] mt-4 text-lg`}>
      Join our courses to gain practical skills, industry insights, and career guidance.  
      Our instructors are here to help you succeed.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
      <button className={`${roboto.className} bg-[#524DD3] text-white px-8 py-3 rounded-full hover:bg-[#4239b5] shadow transition`}>
        Explore Courses
      </button>
      <button className={`${roboto.className} bg-transparent border border-[#524DD3] text-[#524DD3] px-8 py-3 rounded-full hover:bg-[#524DD3] hover:text-white shadow transition`}>
        Contact Us
      </button>
    </div>

    {/* Optional Note */}
    <p className={`${quicksand.className} text-[#A9A6C3] text-sm mt-6`}>
      Start learning today and boost your career in IT.
    </p>
  </div>
</section>




  )
}

export default CTA