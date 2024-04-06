import Image from "next/image";
import NavBar from "./component/NavBar";
import AboutMe from "./component/AboutMe";
import HeroArea from "./component/HeroArea";
import ProjectSection from "./component/ProjectSection";

const colors = "bg-[#252323]"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col 
    bg-[#070707]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroArea />
        <AboutMe />
        <ProjectSection />
      </div>
    </main>
  );
}

