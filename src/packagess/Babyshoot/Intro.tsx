"use client";

export default function BabyIntro() {
  return (
    <main className="relative w-full h-screen overflow-hidden flex items-center bg-black">
      
      {/* Background with Water Wave Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://th.bing.com/th/id/R.ffa4aa11aedba1dc9992b07cec69feff?rik=M9aqq%2bM4JD3zlg&riu=http%3a%2f%2fjasmineleephotography.com%2fwp-content%2fuploads%2f2013%2f11%2findian_baby_shower_photography_07.jpg&ehk=yiT2IytavdcRqT%2fIN0bU%2be%2bNnyVUYE%2bMbZ2pNLRcd%2bc%3d&risl=&pid=ImgRaw&r=0"
          alt="Babyshower Background"
          className="w-full h-full object-cover animate-water-wave brightness-110 contrast-105"
        />
       
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center h-full">
        
        <div className="relative overflow-hidden animate-contentReveal">

          <h1 className="text-7xl md:text-7xl font-black text-orange-400 uppercase leading-none drop-shadow-lg">
            Babyshower 
          </h1>

          <p className="text-3xl md:text-5xl italic font-serif text-amber-200 mt-2 drop-shadow-md">
            Stories
          </p>

          <div className="absolute inset-0 bg-black z-20 animate-overlayReveal pointer-events-none" />

        </div>

      </div>

      {/* All CSS Animations (Water Wave & Reveal) */}
      <style jsx>{`
        /* Water Wave Background Animation */
        @keyframes waterWave {
          0% {
            transform: scale(1) translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: scale(1.06) translate(-10px, 12px) rotate(1deg);
          }
          66% {
            transform: scale(1.04) translate(12px, -8px) rotate(-1deg);
          }
          100% {
            transform: scale(1) translate(0px, 0px) rotate(0deg);
          }
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
            transform: translateX(0%);
          }
          100% {
            transform: translateX(101%);
          }
        }

        /* Animation Classes */
        .animate-water-wave {
          animation: waterWave 10s ease-in-out infinite;
        }

        .animate-contentReveal {
          animation: contentReveal 1.4s
            cubic-bezier(0.77, 0, 0.18, 1)
            forwards;
        }

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