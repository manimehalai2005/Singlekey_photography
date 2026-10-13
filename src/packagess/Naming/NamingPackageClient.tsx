
import InfinitePhotoSlider from '@/src/Event/Photogallerytemplate'
import NamingCeremonyGallery from '@/src/packagess/Naming/NamingGallery'
import NamingIntro from '@/src/packagess/Naming/NamingIntro'
import NamingCeremonyShoot from '@/src/packagess/Naming/NamingShoot'
import StarfieldCursor from '@/src/StarFieldCursor'
import React from 'react'

const NamingPackageClient = () => {
  return (
   <>
   <div className='bg-black'>
  
   <NamingIntro/>
   <NamingCeremonyGallery/>
   <NamingCeremonyShoot/>
   <InfinitePhotoSlider/>
   </div>
   
   </>
  )
}

export default NamingPackageClient
