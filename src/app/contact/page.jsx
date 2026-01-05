
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

const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});


const page = () => {



  return (
 <section className="">

      {/* ================= HEADER WITH BG IMAGE ================= */}
      <div
        className="relative h-lvh flex items-center "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
       <div className="bg-[#0F172A]/70  absolute inset-0 "></div>

        {/* Header Content */}
        <div className="absolute  px-20 pt-35 max-w-3xl text-white">
          <h1 className={`text-6xl font-bold leading-tight ${meriweather.className}`}>
            Let's Talk About Your Tech Dream
          </h1>
          <p className={`mt-4 text-[#D1CEF5] text-lg ${roboto.className}`}>
            What does your dream tech career look like? <br />
            Skilled and confident, industry-ready and future-proof — or
            something uniquely yours?
          </p>
        </div>
      </div>

      {/* ================= CONTACT INFO CARDS ================= */}
   <div className="bg-[#221F3C] text-black px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12  ">

  {/* LEFT SIDE – DARK INFO CARDS */}
  <div className="flex flex-col gap-8">

    {/* Business Hours */}
    <div className="bg-[#1D1A34] text-white border border-white/10 rounded-2xl p-8">
      <div className="text-[#524DD3] text-3xl mb-4">
        <FaClock />
      </div>
      <h3 className="text-xl font-semibold mb-3">
        Business Hours
      </h3>
      <p>Sunday - Friday</p>
      <p>9:00 AM - 6:00 PM</p>
      <p className="mt-4 text-sm text-gray-300">
        We usually respond within 24 hours.
      </p>
    </div>

    {/* Contact Information */}
    <div className="bg-[#1D1A34] text-white border border-white/10 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-4">
        Contact Information
      </h3>

      <p className="flex items-center gap-3 mb-3">
        <FaPhoneAlt className="text-[#524DD3]" />
        +977 98XXXXXXXX
      </p>

      <p className="flex items-center gap-3 mb-3">
        <FaEnvelope className="text-[#524DD3]" />
        info@itinstitute.com
      </p>

      <p className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-[#524DD3]" />
        Kathmandu, Nepal
      </p>
    </div>

  </div>

  {/* RIGHT SIDE – FORM */}
  <div className="flex justify-center lg:justify-end">
    <FormPage /> {/* your Send Message form component */}
  </div>

</div>
<CTA/>




    </section>
  )
}

export default page