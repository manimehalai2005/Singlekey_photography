
import BirthdayGallery from '@/src/packagess/birthday/BirthdayGallery'
import BrithdayIntro from '@/src/packagess/birthday/birthdayIntro'
import BirthdayShoot from '@/src/packagess/birthday/Birthdayshoot'
import React from 'react'

const page = () => {
  return (
   <>
   <div className='bg-black'>
   <BrithdayIntro/>
   <BirthdayGallery/>
   <BirthdayShoot/>
   </div>
   </>
  )
}

export default page
