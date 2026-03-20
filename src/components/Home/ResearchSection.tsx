import Image from "next/image";

export default function ResearchSection() {
  return (
    <section className="h-full w-full px-6 md:px-20 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/img/bserc_building.png" // add your second image
            alt="BSERC Building"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Bharat Space Education <br />
            Research Centre
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
            The Bharat Space Education Research Centre (BSERC) functions as a
            distinguished Space Tutor, registered under iSTEM (Office of the
            Principal Scientific Adviser to the Government of India), while
            providing a specialised platform to advance education, research,
            and development within the defence and space domains.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">
            It maintains alignment with ISRO and iSTEM initiatives, and holds
            approvals from the Department of Food and Public Distribution,
            Ministry of Consumer Affairs, Government of India, and the Ministry
            of Home Affairs. Established to foster a strong and sustainable
            Defence and Space education ecosystem in India, BSERC focuses on
            equipping students and young professionals with industry-relevant
            skills, technical knowledge, and hands-on exposure required to
            succeed in the rapidly evolving Defence and Space sector.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full text-sm font-semibold">
            Know More About Us
          </button>
        </div>
      </div>
    </section>
  );
}