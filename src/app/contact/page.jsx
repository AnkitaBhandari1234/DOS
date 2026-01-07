
import React from 'react'

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import FormPage from '@/PageComponent/Component/ContactForm/Form';
import { Merriweather, Roboto } from 'next/font/google';
import CTA from '@/PageComponent/Home/CTA';
import Banner from '@/UI/Banner';

const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});


const page = () => {



  return (
 <section className="">

      
    <Banner
  title="Get in"
  highlight="Touch"
  subtitle="Have questions or want to enroll? We're here to guide you on your journey toward a successful career at DOS Multi Services Pvt. Ltd."
  label="Contact"
  bgImage="/contactheader.jpg"
/>


      {/* contact cards */}
   <div className="bg-[#F2F0ED] text-black px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12  ">

  {/* LEFT SIDE – DARK INFO CARDS */}
  <div className="flex flex-col gap-8">

    {/* Business Hours */}
    <div className={`bg-[#EFE2DE] border border-[#B12531] rounded-2xl p-8 ${roboto.className}`}>
      <div className="text-[#B12531] text-3xl mb-4">
        <FaClock />
      </div>
      <h3 className={`text-2xl font-semibold mb-3 text-[#3D3029] ${meriweather.className}`}>
        Business Hours
      </h3>
      <p className='text-[#6E6B8F]'>Sunday - Friday</p>
      <p className='text-[#6E6B8F]'>9:00 AM - 6:00 PM</p>
      <p className="mt-4 text-sm text-[#6E6B8F]">
        We usually respond within 24 hours.
      </p>
    </div>

    {/* Contact Information */}
    <div className={`bg-[#EFE2DE] border border-[#B12531] text-[#6E6B8F]  rounded-2xl p-8 ${roboto.className}`}>
      <h3 className={`text-2xl font-semibold mb-4 text-[#3D3029] ${meriweather.className}`}>
        Contact Information
      </h3>

      <p className="flex items-center gap-3 mb-3">
        <FaPhoneAlt className="text-[#B12531]" />
        +977 98XXXXXXXX
      </p>

      <p className="flex items-center gap-3 mb-3">
        <FaEnvelope className="text-[#B12531]" />
        info@itinstitute.com
      </p>

      <p className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-[#B12531]" />
        Kathmandu, Nepal
      </p>
    </div>

  </div>

  {/* RIGHT SIDE – FORM */}
  <div className="flex justify-center lg:justify-end">
    <FormPage /> 
  </div>

</div>
<CTA/>




    </section>
  )
}

export default page