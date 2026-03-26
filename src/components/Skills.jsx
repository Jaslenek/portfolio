import React from 'react';

const Skills = () => {
  const getSkillIcon = (skillName) => {
    const s = skillName.toLowerCase();
    
    // Database icons
    if (['sql', 'mysql', 'dbms'].includes(s)) {
      return <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
    }
    // Chart/Analysis icons
    if (['power bi', 'advanced excel', 'eda', 'plotly', 'seaborn'].includes(s)) {
      return <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
    }
    // Code/Web icons
    if (['html', 'css', 'javascript', 'flask', 'c++', 'java', 'c', 'python'].includes(s)) {
      return <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    }
    // ML / AI icons
    if (['machine learning', 'regression', 'svm', 'naive bayes', 'decision trees', 'model evaluation', 'regularization', 'scikit-learn'].includes(s)) {
      return <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    }
    // Math/Concepts
    if (['mathematics', 'statistics', 'pandas', 'numpy', 'dsa', 'oops'].includes(s)) {
      return <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
    }
    // System/Networks
    if (['operating systems', 'computer networks'].includes(s)) {
      return <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
    }
    // Cloud/DevOps icons
    if (['aws', 'docker', 'jenkins', 'apache tomcat', 'cloud computing'].includes(s)) {
      return <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
    }
    // Default fallback
    return <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      skills: ["C++", "Java", "C", "Python", "SQL", "HTML", "CSS", "JavaScript", "Flask"]
    },
    {
      title: "Data & Analytics Tools",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      skills: ["Power BI", "Advanced Excel", "MySQL"]
    },
    {
      title: "Computer Science Fundamentals",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      skills: ["DSA", "OOPs", "Operating Systems", "DBMS", "Computer Networks"]
    },
    {
      title: "Data Science Skills",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      skills: ["Mathematics", "Statistics", "EDA", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Seaborn"]
    },
    {
      title: "Machine Learning",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      skills: ["Regression", "Model Evaluation", "Regularization", "SVM", "Naive Bayes", "Decision Trees"]
    },
    {
      title: "Cloud & DevOps",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
      skills: ["AWS", "Docker", "Jenkins", "Apache Tomcat", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="w-full relative py-20 overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[5%] -right-[10%] w-[40rem] h-[40rem] rounded-full bg-blue-50 blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[35rem] h-[35rem] rounded-full bg-cyan-50 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight uppercase mb-6">Technical Skills</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Technologies and concepts I work with
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/50 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 w-full">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm rounded-lg px-4 py-2.5 hover:scale-105 hover:shadow-md hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 text-gray-800 font-bold group/skill"
                  >
                    <div className="group-hover/skill:scale-110 group-hover/skill:rotate-6 transition-transform duration-300">
                      {getSkillIcon(skill)}
                    </div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;