import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="w-full relative py-28 font-sans overflow-hidden">
      
      {/* Background Decorative Gradient/Glow (Consistent with rest of app) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] -left-[5%] w-[40rem] h-[40rem] rounded-full bg-blue-100/40 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[35rem] h-[35rem] rounded-full bg-indigo-100/30 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-600 tracking-tight uppercase mb-4 drop-shadow-sm">
            Resume
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
            Download my resume
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl shadow-blue-900/5 p-8 sm:p-12 border border-white/60 relative overflow-hidden">
          
          {/* Inner Decorative Glow */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

          {/* LEFT SIDE: Text and Actions */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/30">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Looking for a detailed overview of my skills, projects, and experience?
            </h3>
            
            <p className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-xl">
              Download my resume to explore my technical expertise, achievements, and work.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto">
              {/* Primary Download Button */}
              <a 
                href="/resume.pdf" 
                download 
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Resume
              </a>

              {/* Secondary View Button */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg border-2 border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Resume Preview Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:pr-10 perspective-1000 mt-10 lg:mt-0">
            <div className="relative w-full max-w-sm xl:max-w-md group cursor-pointer transition-all duration-700 hover:-translate-y-4 hover:rotate-1">
              
              {/* Floating Animation Wrapper */}
              <div 
                className="relative shadow-2xl rounded-2xl border-8 border-white bg-white w-full overflow-hidden" 
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                
                {/* Image Placeholder + Fallback handling */}
                <img 
                  src="/resume.png" 
                  alt="Resume Preview" 
                  className="w-full h-auto aspect-[1/1.4] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Placeholder Graphic (Hidden by default unless src fails) */}
                <div className="hidden flex-col items-center justify-center w-full aspect-[1/1.4] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-20 h-20 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <span className="font-extrabold text-2xl tracking-wider text-slate-500">RESUME</span>
                  <span className="mt-2 text-sm font-medium">Download to view details</span>
                </div>

                {/* Subtle dark overlay with 'View' badge on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 z-20 pointer-events-none">
                  <span className="bg-white/95 text-blue-800 px-6 py-2.5 rounded-full font-bold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-md border border-white/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Click to Open
                  </span>
                </div>

                {/* Absolute Link covering the image to act as a trigger */}
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="absolute inset-0 z-30 block">
                  <span className="sr-only">View Resume PDF</span>
                </a>
              </div>
            </div>
            
            {/* Inject Floating Animation Keyframes */}
            <style jsx="true">{`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
                100% { transform: translateY(0px); }
              }
            `}</style>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
