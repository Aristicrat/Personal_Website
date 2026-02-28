export interface ProjectItem {
    slug: string;
    name: string;
    description: string;
    meta: string;
    previewImage: string;
    demo: string;
    github: string;
    highlights: string[];
    stack: string[];
}

export const projects: ProjectItem[] = [
    {
        slug: "polycopy",
        name: "PolyCopy",
        description:
            "Full-stack Polymarket intelligence and trade-copy platform for real-time wallet tracking, leaderboard analytics, and copy-trade payload generation.",
        meta: "Data + Trading + Full Stack",
        previewImage: "https://image.thum.io/get/width/1200/noanimate/https://polycopy-client.vercel.app/",
        demo: "https://polycopy-client.vercel.app/",
        github: "https://github.com/aristicrat/polycopy",
        highlights: [
            "Streams live trades over WebSocket and computes trader performance windows.",
            "Supports copy-trade sizing logic and profile-level insight views.",
            "Uses Firebase-backed caching and snapshot storage for responsive analytics.",
        ],
        stack: ["React", "TypeScript", "Vite", "Tailwind", "Express", "WebSocket", "Firebase"],
    },
    {
        slug: "corno",
        name: "Corno",
        description:
            "Premium guitar and instrument tuning experience with real-time pitch detection, polished UX, and production-ready deployment.",
        meta: "Audio + Product + UX",
        previewImage: "https://image.thum.io/get/width/1200/noanimate/https://corno.vercel.app/",
        demo: "https://corno.vercel.app/",
        github: "https://github.com/aristicrat/Corno",
        highlights: [
            "Low-latency pitch analysis flow tuned for practical instrument use.",
            "Responsive visual feedback and interaction designed for focus.",
            "Cross-platform architecture with web-first release readiness.",
        ],
        stack: ["Next.js", "TypeScript", "React", "Tailwind", "Vercel"],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
