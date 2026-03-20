import Image from "next/image";
import Link from "next/link";

export default function GisSection() {
  return (
    <section className="relative py-16 bg-black text-white overflow-hidden">
      
      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/layers-earth.png')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white/10 p-6 rounded-full">
              
              <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/img/remote.jpg" // your image
                  alt="GIS"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:pl-6">
            
            <h4 className="text-green-400 uppercase font-bold tracking-wide mb-2">
              GIS and Remote Sensing
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mapping the Future
            </h2>

            <p className="text-gray-300 mb-2">
              Unlock the power of geospatial data and satellite imagery.
            </p>

            <p className="text-gray-500 mb-6">
              Learn how to analyze spatial data, interpret satellite imagery,
              and apply GIS tools for real-world solutions in agriculture,
              urban planning, and environmental monitoring.
            </p>

            <Link
              href="#"
              className="inline-block  bg-blue-500 hover:bg-blue-600 transition  px-6 py-3 rounded-full font-semibold"
            >
              Start Mapping
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}