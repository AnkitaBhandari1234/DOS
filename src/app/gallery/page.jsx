import GalleryFilter from '@/PageComponent/Component/GalleryPage/GalleryFilter'
import GalleryGrid from '@/PageComponent/Component/GalleryPage/GalleryGrid'
import GalleryHeader from '@/PageComponent/Component/GalleryPage/GalleryHeader'
import CTA from '@/PageComponent/Home/CTA'

import React from 'react'


const page = () => {
 

  return (
    <div>
      <GalleryHeader/>
      <GalleryFilter/>
      <GalleryGrid/>
      <CTA/>
        


    </div>
  )
}

export default page