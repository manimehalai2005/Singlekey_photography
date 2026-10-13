
import PhotographyAboutPage from "@/src/About/Aboutusintro";
import WhyChooseUsSection from "@/src/About/ChooseusSection";
import PhotographyPortfolioTemplate from "@/src/About/mainsecondsection";
import MissionVisionSection from "@/src/About/MissionVisionSection";
import WhatICaptureSection from "@/src/About/Thridsection";
import StarfieldCursor from "@/src/StarFieldCursor";


export default function Page() {
  return (
    <main className="relative min-h-screen bg-black">
      <StarfieldCursor />

      <PhotographyAboutPage />
      <PhotographyPortfolioTemplate />
      <WhatICaptureSection />
      <WhyChooseUsSection />
    </main>
  );
}
