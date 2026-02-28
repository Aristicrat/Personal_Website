"use client";

import dynamic from "next/dynamic";

const Waves = dynamic(() => import("@/components/ui/Waves"), {
    ssr: false,
    loading: () => <div className="hero-waves-layer" aria-hidden />,
});

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-waves-layer" aria-hidden>
                <Waves
                    lineColor="#0008ff"
                    backgroundColor="transparent"
                    waveSpeedX={0.08}
                    waveSpeedY={0.01}
                    waveAmpX={42}
                    waveAmpY={20}
                    xGap={12}
                    yGap={34}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={300}
                    className="hero-waves-instance"
                />
            </div>
            <div className="hero-content">
                <h1 className="hero-name">Roger Aristizabal</h1>
            </div>
            <a className="hero-scroll-cue" href="#projects" aria-label="Scroll down to projects">
                <span aria-hidden>↓</span>
            </a>
        </section>
    );
}
