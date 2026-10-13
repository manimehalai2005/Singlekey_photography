"use client";

export default function PubertyIntro() {
  return (
    <main className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://c2.staticflickr.com/4/3422/3232124492_9abebcf0ce_b.jpg"
          alt="Puberty Celebration"
          className="w-full h-full object-cover brightness-150 contrast-110"
        />
       
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center h-full">
        
        <div className="relative overflow-hidden animate-contentReveal py-2">

          <h1 className="text-5xl md:text-7xl font-black text-orange-300 uppercase leading-none drop-shadow-md">
            Puberty celebration
          </h1>

          <p className="text-3xl md:text-5xl italic font-serif text-white mt-2 drop-shadow-sm">
            Stories
          </p>

          <div className="absolute inset-0 bg-black animate-overlayReveal pointer-events-none" />

        </div>

      </div>
      <style jsx>{`

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