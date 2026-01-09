import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
const quicksand = Quicksand({ weight: "600" });
const roboto = Roboto({ weight: "500" });
const meriweather = Merriweather({ weight: "700" });

const CTA = () => {
  return (
 <section className="  bg-[#B12531] flex justify-center relative">
  {/* CTA Box */}
  <div className="   w-3xl p-16 text-center">
    
    {/* Heading */}
    <h2 className={`${meriweather.className} text-[#FCFBF8] text-3xl lg:text-5xl font-bold leading-snug`}>
      Your Path to Korean Fluency Starts Here
    </h2>

    {/* Subheading */}
    <p className={`${quicksand.className} text-[#EDCFD0] mt-4 text-lg`}>
     Learn, practice, and grow with expert-led Korean programs at DOS Korea Master Class
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
      <Link href='/courses' className={`${roboto.className} bg-[#FCFBF8] text-[#B12531] text-lg  px-8 py-3 rounded-full  shadow`}>
        Explore Courses
      </Link>
      <Link href='/contact' className={`${roboto.className} bg-[#FCFBF8]/10 backdrop-blur-sm border-2 border-[#D18388] text-[#FCFBF8] px-8 py-3 rounded-full hover:bg-[#FCFBF8]/20 hover:text-white shadow transition-all duration-300 ease-in-out`}>
        Contact Us
      </Link>
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