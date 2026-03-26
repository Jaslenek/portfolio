import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-sky-100 py-20 px-6 sm:px-12 relative overflow-hidden font-sans">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40rem] h-[40rem] rounded-full bg-blue-200/40 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[35rem] h-[35rem] rounded-full bg-indigo-200/40 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Text and CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-600 tracking-tight leading-tight mb-6 drop-shadow-sm">
            Let's<br className="hidden lg:block"/> Connect
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-10 lg:mx-0 mx-auto"></div>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-xl leading-relaxed font-medium mb-12">
            I’m open to internships, collaborations, and opportunities in Data Science and Software Development.
            <br className="hidden sm:block mt-4" /> 
            <span className="mt-4 block font-extrabold text-gray-900 text-2xl">Feel free to reach out — I’d love to connect!</span>
          </p>

          <button 
            onClick={() => window.location.href = "mailto:jaslene2502@gmail.com"}
            className="group relative flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-extrabold text-xl lg:text-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-[1.03] transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
            <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            Hire Me
          </button>
        </div>

        {/* RIGHT COLUMN: Contact Cards */}
        <div className="flex flex-col gap-6 h-full justify-center">
          
          {/* Phone Card */}
          <a href="tel:+919877751979" className="group flex items-center gap-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl shadow-blue-900/5 hover:shadow-blue-500/15 p-6 sm:p-8 border border-white hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 w-full overflow-hidden">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shadow-inner group-hover:shadow-lg transition-colors duration-300 flex-shrink-0">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-sm font-extrabold text-gray-500 tracking-widest uppercase mb-1">Phone</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">+91 9877751979</h3>
            </div>
          </a>

          {/* Email Card */}
          <a href="mailto:jaslene2502@gmail.com" className="group flex items-center gap-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl shadow-blue-900/5 hover:shadow-indigo-500/15 p-6 sm:p-8 border border-white hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 w-full overflow-hidden">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center shadow-inner group-hover:shadow-lg transition-colors duration-300 flex-shrink-0">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-extrabold text-gray-500 tracking-widest uppercase mb-1">Email</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 truncate tracking-tight">jaslene2502@gmail.com</h3>
            </div>
          </a>

          {/* Socials Row */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* GitHub Card */}
            <a href="https://github.com/Jaslenek" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-4 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl shadow-blue-900/5 hover:shadow-gray-900/20 p-6 sm:p-8 border border-white hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 text-center w-full">
              <div className="w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl group-hover:bg-gray-900 group-hover:text-white flex items-center justify-center shadow-inner group-hover:shadow-lg transition-colors duration-300">
                <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .08 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
              </div>
              <p className="font-extrabold text-xl text-gray-900 tracking-tight">GitHub</p>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/jaslene-kaur-3b151328b/" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-4 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl shadow-blue-900/5 hover:shadow-blue-600/20 p-6 sm:p-8 border border-white hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 text-center w-full">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shadow-inner group-hover:shadow-lg transition-colors duration-300">
                <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </div>
              <p className="font-extrabold text-xl text-gray-900 tracking-tight">LinkedIn</p>
            </a>
          </div>

        </div>

      </div>

      <style jsx="true">{`
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;