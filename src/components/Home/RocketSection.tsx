import Link from "next/link";

export default function RocketSection() {
  return (
    <section className="relative py-16">
      
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/astro3.jpg')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex justify-end">
          
          {/* RIGHT CONTENT BOX */}
          <div className="w-full md:w-2/3 text-white p-6 md:p-10 text-right">
            
            <h4 className="text-red-500 uppercase font-bold tracking-wide mb-2">
              Rocketry
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Rocket Science
            </h2>

            <p className="text-lg mb-3 text-gray-200">
              We propel grassroots innovators from concept to orbit, unlocking
              space access to improve life on Earth.
            </p>

            <p className="text-gray-400 mb-6">
              A deep-tech rocketry education guiding learners from idea to orbit
              through hands-on modules in physics, design, propulsion, and
              simulation.
            </p>

            {/* GRID FEATURES */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-left md:text-right">
              
              <div>
                <h6 className="text-red-500 font-semibold mb-1">
                  Fundamentals
                </h6>
                <p className="text-sm text-gray-500 leading-snug">
                  Goals, structure, history, Newton's laws, rocket equation.
                </p>
              </div>

              <div>
                <h6 className="text-red-500 font-semibold mb-1">
                  Propulsion
                </h6>
                <p className="text-sm text-gray-500 leading-snug">
                  Engines (solid, liquid, hybrid), thrust, mission parameters.
                </p>
              </div>

              <div>
                <h6 className="text-red-500 font-semibold mb-1">
                  Aerodynamics
                </h6>
                <p className="text-sm text-gray-500 leading-snug">
                  Forces, CG vs CP, stability margin, Tsiolkovsky equation.
                </p>
              </div>

              <div>
                <h6 className="text-red-500 font-semibold mb-1">
                  Assembly & Sim
                </h6>
                <p className="text-sm text-gray-500 leading-snug">
                  Recovery, hands-on assembly, OpenRocket simulation.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              href="#"
              className="inline-block bg-red-500 hover:bg-red-600 transition px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-500/20"
            >
              Apply Here
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}