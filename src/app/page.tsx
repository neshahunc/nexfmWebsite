import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Building } from "@/components/sections/Building";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { Difference } from "@/components/sections/Difference";
import { Hero } from "@/components/sections/Hero";
import { Join } from "@/components/sections/Join";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ComingSoon />
        <Building />
        <Difference />
        <Join />
      </main>
      <Footer />
    </>
  );
}
