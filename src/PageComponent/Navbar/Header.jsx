import { Geist, Poppins, Quicksand, Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";

const quickSan= Quicksand({
  weight:'500',
  
  
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
      path: "/blogs",
      name: "Blogs",
    },
    {
      path: "/gallery",
      name: "Gallery",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];


  return (
    // <div className="bg-[#EEF2E6]   py-4 px-2    ">
    //   <div className="flex justify-between items-center w-11/12 m-auto text-[#000000]">
    //   {/*  */}
    //     <div className="flex items-center">
    //       <h1 className="text-3xl font-semibold">Tech</h1>
    //       <p className=" text-3xl">Spire</p>
    //     </div>
    //     {/*  */}
    //     <div className="flex items-center gap-14">
    //       <nav className={geistSans.className}>
    //         <ul className="text-[17px] text-[#000000] flex gap-8    ">
    //           {navlist.map((val, i) => {
    //             return (
    //               <Link href={val.path} key={i}>
    //                 <li className="hover:text-[#1C6758] ease-in-out">{val.name}</li>
    //               </Link>
    //             );
    //           })}
    //         </ul>
    //       </nav>
    //       <Link href='/contact'>
    //       <button className="bg-[#1C6758] text-white text-base font-medium px-9 py-3 rounded-full cursor-pointer    ">
    //         Start Learning
    //       </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <header className="  z-10 relative overflow-hidden   ">
      <div className=" fixed w-11/12  flex justify-between items-center bg-[#1b1933]/90 rounded-[50px] mx-12  my-4 py-3 px-7 shadow-[0px_2px_15px_rgba(0,0,0,0.1)]  ">
        <h1 className={`${quickSan.className} text-2xl text-[#ffffff]`}>Clarity</h1>
        <nav className="">
          <ul className="flex gap-10   ">
            {
              navlist.map((val,i)=>{
                return(
                  <Link href={val.path} key={i}>
                  <li className={`text-[15px] ${poppins.className} text-[#c8c6e3] hover:text-[#ffffff] transition-all duration-300 ease-in-out `}>{val.name}</li></Link>
                )
              })
            }
          </ul>
        </nav>
        <button className={`bg-[#524dd3] text-sm ${roboto.className} text-[#ffffff] py-2 px-5 rounded-full cursor-pointer hover:bg-[#524dd3]`}>
          Get Started
        </button>
      </div>

    </header>
    
  );
};

export default Header;
