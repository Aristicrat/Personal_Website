import GlassSurface from "./ui/GlassSurface";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    highlight?: string;
    github?: string;
    demo?: string;
}

const projects: Project[] = [
    {
        title: "PolyCopy",
        description:
            "PolyCopy is a full-stack Polymarket intelligence and trade-copy platform I built to monitor trader wallets in real time, surface leaderboard performance by period (today, weekly, monthly, all-time), and generate copy-trade order payloads with configurable sizing. The app combines a React + TypeScript frontend (Vite, Tailwind, Recharts) with an Express/WebSocket backend that streams live trades, computes trader analytics, supports Google OAuth session management, integrates wallet connectivity, and uses Firebase-backed snapshot storage/caching to keep leaderboard and profile insights fast and reliable.",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express.js", "WebSocket", "Firebase", "Google OAuth", "Recharts"],
        highlight: "Featured Product",
        github: "https://github.com/Rogeraristi/polycopy",
        demo: "https://polycopy-client.vercel.app/",
    },
    {
        title: "Corno",
        description:
            "Corno is a premium guitar and instrument tuning platform I built to deliver accurate real-time pitch detection, a calm iOS-inspired interface, and production-grade tuning workflows across web and iOS environments. The app combines a modern React + TypeScript frontend (Next.js, Tailwind) with low-latency audio analysis logic, responsive visual feedback for tuning precision, and deployment-ready architecture optimized for reliable performance, polished UX, and cross-platform release readiness.",
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
        highlight: "Featured Project",
        github: "https://github.com/Rogeraristi/Corno",
        demo: "https://corno.vercel.app/",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-gradient-to-b from-primary-500/10 via-transparent to-transparent">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-500/20 text-primary-300 border border-primary-500/40">
                        Featured Highlight
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    Live preview is interactive. Click and scroll directly in the frame.
                </p>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project) => (
                        <GlassSurface
                            key={project.title}
                            className="p-5 md:p-8 hover-glow group flex flex-col border border-primary-500/30 shadow-xl shadow-primary-900/10"
                            borderRadius={16}
                        >
                            <div className="flex-1">
                                {project.demo && (
                                    <div className="mb-6 rounded-xl border border-gray-700/70 bg-gradient-to-b from-gray-900/90 to-gray-950/90 p-3">
                                        <div className="flex items-center gap-2 mb-3 px-1">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                            <span className="text-[11px] text-gray-400 ml-2 truncate">{project.demo}</span>
                                        </div>
                                        <div
                                            className="block rounded-lg overflow-hidden border border-gray-700/70 bg-black"
                                            aria-label={`${project.title} live preview`}
                                        >
                                            <div className="relative aspect-[16/9]">
                                                <iframe
                                                    src={project.demo}
                                                    title={`${project.title} preview`}
                                                    loading="lazy"
                                                    className="w-full h-full"
                                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Project icon */}
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0 ml-4">
                                        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                </div>

                                {project.highlight && (
                                    <span className="inline-block px-2.5 py-1 rounded text-xs font-semibold bg-accent-500/20 text-accent-400 border border-accent-500/30 mb-4">
                                        {project.highlight}
                                    </span>
                                )}

                                <p className="text-gray-300/90 text-sm md:text-base leading-relaxed mb-5">{project.description}</p>
                                
                                {/* Project Links */}
                                {(project.github || project.demo) && (
                                    <div className="flex gap-3 mb-5">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-300 border border-gray-700 hover:border-primary-500/50 hover:text-primary-400 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-300 border border-gray-700 hover:border-accent-500/50 hover:text-accent-400 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/60">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 rounded text-xs font-medium bg-gray-800/90 text-gray-200 border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassSurface>
                    ))}
                </div>
            </div>
        </section>
    );
}
