
import InfinitePhotoSlider from "@/src/Event/Photogallerytemplate"
import AboutUsWeddingPackageClient from "@/src/packagess/weddings/About"
import FashionTemplate from "@/src/packagess/weddings/intro"
import WeddingEvents from "@/src/packagess/weddings/Weddingevents"
import StarfieldCursor from "@/src/StarFieldCursor"


const WeddingPackageClient = () => {
  return (
 <>
 <div className="bg-black">
 
<FashionTemplate/>
<AboutUsWeddingPackageClient/>
<WeddingEvents/>
<InfinitePhotoSlider/>
</div>
</>
  
  )
}

export default WeddingPackageClient
