import { Geist, Merriweather, Poppins, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const meriweather =Merriweather({
  weight:'700'
})
const roboto=Roboto({})

const poppins=Poppins({
  weight:'400'
})

const Header = () => {
 
  const navlist = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About Us",
    },
    {
      path: "/courses",
      name: "Courses",
    },
    {
      path: "/blogs",
      name: "Blogs",
    },
    {
      path: "/gallery",
      name: "Gallery",
    },
    {
      path: "/event",
      name: "Events",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];


  return (

<header className="z-99 relative">
  <div className="fixed w-11/12 flex justify-between items-center 
      bg-white/90 backdrop-blur-md rounded-full 
      mx-12 my-4 py-3 px-8 
      shadow-[0_6px_20px_rgba(0,0,0,0.08)]
      transition-all duration-300">

    {/* Logo */}
    <div className="flex gap-3 items-center pl-3">
      <Image 
        src="/Doslogo.webp" 
        alt="Logo" 
        width={120} 
        height={50} 
        className="h-10 w-auto object-contain"
      />
      <div>
        <h1 className={`${meriweather.className} text-[#2B303B] leading-5`}>DOS</h1>
        <p className="text-xs text-[#1F2937]">कोरिया मास्टर क्लास</p>
      </div>
    </div>

    {/* Nav Links */}
    <nav>
      <ul className="flex gap-10">
        {navlist.map((val, i) => (
          <Link href={val.path} key={i}>
            <li className={`text-[15px] ${poppins.className}
              text-[#1F2937] hover:text-[#B12531]
              transition-colors duration-300 cursor-pointer`}>
              {val.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>

    {/* CTA */}
    <button className={`bg-[#B12531] text-sm ${roboto.className} 
      text-white py-2.5 px-6 rounded-full cursor-pointer
      hover:bg-[#8F1F28]
      transition-all duration-300`}>
      Get Started
    </button>

  </div>
</header>







    
  );
};

export default Header;
