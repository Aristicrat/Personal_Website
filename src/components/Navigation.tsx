"use client";

import { useState, useEffect } from "react";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navItems.map((item) => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo/Name */}
                <a
                    href="#"
                    className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
                >
                    RA
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeSection === item.href.slice(1)
                                    ? "text-primary-400 bg-primary-500/10"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="/Roger_Aristizabal_Resume.pdf"
                    download
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-gray-400 hover:text-white"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 mt-2">
                    <div className="px-6 py-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                    activeSection === item.href.slice(1)
                                        ? "text-primary-400 bg-primary-500/10"
                                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/Roger_Aristizabal_Resume.pdf"
                            download
                            className="flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
