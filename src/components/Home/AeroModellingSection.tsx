import Image from "next/image";
import Link from "next/link";

export default function AeroModellingSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT IMAGE / ANIMATION */}
          <div className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
            
            {/* If you want animation instead of image, replace below */}
            <Image
              src="/img/drone.jpg" // your image path
              alt="Aircraft Modelling"
              fill
              className="object-cover"
            />

            {/* OPTIONAL: overlay glow */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:pl-6">
            
            <h4 className="text-2xl text-yellow-400 uppercase font-bold tracking-wide mb-2">
              Aircraft Design Technology
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aero-Modelling
            </h2>

            <p className="text-gray-300 italic mb-3">
              "You will feel very prepared to go into a single-seat for the first
              time... the instructors will be excellent, and the simulators will
              help you prepare well."
            </p>

            <p className="text-gray-400 mb-6">
              A deep tech aircraft design education at grassroots levels,
              empowering students and rural innovators through concise modules
              on aerodynamics, performance, and stability.
            </p>

            {/* SECTIONS */}
            <div className="space-y-4">
              
              <div>
                <h6 className="text-yellow-400 font-semibold">
                  Design Essentials:
                </h6>
                <p className="text-sm text-gray-500">
                  Introduction to the design process, flight velocity, standard
                  atmosphere, aircraft anatomy, airfoil nomenclature,
                  lift/drag, aerodynamic centre.
                </p>
              </div>

              <div>
                <h6 className="text-yellow-400 font-semibold">
                  Performance & Forces:
                </h6>
                <p className="text-sm text-gray-500">
                  Wing geometry, external forces, minimum thrust/power required,
                  engine sizing, weight estimation, Range/endurance calculations.
                </p>
              </div>

              <div>
                <h6 className="text-yellow-400 font-semibold">
                  Stability Configurations:
                </h6>
                <p className="text-sm text-gray-500">
                  Flight equilibrium/stability, wing-alone vs. wing-tail setups,
                  flight demos, and special topics.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              href="#"
              className="inline-block mt-6 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition px-6 py-3 rounded-full font-semibold"
            >
              Apply Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}