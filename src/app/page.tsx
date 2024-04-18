import Image from "next/image";
import NavBar from "./component/NavBar";
import AboutMe from "./component/AboutMe";
import HeroArea from "./component/HeroArea";
import ProjectSection from "./component/ProjectSection";
import Footer from "./component/Footer";
import EmailSection from "./component/EmailSection";



export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#070707]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroArea />
        <div className="flex m-8" id="aboutme"></div>
        <AboutMe />
        <div className="flex m-8" id="projects"></div>
        <ProjectSection />
        <EmailSection />
        <Footer />
        <div className="flex m-8" id="projects"></div>
      </div>
    </main>

  );
}

