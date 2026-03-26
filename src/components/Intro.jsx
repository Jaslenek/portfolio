import React from 'react';

const Intro = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="w-full relative pb-24 overflow-hidden text-gray-800 font-sans selection:bg-blue-200 selection:text-blue-900">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40rem] h-[40rem] rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[35rem] h-[35rem] rounded-full bg-sky-300/20 blur-3xl"></div>
      </div>

      {/* ================= A. HERO SECTION ================= */}
      <div className="min-h-[90vh] w-full flex flex-col justify-center pt-28 pb-16 relative">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24 flex-1">

          {/* LEFT CONTENT */}
          <div className="md:w-[55%] lg:w-[60%] flex flex-col items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight whitespace-nowrap drop-shadow-sm">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Jaslene Kaur</span>
            </h1>
            <p className="mt-5 text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold tracking-tight">
              — aspiring Data Scientist
            </p>

            {/* Role Tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8">
              {['Data Scientist', 'ML Enthusiast', 'Problem Solver'].map((role, idx) => (
                <span
                  key={idx}
                  className="bg-white/60 backdrop-blur-md text-blue-800 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-sm border border-white/50 hover:shadow-md hover:-translate-y-1 hover:bg-white transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                View Projects
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white/80 backdrop-blur text-blue-600 border border-blue-200 px-10 py-4 rounded-2xl text-lg font-bold shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-[45%] lg:w-[40%] flex justify-center mt-12 md:mt-0 z-10 w-full">
            <div className="relative group perspective-1000 flex justify-center items-center w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[30rem] aspect-square shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-sky-300 blur-3xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] group-hover:scale-[1.03] transition-all duration-500">
                <img
                  src="/profile.jpeg"
                  alt="Jaslene"
                  className="w-full h-full object-cover scale-[1.7] -translate-y-[12%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollToSection('about')}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-900 mb-2">Discover</span>
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-4 opacity-50"><div className="border-t border-blue-200"></div></div>

      {/* ================= B. ABOUT ================= */}
      <div id="about" className="max-w-5xl mx-auto w-full px-6 sm:px-12 mt-20 text-center relative z-10 flex flex-col gap-6">
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium">
          I am a Computer Science student at Lovely Professional University with a strong focus on <span className="text-blue-700 font-bold">Data Science</span> and <span className="text-blue-700 font-bold">Machine Learning</span>. I enjoy turning complex data into actionable insights and building solutions that solve real-world problems.
        </p>
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium">
          Through hands-on projects, I have developed practical expertise in <span className="text-blue-700 font-bold">Python</span>, <span className="text-blue-700 font-bold">SQL</span>, and <span className="text-blue-700 font-bold">Power BI</span>. My experience spans across data analysis, machine learning, and data visualization, allowing me to bridge the gap between raw data and meaningful decision-making.
        </p>
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium">
          Beyond data-driven technologies, I have a solid foundation in core software engineering principles. I am well-versed in <span className="text-blue-700 font-bold">Data Structures & Algorithms</span> (DSA), <span className="text-blue-700 font-bold">OOP</span>, and <span className="text-blue-700 font-bold">Database Management</span>, along with a strong understanding of Operating Systems and Computer Networks. I am always eager to learn, build, and take on new technical challenges.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 opacity-50"><div className="border-t border-blue-200"></div></div>

      {/* ================= C. QUICK STATS ================= */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Featured Card */}
          <div className="lg:col-span-2 group bg-gradient-to-br from-blue-600 to-indigo-700 p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col justify-center relative overflow-hidden text-white border border-indigo-500/50">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white/10 group-hover:text-white/20 transition-colors duration-500 pointer-events-none">
               <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
             </div>
             <div className="relative z-10">
               <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-white">
                 <span className="text-3xl">🏆</span>
               </div>
               <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight tracking-tight">Smart India Hackathon</h3>
               <p className="text-blue-50 text-lg sm:text-xl leading-relaxed max-w-xl">Participated and shortlisted at the university level, demonstrating strong problem-solving capabilities and effective teamwork.</p>
             </div>
          </div>

          {/* Stacked Right Columns (Row 1 span) */}
          {/* CGPA Card */}
          <div className="lg:col-span-1 group bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col justify-center border border-white">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-white">
              <span className="text-3xl">📊</span>
            </div>
            <div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 font-extrabold text-5xl sm:text-6xl mb-2 tracking-tight">9.0</h3>
              <p className="text-gray-900 font-extrabold text-xl mb-1 uppercase tracking-wide">CGPA</p>
              <p className="text-gray-600 font-medium leading-snug">Consistent academic performance and excellence.</p>
            </div>
          </div>

          {/* LeetCode Card */}
          <div className="lg:col-span-1 group bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col justify-center border border-white">
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-white">
              <span className="text-3xl">💻</span>
            </div>
            <div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 font-extrabold text-5xl sm:text-6xl mb-2 tracking-tight">150+</h3>
              <p className="text-gray-900 font-extrabold text-xl mb-1 capitalize tracking-wide">LeetCode</p>
              <p className="text-gray-600 font-medium leading-snug">Problems solved, strengthening DSA logic and skills.</p>
            </div>
          </div>

          {/* Full-width Category Card */}
          <div className="lg:col-span-2 group bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-white flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-10 text-center sm:text-left">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border border-blue-200">
              <span className="text-4xl text-blue-600">🚀</span>
            </div>
            <div>
              <h3 className="text-gray-900 font-extrabold text-3xl sm:text-4xl mb-2 tracking-tight">Machine Learning</h3>
              <p className="text-gray-600 text-lg sm:text-xl font-medium max-w-xl">Deep focus on Data Science, predictive modeling, and analyzing robust data pipelines.</p>
            </div>
          </div>

        </div>

        {/* Subdued Achievements (Natural Extension of Stats) */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full px-4">
          {[
            { icon: "🏅", text: "Dean’s List", sub: "(Top 10%)", hoverColor: "group-hover:text-blue-700", subColor: "text-blue-600/70", borderColor: "border-blue-100/80", shadowHover: "hover:shadow-blue-500/10" },
            { icon: "🥈", text: "1st Runner-Up", sub: "(SpeakUp Scenes)", hoverColor: "group-hover:text-indigo-700", subColor: "text-indigo-600/70", borderColor: "border-indigo-100/80", shadowHover: "hover:shadow-indigo-500/10" },
            { icon: "☁️", text: "Elite Category", sub: "(NPTEL Cloud Computing)", hoverColor: "group-hover:text-sky-700", subColor: "text-sky-600/70", borderColor: "border-sky-100/80", shadowHover: "hover:shadow-sky-500/10" }
          ].map((ach, idx) => (
            <div 
              key={idx} 
              className={`group flex items-center gap-3 bg-white/50 backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border ${ach.borderColor} shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] ${ach.shadowHover} hover:-translate-y-1 hover:bg-white/80 transition-all duration-300 cursor-default`}
            >
              <span className="text-xl sm:text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">{ach.icon}</span>
              <span className={`text-gray-800 font-bold text-[13px] sm:text-[15px] tracking-wide ${ach.hoverColor} transition-colors duration-300`}>
                {ach.text} <span className={`${ach.subColor} font-semibold ml-1`}>{ach.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 opacity-50"><div className="border-t border-blue-200"></div></div>

      {/* ================= D. WHAT I DO ================= */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 mt-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">What I Do</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              title: "Data Analysis & Visualization",
              desc: "Extract insights using Python, Pandas, Power BI.",
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            },
            {
              title: "Machine Learning",
              desc: "Build predictive models and optimize performance.",
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            },
            {
              title: "Problem Solving",
              desc: "Apply DSA and logical thinking effectively.",
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            },
            {
              title: "Backend / Systems",
              desc: "Work with C++, Linux, system-level programming.",
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl hover:shadow-blue-500/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-white">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight">{item.title}</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 opacity-50"><div className="border-t border-blue-200"></div></div>

      {/* ================= E. FEATURED SKILLS ================= */}
      <div className="w-full relative z-10 pt-16 pb-12 mt-24 border-t border-blue-100/50">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 drop-shadow-sm">Core Skills</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 mx-auto rounded-full mb-12 shadow-[0_0_15px_rgba(56,189,248,0.4)]"></div>
          
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow duration-500">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { name: "Python", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
                { name: "Machine Learning", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
                { name: "AWS", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
                { name: "Docker", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
                { name: "SQL", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg> },
                { name: "Power BI", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
                { name: "DSA", icon: <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> }
              ].map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-3 bg-white/80 border border-blue-100 text-blue-900 px-6 py-3 rounded-full text-lg font-bold font-sans shadow-sm hover:shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-300 cursor-default"
                >
                  <span className="text-blue-600">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= F. CONTACT & RESUME STRIP ================= */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-12 mt-16 mb-24 relative z-10">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col xl:flex-row justify-between items-center gap-8 border border-white/20 relative overflow-hidden">
          {/* Decorative Glow inside Contact Card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          {/* LEFT: Phone & Email */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full xl:w-auto relative z-10">
            <a href="tel:+919877751979" className="group flex items-center gap-4 hover:text-blue-100 transition-colors duration-300">
              <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <span className="font-bold text-lg tracking-wide">+91 9877751979</span>
            </a>
            <div className="hidden sm:block w-px h-10 bg-white/30"></div>
            <a href="mailto:jaslene2502@gmail.com" className="group flex items-center gap-4 hover:text-blue-100 transition-colors duration-300">
              <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="font-bold text-lg tracking-wide">jaslene2502@gmail.com</span>
            </a>
          </div>

          {/* CENTER: Social Icons */}
          <div className="flex gap-6 relative z-10 w-full xl:w-auto justify-center">
            <a href="https://github.com/Jaslenek" target="_blank" rel="noreferrer" title="GitHub" className="p-3 bg-white/20 text-white rounded-full hover:bg-white hover:text-gray-900 shadow-inner hover:shadow-lg hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .08 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/jaslene-kaur-3b151328b/" target="_blank" rel="noreferrer" title="LinkedIn" className="p-3 bg-white/20 text-white rounded-full hover:bg-white hover:text-blue-700 shadow-inner hover:shadow-lg hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>

          {/* RIGHT: Download Button */}
          <div className="w-full xl:w-auto relative z-10 flex justify-center">
            <a href="/Jaslene_Resume.pdf" download className="bg-white text-blue-700 flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-extrabold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Intro;