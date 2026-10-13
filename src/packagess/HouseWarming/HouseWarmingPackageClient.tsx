import InfinitePhotoSlider from '@/src/Event/Photogallerytemplate'
import HousewarmingShoot from '@/src/packagess/HouseWarming/HoueWarmingShoot'
import HousewarmingGallery from '@/src/packagess/HouseWarming/HouseWarmingGallery'
import HousewarmingIntro from '@/src/packagess/HouseWarming/HouseWarmingIntro'
import StarfieldCursor from '@/src/StarFieldCursor'
import React from 'react'

const HouseWarmingPackageClient = () => {
  return (
    <>
    <div className='bg-black'>
     
    <HousewarmingIntro/>
    <HousewarmingGallery/>
    <HousewarmingShoot/>
    <InfinitePhotoSlider/>
    </div>
    </>
  )
}

export default HouseWarmingPackageClient
