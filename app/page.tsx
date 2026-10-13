

import Footer from '@/src/Footer/Footer'
import PhotoAboutSection from '@/src/Intro/Aboutslide'
import HeroSection from '@/src/Intro/Heroslide'
import ClientGallery from '@/src/Intro/mainChoosuspage'
import PhotographyServicesSection from '@/src/Intro/Service'
import ExploreGallery from '@/src/Intro/SpreadPage'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
      <HeroSection/>
      <PhotoAboutSection/>
    </div>
  )
}

export default page
