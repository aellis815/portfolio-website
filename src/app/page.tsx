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

    <main className="flex min-h-screen flex-col bg-[#070707]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroArea />
        <SectionBuffer id="aboutme"/>
        <AboutMe />
        <SectionBuffer id="skills"/>
        <Skills />
        <SectionBuffer id="projects"/>
        <ProjectSection />
        <SectionBuffer id="contact"/>
        <EmailSection />
        <Footer />
        <SectionBuffer id="null"/>
      </div>
    </main>

  );
}

