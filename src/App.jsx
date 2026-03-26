import Home from "./pages/Home";
import { Navbar, Footer } from "./components";

import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import Resume from "./components/resume";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-blue-50 to-blue-100 min-h-screen w-full">

      {/* Navbar */}
      <Navbar />

      {/* 3D Hero Section (Plane + Island) */}
      <Home />

      {/* Portfolio Sections */}
      <Intro />
      <Skills />
      <Projects />
      <Journey />
      <Certifications />
      <Resume />
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
};

export default App;