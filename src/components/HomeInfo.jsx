import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const renderBox = (text, section, buttonText) => (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        {text}
      </p>

      <button
        onClick={() => scrollToSection(section)}
        className="neo-brutalism-white neo-btn flex items-center justify-center gap-2 mx-auto mt-2 w-full"
      >
        {buttonText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </button>
    </div>
  );

  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Jaslene</span>
        👋
        <br />
        Aspiring Data Scientist
      </h1>
    );

  if (currentStage === 2)
    return renderBox(
      "Explore my technical skills and tools",
      "skills",
      "View Skills"
    );

  if (currentStage === 3)
    return renderBox(
      "Check out my projects and work",
      "projects",
      "View Projects"
    );

  if (currentStage === 4)
    return renderBox(
      "Explore my experience and growth",
      "journey",
      "View Journey"
    );

  if (currentStage === 5)
    return renderBox(
      "View my certifications and courses",
      "certifications",
      "View Certifications"
    );

  if (currentStage === 6)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Download my resume
        </p>

        <a
          href="/resume.pdf"
          download="Jaslene_Kaur_Resume.pdf"
          className="neo-brutalism-white neo-btn flex items-center justify-center gap-2 mx-auto mt-2 w-full"
        >
          Download Resume
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </a>
      </div>
    );

  if (currentStage === 7)
    return renderBox(
      "Want to connect?",
      "contact",
      "Contact Me"
    );

  return null;
};

export default HomeInfo;