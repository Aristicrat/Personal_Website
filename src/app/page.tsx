import Hero from "@/components/redesign/Hero";
import Projects from "@/components/redesign/Projects";
import Experience from "@/components/redesign/Experience";
import Contact from "@/components/redesign/Contact";

export default function Home() {
    return (
        <main className="site-home">
            <Hero />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
