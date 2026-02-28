const links = [
    { label: "Email", href: "mailto:rogeraristi2@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/roger-aristizabal" },
    { label: "GitHub", href: "https://github.com/aristicrat" },
    { label: "Resume", href: "/Resume_Aristizabal.pdf" },
];

export default function Contact() {
    return (
        <section id="contact" className="section-shell">
            <div className="section-inner">
                <div className="section-header contact-header">
                    <div>
                        <span className="section-kicker">Contact</span>
                        <h2 className="section-title contact-title">Get In Touch</h2>
                    </div>
                </div>

                <div className="contact-grid">
                    <div className="contact-photo-wrap" aria-hidden>
                        <img src="/profile.jpg" alt="" className="contact-photo" />
                    </div>
                    <aside className="contact-panel">
                        <div className="contact-card-grid">
                            {links.map((link) => {
                                const external = link.href.startsWith("http") || link.href.endsWith(".pdf");
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noopener noreferrer" : undefined}
                                        className="contact-card-link"
                                    >
                                        <span className="contact-card-title">{link.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
