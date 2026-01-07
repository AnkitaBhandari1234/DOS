import GalleryFilter from '@/PageComponent/Component/GalleryPage/GalleryFilter'
import GalleryGrid from '@/PageComponent/Component/GalleryPage/GalleryGrid'

import CTA from '@/PageComponent/Home/CTA'
import Banner from '@/UI/Banner'

import React from 'react'


const page = () => {
 

  return (
    <div>
      <Banner
  title="Gallery &"
  highlight="Highlights"
  subtitle="Take a visual tour of DOS Multi Services Pvt. Ltd., its events, and the vibrant learning community that makes our institute special."
  label="Gallery"
  bgImage="/gallerybg.jpg"
/>
      <GalleryFilter/>
      <GalleryGrid/>
      <CTA/>
        


    </div>
  )
}

export default page