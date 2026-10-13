import InfinitePhotoSlider from '@/src/Event/Photogallerytemplate'
import EngagementGallery from '@/src/packagess/engagement/engagementGallery'
import EngagementShoot from '@/src/packagess/engagement/engagementshoot'
import EngagementIntro from '@/src/packagess/engagement/Intro'
import StarfieldCursor from '@/src/StarFieldCursor'
import React from 'react'

const page = () => {
  return (
   <>
   <div className='bg-black'>
   
   <EngagementIntro/>
   <EngagementGallery/>
   <EngagementShoot/>
   <InfinitePhotoSlider/>
   </div>
   
   </>
  )
}

export default page
