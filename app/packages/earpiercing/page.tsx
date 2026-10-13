import InfinitePhotoSlider from '@/src/Event/Photogallerytemplate'
import EarPiercingGallery from '@/src/packagess/EarPiercingCermony/EarpiercingGallery'
import EarpiercingIntro from '@/src/packagess/EarPiercingCermony/Earpiercingintro'
import EarPiercingShoot from '@/src/packagess/EarPiercingCermony/Earpiercingshoot'
import StarfieldCursor from '@/src/StarFieldCursor'
import React from 'react'

const page = () => {
  return (
   <>
   <div className='bg-black'>
   
   <EarpiercingIntro/>
   <EarPiercingGallery/>
   <EarPiercingShoot/>
   <InfinitePhotoSlider/>
   </div>
   </>
  )
}

export default page
