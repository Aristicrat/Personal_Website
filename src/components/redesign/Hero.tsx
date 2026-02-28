"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const heroRef = useRef<HTMLElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const canvas = canvasRef.current;
        if (!hero || !canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const lineColor = "#0008ff";
        const waveSpeedX = 0.16;
        const lineCount = 26;
        const mouseRadius = 150;
        const mouseStrength = 26;

        let width = 0;
        let height = 0;
        let dpr = 1;
        let rafId = 0;

        const mouse = { x: -9999, y: -9999, active: false };

        const resize = () => {
            const rect = hero.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));
            dpr = window.devicePixelRatio || 1;

            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };

        const onPointerMove = (event: PointerEvent) => {
            const rect = hero.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
            mouse.active = true;
        };

        const onPointerLeave = () => {
            mouse.active = false;
        };

        const draw = (time: number) => {
            if (!ctx) return;

            const t = time * 0.001;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);

            const bg = ctx.createLinearGradient(0, 0, 0, height);
            bg.addColorStop(0, "#06112b");
            bg.addColorStop(1, "#071838");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < lineCount; i += 1) {
                const yBase = (i / (lineCount - 1)) * height;
                const amp = 10 + i * 0.75;
                const freq = 0.007 + i * 0.00026;
                const phase = t * waveSpeedX * (1.8 + i * 0.02);

                ctx.beginPath();
                for (let x = 0; x <= width; x += 6) {
                    let y = yBase + Math.sin(x * freq + phase) * amp;

                    if (mouse.active) {
                        const dx = x - mouse.x;
                        const dy = y - mouse.y;
                        const distSq = dx * dx + dy * dy;
                        const influence = Math.exp(-distSq / (2 * mouseRadius * mouseRadius));
                        y -= influence * mouseStrength;
                    }

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                ctx.strokeStyle = lineColor;
                ctx.globalAlpha = 0.14 + (i / lineCount) * 0.35;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            ctx.globalAlpha = 1;
            rafId = requestAnimationFrame(draw);
        };

        resize();
        hero.addEventListener("pointermove", onPointerMove, { passive: true });
        hero.addEventListener("pointerleave", onPointerLeave, { passive: true });
        window.addEventListener("resize", resize);
        rafId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(rafId);
            hero.removeEventListener("pointermove", onPointerMove);
            hero.removeEventListener("pointerleave", onPointerLeave);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section ref={heroRef} className="hero">
            <canvas ref={canvasRef} className="hero-waves-canvas" aria-hidden />
            <div className="hero-content">
                <h1 className="hero-name">Roger Aristizabal</h1>
            </div>
            <a className="hero-scroll-cue" href="#projects" aria-label="Scroll down to projects">
                <span aria-hidden>↓</span>
            </a>
        </section>
    );
}
