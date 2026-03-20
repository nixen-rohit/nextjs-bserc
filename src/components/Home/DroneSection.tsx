import Link from "next/link";
import { CheckCheck } from "lucide-react";

export default function DroneSection() {
  return (
    <section className="relative py-16">
      
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/img/drone1.png')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-white p-6 md:p-10">
            
            <h4 className="text-blue-500 uppercase font-bold tracking-wide mb-2">
              Advanced Drone Technology
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovative Bharat
            </h2>

            <p className="text-lg mb-3 text-gray-200">
              Advancing scientific discovery and delivering innovative solutions
              that help our nation keep moving forward.
            </p>

            <p className="mb-4 text-gray-300">
              Def-Space Drones provides formal drone education through
              structured workshops and certifications at grassroots levels,
              focusing on UAV fundamentals, assembly, safety, and mission
              planning.
            </p>

            {/* KEY MODULES */}
            <h5 className="mt-4 mb-3 font-semibold text-white">
              Key Modules:
            </h5>

            <ul className="space-y-3 text-gray-300 mb-4">
              {[
                "Drone basics, ready-made vs. build-your-own",
                "Skills in electronics and calibration",
                "Safety protocols & DroidPlanner for missions",
                "FPV piloting and custom design principles",
                "Future trends in AI autonomy and space applications",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCheck className="text-blue-500 w-5 h-5 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CARD */}
            <div className="mt-4 p-4 rounded-lg border border-white/30 bg-black/40 backdrop-blur-sm">
              <h5 className="text-yellow-400 font-semibold mb-1">E-VTOL</h5>
              <p className="text-sm text-gray-200">
                Step-By-Step Guide to Designing, Constructing and Flying your
                Very Own E-VTOL
              </p>
            </div>

            {/* BUTTON */}
            <Link
              href="https://forms.gle/BGaVE3hvx3Lmrqcz8"
              target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-full font-semibold mt-6 shadow-lg shadow-blue-500/20"
            >
              Apply Here
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}