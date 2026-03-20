import Image from "next/image";
import Link from "next/link";
 

export default function RoboticsSection() {
  return (
    <section className="py-16 bg-[#212529] text-white  ">
      <div className="max-w-7xl mx-auto px-6 md:px-20 ">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE (RIGHT on desktop) */}
          <div className="order-1 md:order-2 relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/ai_robotics.png"  
              alt="AI Robotics"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="order-2 md:order-1 md:pr-10 text-left md:text-right">
            
            <h4 className="text-xl text-cyan-400 uppercase font-bold tracking-wide mb-2">
              Advanced Robotics Designing
            </h4>

            <h3 className="text-lg font-light mb-1">
              Design & Build
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sensors & Actuators
            </h2>

            <p className="text-gray-400 mb-6">
              Enabling students to design robots via structured modules on
              sensors, actuators, navigation, and ROS.
            </p>

            {/* LIST */}
            <ul className="space-y-3 text-gray-300 mb-6">
              
              <li className="flex md:justify-end items-start gap-2">
                
                <span>
                  <strong>Fundamentals:</strong> Laws (Asimov's), types (arms,
                  bipeds, etc).
                </span>
              </li>

              <li className="flex md:justify-end items-start gap-2">
                 
                <span>
                  <strong>Sensors & Actuators:</strong> IMUs, encoders, cameras,
                  DC/Servo motors.
                </span>
              </li>

              <li className="flex md:justify-end items-start gap-2">
               
                <span>
                  <strong>Navigation:</strong> Path planning, SLAM, sensor
                  interfacing.
                </span>
              </li>

              <li className="flex md:justify-end items-start gap-2">
                
                <span>
                  <strong>Web & Project:</strong> ROS basics (nodes, topics),
                  Obstacle-avoiding robot build.
                </span>
              </li>

            </ul>

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