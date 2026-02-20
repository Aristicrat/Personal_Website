
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
        <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
            {/* Hero Section - minimal, bold, centered */}
            <section className="border-b border-neutral-900">
                <Hero />
            </section>

            {/* About Section - large type, max-w-3xl, centered */}
            <section className="py-24 border-b border-neutral-900 flex justify-center">
                <div className="w-full max-w-3xl">
                    <About />
                </div>
            </section>

            {/* Experience Section - grid, bold headings */}
            <section className="py-24 border-b border-neutral-900 flex justify-center">
                <div className="w-full max-w-5xl">
                    <Experience />
                </div>
            </section>

            {/* Projects Section - grid, minimal cards */}
            <section className="py-24 border-b border-neutral-900 flex justify-center">
                <div className="w-full max-w-5xl">
                    <Projects />
                </div>
            </section>

            {/* Skills, Education, Leadership - 3-column grid on desktop */}
            <section className="py-24 border-b border-neutral-900 flex justify-center">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div><Skills /></div>
                    <div><Education /></div>
                    <div><Leadership /></div>
                </div>
            </section>

            {/* Contact Section - minimal, bold */}
            <section className="py-24 flex justify-center">
                <div className="w-full max-w-3xl">
                    <Contact />
                </div>
            </section>
        </main>
    );
}
