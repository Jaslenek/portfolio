import { logo } from "../assets/images";

const Navbar = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navLinks = [
    { id: "intro", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "certifications", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4">

      {/* LOGO → scroll to top */}
      <img
        src={logo}
        alt="logo"
        className="w-14 h-14 object-contain cursor-pointer"
        onClick={() => scrollToSection("intro")}
      />

      {/* NAV LINKS */}
      <nav className="flex text-lg gap-7 font-medium">
        {navLinks.map((link) => (
          <p
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="cursor-pointer text-black hover:text-blue-600 capitalize"
          >
            {link.label}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;