 
// <!-- Vision / Mission / Goal -->

"use client";

 

// components/VisionMissionGoal.tsx
'use client';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const cardsData: CardData[] = [
  {
    title: 'OUR VISION',
    description:
      'Advance, sustain, and leverage education in space and defence, alongside defence and space technologies, computing, and innovation, to drive national development. This shall be achieved through the cultivation of cutting-edge research in space sciences, planetary exploration, and technological advancements.',
   imageUrl: '/img/education.png',
  },
  {
    title: 'OUR MISSION',
    description:
      'BSERC prioritises grassroots and Academic technology transfer through targeted programs for Students, Faculty, and Officials. These initiatives enhance knowledge, skills, and engagement in Defence and Space endeavours, fostering innovation and societal development.',
    imageUrl: '/img/research.png',
  },
  {
    title: 'OUR GOAL',
    description:
      'Launching satellites, Developing Space Tourism, or creating innovative technologies, and the innovation of defence technologies from Drones to Aircraft. Creating a ripple effect of knowledge and curiosity that transcends classrooms and reaches far beyond.',
    imageUrl: '/img/community.png',
  },
];

export default function VisionMissionGoal() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="relative p-8 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider text-center">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  {card.description}
                </p>
              </div>

              {/* Decorative Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent   rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}