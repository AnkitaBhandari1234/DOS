import { Merriweather, Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const meriweather =Merriweather({
  weight:'700'
})
const roboto=Roboto({})

const poppins=Poppins({
  weight:'400'
})
const Footer = () => {
  return (
    <footer className="bg-[#2B303B] text-[#C8C6E3] pt-20">
      <div className="px-14 grid grid-cols-5 gap-20 pb-16">
        
        {/* Brand */}
        <div className="col-span-2 ">
          <div className="flex gap-3 items-center ">
               <Image 
                 src="/Doslogo.webp" 
                 alt="Logo" 
                 width={120} 
                 height={50} 
                 className="h-14 w-auto object-contain"
               />
               <div>
                 <h1 className={`${meriweather.className} text-lg tracking-wider text-[#FCFBF8] leading-6`}>DOS</h1>
                 <p className="text-xs  text-[#BDBDC0]">कोरिया मास्टर क्लास</p>
               </div>
             </div>
          <p className="text-sm  mt-6 leading-relaxed text-[#AFA7AA]">
            Your gateway to Korean language excellence. We provide comprehensive training programs designed to help you achieve fluency and succeed in your Korean language journey.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-semibold mb-4">Popular Courses</h3>
          <ul className="space-y-3 text-sm">
            <li>MERN Stack Development</li>
            <li>React & Next.js</li>
            <li>Python & Data Science</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-[#40444E] flex items-center justify-center hover:bg-[#B12531] hover:text-white transition-all">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#40444E] flex items-center justify-center hover:bg-[#B12531] hover:text-white transition-all">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#40444E] flex items-center justify-center hover:bg-[#B12531] hover:text-white transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} DOS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
