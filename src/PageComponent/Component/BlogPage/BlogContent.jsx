import { Merriweather, Quicksand, Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { BiHeart } from 'react-icons/bi'

import { GoBookmark } from 'react-icons/go'
import { IoShareSocialOutline } from 'react-icons/io5'

const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });

const BlogContent = () => {
  const tags=["Korean Language", "Education", "Career", "K-Culture", "Learning Tips", "TOPIK"]

  
  return (
     <article className=" mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b-2 border-[#EFE2DE]">
          <div className='flex items-center gap-3'>
            <Image src='/person1.webp' width={300} height={400} alt='' className='w-14 h-14 rounded-full border border-[#B12531]'/>
            <div>
              <h2 className={`${merriweather.className} text-[#1D1A34] leading-5`}>DOS Education Team</h2>
              <span className={`${roboto.className} text-sm text-[#6E6B8F]`}>January 5,2026 . 12 min read</span>
            </div>
            </div>
            <div className="flex items-center gap-2">
             <span className='bg-[#EFE2DE]  rounded-full px-2 py-2'>

                <BiHeart className=" text-xl  text-[#B12531] " />
             </span>
             
              <span className='bg-[#EFE2DE]  rounded-full px-2 py-2'>

                <GoBookmark className="text-xl text-[#B12531]"  />
                </span>

             
             <span className='bg-[#EFE2DE]  rounded-full px-2 py-2'>

                <IoShareSocialOutline className="text-xl text-[#B12531]" />
                </span>

              
            </div>
          </div>

          {/* Article Body */}
        <div className="py-8 md:py-12">

  {/* Body Paragraphs */}
  <p className={`${roboto.className} text-[20px] text-gray-800`}>
    In today's interconnected world, speaking multiple languages isn't just a skill—it's a superpower. 
    Among the many languages gaining global prominence, Korean stands out as one of the most 
    rewarding to learn. At DOS Multi Service, we've helped thousands of students discover why 
    Korean language proficiency can transform their lives and careers.
  </p>

  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-4`}>
    Whether you're drawn to K-pop, K-dramas, Korean cuisine, or the booming Korean economy, 
    learning the language opens doors you never knew existed. Let's explore why Korean is 
    becoming the language of opportunity.
  </p>

  {/* Headings */}
  <h2 className={`${merriweather.className} text-2xl md:text-3xl font-bold mt-8`}>The Korean Economic Powerhouse</h2>

  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-6`}>
   South Korea ranks as the 10th largest economy in the world, home to global giants like Samsung, Hyundai, LG, and SK. These companies actively seek employees who can bridge cultural and linguistic gaps. With Korean language skills, you become invaluable in international business settings.
  </p>
  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-4`}>
   The demand for Korean speakers extends beyond Korean companies. International firms looking to enter the Korean market or partner with Korean businesses desperately need professionals who understand both the language and the culture.
  </p>

  {/* quote */}
  <div className="mt-8 pl-4 border-l-4 border-[#B12531] ">
    <p className={`${quicksand.className}  text-lg text-gray-700`}>언어는 문화의 열쇠입니다</p>
    <p className={`text-base   text-[#B12531] ${roboto.className} `}> Language is the key to culture</p>
  </div>

  <h2 className={`${merriweather.className} text-2xl md:text-3xl font-bold mt-8`}>The K-Wave: More Than Entertainment</h2>

  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-6`}>
    The Korean Wave, or Hallyu, has swept across the globe. BTS, BLACKPINK, and Squid Game are household names worldwide. But beyond entertainment, this cultural phenomenon creates real opportunities in tourism, translation, content creation, and cultural exchange.
  </p>
  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-4`}>
   Understanding Korean allows you to appreciate content in its original form, work in the entertainment industry, or even become a cultural ambassador bridging your home country with Korea.
  </p>

  <h3 className={`${merriweather.className} text-xl md:text-2xl  mt-8`}>Career Paths for Korean Speakers</h3>

  <ul className={`${roboto.className} text-base text-[#6E6B8F]  mt-5 flex flex-col gap-3`}>
    <li>Translation and Interpretation services</li>
    <li>International Business and Trade</li>
    <li>Tourism and Hospitality</li>
    <li>Teaching Korean as a Foreign Language</li>
    <li>Content Creation and Media</li>
    <li>Diplomatic and Government Services</li>
  </ul>

  <h2 className={`${merriweather.className} text-2xl md:text-3xl  mt-8`}>Why Choose DOS Multi Service?</h2>

  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-6`}>
   At DOS Multi Service Pvt. Ltd., we don't just teach Korean—we prepare you for success. Our comprehensive curriculum combines traditional language learning with practical business communication, cultural immersion, and career guidance.
  </p>
  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-4`}>
   Our experienced instructors, many of whom have lived and worked in Korea, bring authentic insights that textbooks simply cannot provide. We focus on real-world applications, ensuring you can use your Korean skills from day one.
  </p>

  <h2 className={`${merriweather.className} text-2xl md:text-3xl  mt-8`}>Your Journey Starts Today</h2>

  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-6`}>
    Whether you're a complete beginner curious about Hangul or an intermediate learner looking to achieve fluency, DOS Multi Service has a program for you. Our flexible class schedules, personalized attention, and proven methodology have helped students achieve their Korean language dreams.
  </p>
  <p className={`${roboto.className} text-lg text-[#6E6B8F] mt-4`}>
   Don't let another opportunity pass you by. The world is increasingly connected, and Korean language skills will set you apart in any field. Join our community of successful learners and discover what's possible when you invest in yourself.
  </p>

</div>


         

          {/* Tags */}
          <div className="flex flex-wrap gap-2 py-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#EFE2DE] text-[#B12531] hover:bg-[#B12531] hover:text-white transition-colors duration-300 ease-in-out rounded-full text-sm font-medium  cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
  )
}

export default BlogContent