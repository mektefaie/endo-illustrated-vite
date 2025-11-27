import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  // mouse effect in hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-22 px-4 sm:px-6 lg:px-8 overflow-hidden;">
      {/* mouse background effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.2), transparent 40%)`,
        }}
      />

      {/* two pulsating blobs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* hero content */}
      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            {/* introducing tag */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm sm:text-md text-pink-300 font-extralight tracking-widest">
                Illustrations by: Dr Mahmoud Ektefaie
              </span>
            </div>

            {/* hero h1 tag */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="tracking-wide bg-gradient-to-r from-white via-pink-100 to-pink-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Endodontics
              </span>
              <span className="tracking-wide bg-gradient-to-b from-pink-400 via-pink-400 to-pink-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Scientifically Illustrated
              </span>
              {/* <span className="bg-gradient-to-r from-white via-pink-100 to-pink-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                with Ei
              </span> */}
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Integrating scientific accuracy with artistic precision to
              visually communicate the principles, procedures, and techniques in
              endodontics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              {/* Solid Pink Button */}
              <button
                className="group w-full sm:w-auto min-w-[160px] h-12 sm:h-14 px-6 sm:px-8
               bg-pink-600 text-white rounded-full font-light tracking-wider text-sm sm:text-base
               flex items-center justify-center gap-2
               transition-colors duration-300
               hover:bg-pink-500"
              >
                <span>Hire the Artist</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Outline Pink Button */}
              <button
                className="group w-full sm:w-auto min-w-[160px] h-12 sm:h-14 px-6 sm:px-8
               bg-transparent text-pink-300 border border-pink-500/40
               rounded-full font-light tracking-wider text-sm sm:text-base
               flex items-center justify-center gap-2
               transition-colors duration-300
               hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-200"
              >
                <div className="p-2 rounded-full bg-pink-500/10 transition-colors duration-300 group-hover:bg-pink-500/20">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-120 duration-300" />
                </div>
                <span>Watch the Process</span>
              </button>
            </div>
          </div>

          {/* hero image container */}
          <div className="relative order-2 w-full">
            <div className="relative bg-pink-400/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-pink-500/20">
              <div className="bg-gradient-to-br backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-pink-500/10 flex items-center justify-center">
                <img
                  src="/hero-image.png"
                  alt="Human Jaw Sketch"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
