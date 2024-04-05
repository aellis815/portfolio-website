import Image from "next/image";
import NavBar from "./component/NavBar";
import AboutMe from "./component/AboutMe";
import HeroArea from "./component/HeroArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#071952]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroArea />
        <AboutMe />
      </div>
    </main>
  );
}

