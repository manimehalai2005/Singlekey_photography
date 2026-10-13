"use client";

export default function EngagementIntro() {
  return (
    <main className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex items-center">
      
      {/* Background with Water Wave Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://5.imimg.com/data5/XK/KQ/GLADMIN-49312316/wedding-backdrops-services-500x500.png"
          alt="Engagement Backdrop"
          className="w-full h-full object-cover brightness-150 contrast-110 animate-water-wave"
        />
       
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center h-full">
        <div className="relative overflow-hidden animate-contentReveal py-2">

          <h1 className="text-5xl md:text-7xl font-black text-amber-500 uppercase leading-none drop-shadow-md">
            Ring ceremony
          </h1>

          <p className="text-3xl md:text-5xl italic font-serif text-amber-200 mt-2 drop-shadow-sm">
            Stories
          </p>

          <div className="absolute inset-0 bg-black z-20 animate-overlayReveal pointer-events-none" />

        </div>
      </div>

      {/* All Animations (Water Wave & Reveal) */}
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
          animation: contentReveal 1.4s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }

        .animate-overlayReveal {
          animation: overlayReveal 1.2s cubic-bezier(0.77, 0, 0.18, 1) 0.2s forwards;
        }
      `}</style>

    </main>
  );
}