"use client"
import React from "react";
import { ChevronDown } from "lucide-react";

const Scrolldown = () => {
  return (
    <div className="h-[10vh] w-full bg-black">
       
      {/* Scroll Indicator */}
      <div
         
        className="pt-5 flex  flex-col items-center justify-center gap-2 text-white/70 transition-all duration-300 hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-xl uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce md:h-10 md:w-10" />
      </div>
      
      <div className="absolute bottom-0 left-0 z-20 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          
        />
      </div>
    </div>
  );
};

export default Scrolldown;
