import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { getTargetSectionFromUrl, scrollToSection } from "./utils/navigation";

export default function App() {
  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout> | undefined;
    let timer2: ReturnType<typeof setTimeout> | undefined;

    const targetSection = getTargetSectionFromUrl();
    if (targetSection && targetSection !== "home") {
      timer1 = setTimeout(() => scrollToSection(targetSection, false), 80);
      timer2 = setTimeout(() => scrollToSection(targetSection, false), 300);
    }

    const handlePopState = () => {
      const currentTarget = getTargetSectionFromUrl();
      if (currentTarget) {
        scrollToSection(currentTarget, false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      if (timer1) clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

