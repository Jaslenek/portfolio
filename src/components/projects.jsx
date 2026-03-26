import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Calories Burnt Predictor",
      description: "Architected a scalable machine learning pipeline leveraging feature engineering to accurately predict caloric expenditure from physical attributes.",
      highlight: "Achieved an exceptional R² score of 0.9988 through rigorous data modeling and hyperparameter optimization.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost"],
      github: "https://github.com/Jaslenek/call",
      demo: null,
      image: "/cal.png"
    },
    {
      title: "Olympic Data Analytics",
      description: "Engineered an interactive Power BI dashboard to streamline the EDA of historical Olympic data across 200+ countries.",
      highlight: "Transformed massive datasets into actionable performance trends and strategic metrics.",
      tech: ["Power BI", "DAX", "Excel"],
      github: null,
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7406191331355766784/",
      image: "/olympic.png"
    },
    {
      title: "District Data Analysis",
      description: "Conducted comprehensive EDA on large-scale MGNREGA datasets to extract meaningful socio-economic insights.",
      highlight: "Processed and modeled over 200,000 records to identify targeted district-level development trends.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Jaslenek/DistDataAnalysis",
      demo: null,
      placeholderBg: "bg-gradient-to-br from-blue-50 to-sky-100",
      icon: (
        <svg className="w-16 h-16 text-blue-500 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      )
    },
    {
      title: "Linux File Encryption",
      description: "Built a robust, multi-process file encryption system for Linux environments utilizing advanced IPC and concurrency patterns.",
      highlight: "Delivered high-throughput cryptographic operations and significant performance optimization for large files.",
      tech: ["C++", "Linux", "IPC"],
      github: "https://github.com/Jaslenek/fed",
      demo: null,
      placeholderBg: "bg-gradient-to-br from-gray-800 to-black",
      icon: (
        <svg className="w-16 h-16 text-gray-400 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="w-full relative py-28 overflow-hidden font-sans">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[40rem] h-[40rem] rounded-full bg-cyan-100/40 blur-[100px]"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[35rem] h-[35rem] rounded-full bg-blue-100/40 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600 tracking-tight uppercase mb-6 drop-shadow-sm">Projects</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(34,211,238,0.4)]"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            A showcase of my top academic and personal projects demonstrating my expertise in Machine Learning, Data Analytics, and Software Engineering.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 lg:p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-blue-50 flex flex-col xl:flex-row gap-12 xl:gap-14"
            >
              {/* Image Container */}
              <div className="w-full xl:w-[45%] rounded-xl overflow-hidden h-80 sm:h-96 xl:h-auto min-h-[24rem] flex-shrink-0 relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                ) : project.placeholderBg ? (
                  <div className={`w-full h-full flex items-center justify-center ${project.placeholderBg} transition duration-300 group-hover:scale-105`}>
                    {project.icon}
                  </div>
                ) : null}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow justify-center py-2 xl:py-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-[1.05rem] leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.highlight && (
                    <div className="bg-blue-50/70 border-l-4 border-blue-500 py-2 px-4 rounded-r-lg mb-6 shadow-sm">
                      <p className="text-gray-800 text-base font-medium flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">❖</span>
                        <span><strong className="text-gray-900 uppercase text-xs tracking-wider mr-1.5 opacity-80">Highlight:</strong> {project.highlight}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-200/60 shadow-sm transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .08 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;