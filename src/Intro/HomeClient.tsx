import Footer from '@/src/Footer/Footer'
import PhotoAboutSection from '@/src/Intro/Aboutslide'
import HeroSection from '@/src/Intro/Heroslide'
import StarfieldCursor from '@/src/StarFieldCursor'

import React from 'react'

const HomeClient = () => {
  return (
    <div className='relative min-h-screen bg-black text-white'>
      
     
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCursor />
      </div>

      
      <div className="relative z-10 bg-transparent">
        <HeroSection />
        <PhotoAboutSection />
      </div>
      
    </div>
  )
}

export default HomeClient