export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-grid-overlay" aria-hidden />
            <div className="hero-content">
                <h1 className="hero-name">Roger Aristizabal</h1>
            </div>
            <a className="hero-scroll-cue" href="#projects" aria-label="Scroll down to projects">
                <span aria-hidden>↓</span>
            </a>
        </section>
    );
}
