"use client";

export default function HousewarmingIntro() {
  return (
    <main className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e094d225355381.681b960a3fbff.jpg"
          alt="Housewarming"
          className="w-full h-full object-cover brightness-150 contrast-110 animate-waterWave"
        />
        {/* Overlay குறைக்கப்பட்டுள்ளது, இதனால் இமேஜ் மிக வெளிச்சமாகவும் பளபளப்பாகவும் தெரியும் */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center h-full">
        
        <div className="relative overflow-hidden animate-contentReveal py-2">

          <h1 className="text-5xl md:text-7xl font-black text-orange-300 uppercase leading-none drop-shadow-md">
            House warming
          </h1>

          <p className="text-3xl md:text-5xl italic font-serif text-amber-200 mt-2 drop-shadow-sm">
            Stories
          </p>

          <div className="absolute inset-0 bg-black animate-overlayReveal pointer-events-none" />

        </div>

      </div>
      <style jsx>{`
        /* Water wave / ripple background animation */
        @keyframes waterWave {
          0% {
            transform: scale(1) translateY(0) rotate(0deg);
          }
          25% {
            transform: scale(1.04) translateY(-8px) rotate(0.4deg);
          }
          50% {
            transform: scale(1.07) translateY(0) rotate(0deg);
          }
          75% {
            transform: scale(1.04) translateY(8px) rotate(-0.4deg);
          }
          100% {
            transform: scale(1) translateY(0) rotate(0deg);
          }
        }

        .animate-waterWave {
          animation: waterWave 9s ease-in-out infinite;
        }

        /* Content clip animation */
        @keyframes contentReveal {
          0% {
            clip-path: inset(0 100% 0 0);
          }

          100% {
            clip-path: inset(0 0 0 0);
          }
        }


        /* Black overlay moves left → right */
        @keyframes overlayReveal {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(101%);
          }
        }


        /* Content animation class */
        .animate-contentReveal {
          animation: contentReveal 1.4s
            cubic-bezier(0.77, 0, 0.18, 1)
            forwards;
        }


        /* Overlay animation class */
        .animate-overlayReveal {
          animation: overlayReveal 1.2s
            cubic-bezier(0.77, 0, 0.18, 1)
            0.2s
            forwards;
        }

      `}</style>

    </main>
  );
}