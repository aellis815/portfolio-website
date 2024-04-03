import Image from "next/image";
import HeroArea from "./component/HeroArea";
import NavBar from "./component/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#071952]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroArea />
      </div>
    </main>
  );
}

