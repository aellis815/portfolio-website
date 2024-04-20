import Image from "next/image";
import NavBar from "./component/NavBar";
import AboutMe from "./component/AboutMe";
import HeroArea from "./component/HeroArea";
import ProjectSection from "./component/ProjectSection";
import Footer from "./component/Footer";
import EmailSection from "./component/EmailSection";
import Skills from "./component/SkillsSection";
import SectionBuffer from "./component/SectionBuffer";




export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#080808] leading-loose">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12 flex flex-col items-center">

        <HeroArea />
        <SectionBuffer id="aboutme" />
        <AboutMe />
        <SectionBuffer id="skills" />
        <Skills />
        <SectionBuffer id="projects" />
        <ProjectSection />
        <SectionBuffer id="contact" />
        <EmailSection />
        <Footer />
      </div>
    </main>

  );
}

