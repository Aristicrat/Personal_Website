import { projects } from "@/content/projects";

export default function Projects() {
    return (
        <section id="projects" className="section-shell">
            <div className="section-inner">
                <div className="section-header">
                    <div>
                        <span className="section-kicker">Selected Work</span>
                        <h2 className="section-title">Projects</h2>
                    </div>
                </div>

                <div className="project-grid">
                    {projects.map((project) => {
                        const previewScale = 0.45;
                        const previewSize = `${(100 / previewScale).toFixed(3)}%`;

                        return (
                            <a
                                key={project.slug}
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card"
                            >
                                <div className="project-thumb-wrap" aria-hidden>
                                    <iframe
                                        className="project-thumb project-thumb-live"
                                        src={project.demo}
                                        title={`${project.name} live preview`}
                                        loading="lazy"
                                        sandbox="allow-scripts allow-same-origin"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        style={{
                                            width: previewSize,
                                            height: previewSize,
                                            transform: `scale(${previewScale})`,
                                            transformOrigin: "top left",
                                        }}
                                    />
                                </div>
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-copy">{project.description}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
