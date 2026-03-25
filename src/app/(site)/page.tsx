import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black via-[#071a1f] to-black text-white flex flex-col justify-between">
      
      {/* Top Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        
        {/* Badge */}
        <span className="border border-cyan-500 text-cyan-400 px-4 py-1 rounded-full text-sm tracking-wide mb-6">
          NATIONAL SPACE DAY
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          India’s Def-Space <br />
          Sector Revolution
        </h1>

        {/* Subheading */}
        <p className="text-yellow-400 mt-4 font-semibold">
          Transforming India's Defence & Space Sector
        </p>

        {/* Description */}
        <p className="text-gray-300 mt-4 max-w-2xl">
          Advancing scientific innovation, Defence & Space literacy, and
          research excellence for Viksit Bharat 2047
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
            Explore
          </button>
          <button className="border border-yellow-600 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-600 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center border-t border-gray-800">
        
        <div className="py-10 bg-[#031317]">
          <h2 className="text-3xl font-semibold">2047</h2>
          <p className="text-sm text-gray-400 mt-2 tracking-widest">
            VIKSIT BHARAT GOAL
          </p>
        </div>

        <div className="py-10 bg-[#071a1f]">
          <h2 className="text-3xl font-semibold">Chandrayaan-3</h2>
          <p className="text-sm text-gray-400 mt-2 tracking-widest">
            MOON SUCCESS
          </p>
        </div>

        <div className="py-10 bg-[#1a0b0b]">
          <h2 className="text-3xl font-semibold">23 Aug</h2>
          <p className="text-sm text-gray-400 mt-2 tracking-widest">
            NATIONAL SPACE DAY
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;