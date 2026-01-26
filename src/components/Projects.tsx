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
        title: "Entity Verification Pipeline Tools",
        description:
            "Built and optimized JavaScript and SQL-driven internal tools at Middesk to resolve edge cases in automated entity-verification pipelines, improving data accuracy across multi-state databases.",
        technologies: ["JavaScript", "SQL", "REST APIs"],
        highlight: "Reduced manual review workload",
        // github: "https://github.com/Rogeraristi/entity-verification", // Add when available
    },
    {
        title: "VBA Reinsurance Product Model",
        description:
            "Developed and maintained a VBA-based group reinsurance product model at PwC supporting financial projections for a $250M line of business.",
        technologies: ["Excel VBA", "Financial Modeling", "Risk Analysis"],
        highlight: "$250M line of business",
    },
    {
        title: "SQL Dashboard for Life Insurance",
        description:
            "Led a SQL-based dashboard project for a major life insurer at PwC, cutting manual reporting time by 35% and presenting findings in client meetings.",
        technologies: ["SQL", "AWS QuickSight", "Power BI", "Tableau"],
        highlight: "35% reduction in reporting time",
    },
    {
        title: "Juilliard Web Dashboards",
        description:
            "Built SQL queries and Python-based data pipelines to extract, clean, and integrate multi-source data into dynamic web dashboards, reducing manual data handling by 30%.",
        technologies: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
        highlight: "30% efficiency improvement",
    },
    {
        title: "FY24 Grants & Donations Tracker",
        description:
            "Designed Excel VBA dashboards at The Juilliard School to track FY24 grants and donations, improving reporting efficiency and guiding strategic fund allocation decisions.",
        technologies: ["Excel VBA", "Data Analytics", "Dashboard Design"],
        highlight: "Strategic decision support",
    },
    {
        title: "Variable Annuity UMA Testing Automation",
        description:
            "Automated Variable Annuity UMA testing with Excel VBA at PwC, applying Martingale and Black-Scholes models to improve accuracy and reduce processing time by 20%.",
        technologies: ["Excel VBA", "Black-Scholes", "Martingale Models"],
        highlight: "20% faster processing",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <GlassSurface
                            key={index}
                            className="p-6 hover-glow group flex flex-col"
                            borderRadius={16}
                        >
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
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
                                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-accent-500/20 text-accent-400 border border-accent-500/30 mb-3">
                                        {project.highlight}
                                    </span>
                                )}

                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                
                                {/* Project Links */}
                                {(project.github || project.demo) && (
                                    <div className="flex gap-3 mb-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-400 transition-colors"
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
                                                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-accent-400 transition-colors"
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

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded text-xs font-medium
                               bg-gray-800 text-gray-300 border border-gray-700"
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
