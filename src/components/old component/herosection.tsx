import React from 'react';
import { Zap, ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[rgba(0,61,130,0.95)] to-[rgba(25,118,210,0.95)] py-24 px-6 text-center text-white md:py-32 md:px-8">
      
      {/* Background Glow Effect (replacing .hero-glow) */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          <Zap size={12} className="fill-yellow-400 text-yellow-400" />
          <span>National Space Day</span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            India's Def-Space Sector Revolution
          </span>
        </h1>

        {/* Tagline & Subtitle */}
        <p className="mb-2 text-xl font-semibold text-blue-100 md:text-2xl">
          Transforming India's Defence & Space Sector
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-base text-blue-200 md:text-lg">
          Advancing scientific innovation, Defence & Space literacy, and research excellence for Viksit Bharat 2047
        </p>

        {/* Buttons */}
        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-blue-900 transition-all hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95">
            Explore
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="group flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50 active:scale-95">
            <PlayCircle size={18} />
            Learn More
          </button>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-4">
          
          <div className="stat-item flex flex-col items-center">
            <span className="text-3xl font-bold text-white md:text-4xl">2047</span>
            <span className="mt-1 text-sm uppercase tracking-wider text-blue-200">Viksit Bharat Goal</span>
          </div>

          <div className="stat-item flex flex-col items-center border-l-0 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pt-0">
            <span className="text-xl font-bold text-white md:text-2xl">Chandrayaan-3</span>
            <span className="mt-1 text-sm uppercase tracking-wider text-blue-200">Moon Success</span>
          </div>

          <div className="stat-item flex flex-col items-center border-l-0 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pt-0">
            <span className="text-xl font-bold text-white md:text-2xl">23 Aug</span>
            <span className="mt-1 text-sm uppercase tracking-wider text-blue-200">National Space Day</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;