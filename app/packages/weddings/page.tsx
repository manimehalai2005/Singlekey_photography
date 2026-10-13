
import InfinitePhotoSlider from "@/src/Event/Photogallerytemplate"
import AboutUsPage from "@/src/packagess/weddings/About"
import FashionTemplate from "@/src/packagess/weddings/intro"
import WeddingEvents from "@/src/packagess/weddings/Weddingevents"
import StarfieldCursor from "@/src/StarFieldCursor"


const page = () => {
  return (
 <>
 <div className="bg-black">
 
<FashionTemplate/>
<AboutUsPage/>
<WeddingEvents/>
<InfinitePhotoSlider/>
</div>
</>
  
  )
}

export default page
