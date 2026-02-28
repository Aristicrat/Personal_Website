import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="detail-page">
            <div className="detail-shell">
                <Link href="/#projects" className="detail-back">
                    ← Back to projects
                </Link>

                <h1 className="detail-title">{project.name}</h1>
                <p className="detail-summary">{project.description}</p>

                <div className="detail-actions">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="contact-link">
                        Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                        GitHub
                    </a>
                </div>

                <div className="project-live-wrap">
                    <div className="project-live project-live-fallback">
                        <p>Live preview is opened externally for best compatibility.</p>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="contact-link">
                            Open {project.name}
                        </a>
                    </div>
                </div>

                <section className="detail-section">
                    <h2>Highlights</h2>
                    <ul className="detail-list">
                        {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="detail-section">
                    <h2>Stack</h2>
                    <div className="detail-tags">
                        {project.stack.map((item) => (
                            <span key={item} className="detail-tag">
                                {item}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
