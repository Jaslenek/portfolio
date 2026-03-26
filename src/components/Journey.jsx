import React from 'react';

const Journey = () => {
  const experiences = [
    {
      title: "Smart India Hackathon",
      organization: "SIH 2024",
      duration: "Sep 2024",
      bullets: [
        "Built interactive web app using gamification",
        "Designed user-friendly learning experience",
        "Focused on social impact and accessibility"
      ],
      image: "/sih.png",
      tags: ["Web App", "Gamification", "Social Impact"]
    },
    {
      title: "Code-a-Haunt Hackathon",
      organization: "Tech Society",
      duration: "Oct 2023",
      bullets: [
        "Developed rapid solutions under 24-hour time constraint",
        "Collaborated in a high-pressure environment",
        "Architected and deployed functional prototypes"
      ],
      image: "/cod.png",
      tags: ["Hackathon", "Teamwork", "Problem Solving"]
    },
    {
      title: "Community Development Project (NGO)",
      organization: "Local NGO",
      duration: "2023 - Present",
      bullets: [
        "Taught underprivileged children basic computer skills",
        "Organized community drives and welfare programs",
        "Dedicated over 100 hours to social development"
      ],
      image: "/cdp.png",
      tags: ["Teaching", "Social Work", "Community Impact"]
    },
    {
      title: "Summer Training – Java",
      organization: "Lovely Professional University",
      duration: "Jun 2025 – Jul 2025",
      bullets: [
        "Completed a 50-hour intensive Java training program",
        "Developed a Road Runner-style game using Java Swing",
        "Implemented core game logic, collision detection, and scoring"
      ],
      image: null,
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      tags: ["Java", "OOP", "Swing", "Game Dev"]
    }
  ];

  const Card = ({ exp, isLeft }) => (
    <div className={`w-full bg-white/60 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-[4px] border-l-blue-500 p-6 flex flex-col md:flex-row gap-5 items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Content */}
      <div className="flex-1 w-full text-left">
        <h3 className="text-[1.15rem] font-bold text-gray-900 leading-tight mb-1">
          {exp.title}
        </h3>
        <p className="text-[0.85rem] text-gray-500 font-medium mb-4">
          {exp.organization} <span className="mx-1">•</span> {exp.duration}
        </p>

        <ul className="text-gray-600 text-sm space-y-1.5 mb-5 ml-4 list-disc marker:text-blue-300 leading-relaxed font-medium">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image or Icon Container */}
      <div className="w-full md:w-44 h-48 md:h-52 shrink-0 rounded-lg overflow-hidden border border-white/60 bg-white/50 relative shadow-sm flex items-center justify-center group">
        {exp.image ? (
          <img 
            src={exp.image} 
            alt={exp.title} 
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          exp.icon
        )}
      </div>

    </div>
  );

  return (
    <section id="journey" className="w-full min-h-screen relative py-20 lg:py-28 overflow-hidden font-sans bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      
      {/* Blurred background circle */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 animate-[fadeIn_1s_ease-out]">
          <span className="text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-3">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            My Experience & Growth
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            A timeline of my technical, hackathons, and social impact journey
          </p>
        </div>

        <div className="relative w-full">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>

          <div className="space-y-12 relative w-full">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className="relative flex flex-col md:flex-row items-center justify-center w-full group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center w-4 h-4 rounded-full bg-white border-[4px] border-blue-500 shadow-md z-30">
                  </div>

                  {/* Desktop Layout - Left Side (Card or Empty) */}
                  <div className={`hidden md:flex w-1/2 relative ${isLeft ? 'justify-end pr-6' : 'opacity-0 pointer-events-none'}`}>
                    {isLeft && (
                      <Card exp={exp} isLeft={true} />
                    )}
                  </div>

                  {/* Desktop Layout - Right Side (Card or Empty) */}
                  <div className={`hidden md:flex w-1/2 relative ${!isLeft ? 'justify-start pl-6' : 'opacity-0 pointer-events-none'}`}>
                    {!isLeft && (
                      <Card exp={exp} isLeft={false} />
                    )}
                  </div>

                  {/* Mobile Stacked Layout (Card always visible) */}
                  <div className="flex md:hidden w-full">
                    <Card exp={exp} isLeft={false} />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Journey;
