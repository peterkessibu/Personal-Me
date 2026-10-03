import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProofBento from "@/components/ProofBento";
import Projects from "@/components/Projects";
import Tableball from "@/components/Tableball";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <ProofBento />
        <Projects />
        <Experience />
        <TechStack />
        <Tableball />
        <Footer />
      </main>
    </>
  );
}
