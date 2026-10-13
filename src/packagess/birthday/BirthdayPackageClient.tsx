
import InfinitePhotoSlider from '@/src/Event/Photogallerytemplate'
import BirthdayGallery from '@/src/packagess/birthday/BirthdayGallery'
import BrithdayIntro from '@/src/packagess/birthday/birthdayIntro'
import BirthdayShoot from '@/src/packagess/birthday/Birthdayshoot'
import React from 'react'

const BirthdayPackageClient = () => {
  return (
   <>
   <div className='bg-black'>
   <BrithdayIntro/>
   <BirthdayGallery/>
   <BirthdayShoot/>
   <InfinitePhotoSlider/>
   </div>
   </>
  )
}

export default BirthdayPackageClient
