"use client";

import Image from "next/image";
import GlassSurface from "@/components/ui/GlassSurface";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 bg-neutral-950">
            <div className="w-full max-w-3xl flex flex-col items-center text-center gap-10">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-400 shadow-lg mb-2">
                    <Image
                        src="/profile.jpg"
                        alt="Roger Aristizabal"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white mb-2">
                    Roger Aristizabal
                </h1>
                <p className="text-xl md:text-2xl text-primary-400 font-heading font-semibold mb-2">
                    Data Analytics & Risk Modeling
                </p>
                <p className="text-lg md:text-xl text-neutral-300 max-w-xl mx-auto mb-2">
                    Mathematics graduate specializing in data analytics, financial modeling, and business intelligence. Experienced with PwC, Juilliard, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-primary-400 text-white font-bold font-heading text-lg shadow-lg hover:bg-primary-500 transition"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#experience"
                        className="px-8 py-3 rounded-full border-2 border-primary-400 text-primary-400 font-bold font-heading text-lg hover:bg-primary-400 hover:text-white transition"
                    >
                        View Experience
                    </a>
                    <a
                        href="/Resume_Aristizabal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full border-2 border-accent-400 text-accent-400 font-bold font-heading text-lg hover:bg-accent-400 hover:text-white transition flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
