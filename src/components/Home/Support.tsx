import Image from "next/image";

export default function Support() {
  return (
    <>
      {/* LOGO SECTION */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h5 className="uppercase text-gray-500 font-bold tracking-widest mb-6 text-xl">
            Supporting The Vision Of
          </h5>

          <div className="flex justify-center items-center flex-wrap gap-10 opacity-80">
            
            <div className="relative h-[60px] w-[120px] md:h-[80px] md:w-[160px]">
              <Image
                src="/img/bserc.png"
                alt="BSERC"
                fill
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>

            <div className="relative h-[60px] w-[120px] md:h-[80px] md:w-[160px]">
              <Image
                src="/img/logo.png"
                alt="Verified Partner"
                fill
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>

          </div>
        </div>
      </section>

      {/* MAIN BSERC SECTION */}
      <section className="w-full px-6 md:px-20 py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              BSERC
            </h2>

            <p className="text-gray-300 text-lg mb-4">
              Join us on an inspiring journey as we explore the vast
              mysteries of the cosmos.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              BSERC is a leading research center and space education platform
              that employs a multidisciplinary approach, integrating space
              science, computing, and technology. Our mission is to redefine
              the future of space exploration through innovation,
              collaboration, and education.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/20">
              Know More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[320px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent z-10" />

            <Image
              src="/img/research.png"
              alt="BSERC Lab"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </section>
    </>
  );
}