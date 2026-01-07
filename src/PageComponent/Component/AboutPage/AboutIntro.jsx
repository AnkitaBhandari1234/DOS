import Image from 'next/image'
import React from 'react'
import LearningImage from '../../../../public/aimage4.jpg'
import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import { IoIosCheckmark } from 'react-icons/io';
const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});
const AboutIntro = () => {
  const  highlightPoints=[
        {
            name:"Hands-On Learning",
        },
        {
            name:"Expert Mentorship",
        },
    ]
  return (
    <section className='bg-[#F6F1EF] flex items-center justify-between gap-20 px-14 py-25'>
        {/* text section */}
        <div className='w-[50%] flex flex-col gap-3 '>
            <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-5 py-2 w-fit tracking-wide `}
        >
          our story
        </span>
            <h1 className={`text-[#3D3029] ${meriweather.className} text-[40px] leading-snug`}>Empowering Learners to Build Skills, Careers, and Confidence</h1>
            <p className={`text-[#4A4E6A]  ${roboto.className} leading-6`}>
                
                Clarity IT Institute is dedicated to transforming learners into confident,
industry-ready professionals through practical and structured IT education.
Our programs focus on real-world skills, hands-on projects, and expert mentorship
to help students thrive in today’s competitive technology landscape.</p>
       <p
  className={`${roboto.className} bg-[#EFE2DE] rounded-xl text-lg flex gap-4 items-start leading-7 text-[#676F7E] px-4 py-4`}
>
  {/* Vertical accent line */}
  <span className="h-20 w-1.5  bg-[#B12531] rounded-full"></span>

  {/* Paragraph text */}
  We don’t just teach technology — we prepare you for real challenges, real projects, and real career opportunities in the IT industry.
</p>


            </div>
            {/* image section */}
            <div className='w-[50%] mx-auto relative'>
                <Image src={LearningImage} alt='' width={500} height={500} className=' w-full h-[440px] object-cover rounded-3xl ' />
                <div className='flex flex-col gap-2 absolute bottom-5 left-5 '>
                {
                     highlightPoints.map((val,i)=>{
                        return(
                             <div key={i} className={` ${roboto.className} bg-[#B12531]/20  text-sm backdrop-blur-xl px-4 py-3  text-white rounded-3xl  flex gap-5 items-center `}>{val.name}
                    <IoIosCheckmark className='text-xl  bg-[#B12531] rounded-full' />

                </div>

                        )

                     })
                }
                </div>

               
                </div>

    </section>
  )
}

export default AboutIntro