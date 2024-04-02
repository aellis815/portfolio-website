import Image from "next/image";
import HeroArea from "./component/HeroArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto py-4 px-12">
      <HeroArea />
    </main>
  );
}

