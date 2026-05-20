import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/hero/Hero";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
