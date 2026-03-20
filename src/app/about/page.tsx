import React from "react";
import Image from "next/image";
const Page: React.FC = () => {
  return (
    <div className="h-screen w-full bg-red-500">

        <div>
        <Image
        height={500}
        width={500}
          src="/img/about-hero-v2.png"
          alt="BSERC Logo"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
       

      
    
    </div>
  );
};

export default Page;