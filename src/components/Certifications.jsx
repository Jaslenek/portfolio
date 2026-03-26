import React, { useState } from 'react';

const certificates = [
  { id: 1, title: "Computer Communications", platform: "Coursera", category: "Coursera", image: "/CompCom.png" },
  { id: 2, title: "Bits and Bytes of Computer Networking", platform: "Coursera", category: "Coursera", image: "/BitAndBytesComNet.png" },
  { id: 3, title: "Fundamentals of Network Communication", platform: "Coursera", category: "Coursera", image: "/FundOfNetCom.png" },
  { id: 4, title: "Packet Switching Networks", platform: "Coursera", category: "Coursera", image: "/PacketSwitch.png" },
  { id: 5, title: "Peer-to-Peer Protocols", platform: "Coursera", category: "Coursera", image: "/peertopeerLAN.png" },
  { id: 6, title: "Digital Systems", platform: "Coursera", category: "Coursera", image: "/DigSys.png" },
  { id: 7, title: "Intro to Hardware & OS", platform: "Coursera", category: "Coursera", image: "/IntroToHw&Os.png" },
  { id: 8, title: "Communication in Workplace", platform: "Coursera", category: "Coursera", image: "/commin21stcent.png" },
  { id: 9, title: "Data Structures & Algorithms", platform: "LPU", category: "University (LPU)", image: "/dsa.png" },
  { id: 10, title: "Object-Oriented Programming", platform: "LPU", category: "University (LPU)", image: "/OOPs.png" },
  { id: 11, title: "Java Programming", platform: "LPU", category: "University (LPU)", image: "/java.png" },
  { id: 12, title: "Java Application Development", platform: "LPU", category: "University (LPU)", image: "/JavaAppDev.png" },
  { id: 13, title: "Computational Theory", platform: "Infosys", category: "Industry", image: "/automata.png" },
  { id: 14, title: "Responsive Web Design", platform: "freeCodeCamp", category: "Other", image: "/ResWebDes.png" }
];

const categories = ["All", "Coursera", "University (LPU)", "Industry", "Other"];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = certificates.filter(cert => activeFilter === "All" || cert.category === activeFilter);

  return (
    <section id="certifications" className="w-full relative py-28 overflow-hidden font-sans">
      
      {/* Decorative Background */ }
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] -right-[5%] w-[40rem] h-[40rem] rounded-full bg-blue-100/40 blur-[120px]"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[35rem] h-[35rem] rounded-full bg-cyan-100/30 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600 tracking-tight uppercase mb-6 drop-shadow-sm">
            Certifications
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(34,211,238,0.4)]"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Courses and certifications I have completed to enhance my technical foundations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-sm ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-blue-500/40 scale-105"
                  : "bg-white/60 backdrop-blur text-gray-700 border border-blue-100 hover:bg-white hover:text-blue-600 hover:scale-105 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Image Preview Block */}
              <div className="w-full h-48 overflow-hidden bg-gray-100/50 flex items-center justify-center relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Expand Icon */}
                <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-blue-600 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                </div>
              </div>

              {/* Card Content Block */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {cert.platform}
                    </span>
                  </div>
                </div>
                
                {/* Verified Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Verified Completion
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 scale-100 opacity-100 border border-white/20"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            {/* Image Container */}
            <div className="w-full bg-gray-50 flex items-center justify-center min-h-[50vh] max-h-[80vh] overflow-auto p-4 sm:p-8">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full max-w-full h-auto object-contain rounded-xl shadow-md border border-gray-200/50"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="bg-white p-6 sm:px-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h3>
                <p className="text-blue-600 font-semibold mt-1">Issued by {selectedCert.platform}</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-5 py-2.5 rounded-full shadow-sm">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Verified
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;