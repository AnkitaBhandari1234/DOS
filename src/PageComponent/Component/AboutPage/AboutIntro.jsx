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
    <section className='bg-[#221F3C] flex items-center justify-between gap-20 px-14 py-25'>
        {/* text section */}
        <div className='w-[50%] flex flex-col gap-3 '>
            <span className={`bg-[#524DD3] text-white ${quicksand.className} uppercase tracking-wider text-xs px-4 py-2 rounded-full w-fit`}>about us</span>
            <h1 className={`text-white ${meriweather.className} text-[40px] leading-snug`}>Empowering Learners to Build Skills, Careers, and Confidence</h1>
            <p className={`text-[#C8C6E3]  ${roboto.className} leading-6`}>
                
                Clarity IT Institute is dedicated to transforming learners into confident,
industry-ready professionals through practical and structured IT education.
Our programs focus on real-world skills, hands-on projects, and expert mentorship
to help students thrive in today’s competitive technology landscape.</p>
       <p
  className={`${roboto.className} bg-[#524DD3]/10 rounded-xl text-lg flex gap-4 items-start leading-7 text-white px-4 py-4`}
>
  {/* Vertical accent line */}
  <span className="h-20 w-1.5  bg-[linear-gradient(to_bottom,#524DD3,#6E69F0)] rounded-full"></span>

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
                             <div key={i} className={` ${roboto.className} bg-[#221F3C]/40  text-sm backdrop-blur-xl px-4 py-3  text-white rounded-3xl  flex gap-5 items-center `}>{val.name}
                    <IoIosCheckmark className='text-xl  bg-[#524DD3] rounded-full' />

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