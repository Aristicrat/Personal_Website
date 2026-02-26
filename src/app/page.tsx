
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Education />
            <Leadership />
            <Skills />
            <Contact />
        </main>
    );
}
