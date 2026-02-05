"use client";

import { useEffect, useRef } from "react";

interface SynthwaveGridProps {
  gridColor?: string;
  glowColor?: string;
  amplitude?: number;
  speed?: number;
}

export default function SynthwaveGrid({
  gridColor = "#00ff41",
  glowColor = "#bf00ff",
  amplitude = 30,
  speed = 1,
}: SynthwaveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      
      // Clear with dark background
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, width, height);

      // Horizon line position
      const horizon = height * 0.4;
      
      // Draw gradient sky with purple glow
      const skyGradient = ctx.createLinearGradient(0, 0, 0, horizon);
      skyGradient.addColorStop(0, "#0a0a1a");
      skyGradient.addColorStop(0.5, "#1a0a2e");
      skyGradient.addColorStop(1, "#2d1b4e");
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, width, horizon);

      // Purple glow at horizon
      const glowGradient = ctx.createRadialGradient(
        width / 2, horizon, 0,
        width / 2, horizon, width * 0.6
      );
      glowGradient.addColorStop(0, "rgba(191, 0, 255, 0.4)");
      glowGradient.addColorStop(0.3, "rgba(138, 43, 226, 0.2)");
      glowGradient.addColorStop(1, "transparent");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);

      // Grid settings
      const gridLines = 30;
      const perspectiveDepth = 800;
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = gridColor;
      ctx.shadowBlur = 10;

      // Draw horizontal grid lines (receding into distance)
      for (let i = 0; i <= gridLines; i++) {
        const t = i / gridLines;
        const y = horizon + (height - horizon) * Math.pow(t, 1.5);
        
        // Wave distortion for purple amplitude
        const wave = Math.sin(time * speed * 2 + t * 10) * amplitude * (1 - t * 0.5);
        
        ctx.beginPath();
        ctx.moveTo(0, y + wave * 0.3);
        
        // Draw wavy line
        for (let x = 0; x <= width; x += 20) {
          const xWave = Math.sin(time * speed + x * 0.01 + t * 5) * wave * 0.5;
          ctx.lineTo(x, y + xWave);
        }
        
        // Fade lines as they get closer
        const alpha = 0.3 + (1 - t) * 0.7;
        ctx.strokeStyle = `rgba(0, 255, 65, ${alpha})`;
        ctx.stroke();
      }

      // Draw vertical grid lines (perspective)
      const verticalLines = 25;
      for (let i = -verticalLines / 2; i <= verticalLines / 2; i++) {
        const xRatio = i / (verticalLines / 2);
        
        // Start point at horizon (converging)
        const startX = width / 2 + xRatio * 50;
        const startY = horizon;
        
        // End point at bottom (spread out)
        const endX = width / 2 + xRatio * (width * 0.8);
        const endY = height;
        
        ctx.beginPath();
        
        // Draw with perspective wave
        const steps = 50;
        for (let j = 0; j <= steps; j++) {
          const t = j / steps;
          const x = startX + (endX - startX) * t;
          const y = startY + (endY - startY) * Math.pow(t, 1.2);
          
          // Add wave distortion
          const wave = Math.sin(time * speed * 1.5 + t * 8 + i * 0.5) * amplitude * t * 0.3;
          
          if (j === 0) {
            ctx.moveTo(x + wave, y);
          } else {
            ctx.lineTo(x + wave, y);
          }
        }
        
        const alpha = 1 - Math.abs(xRatio) * 0.5;
        ctx.strokeStyle = `rgba(0, 255, 65, ${alpha * 0.8})`;
        ctx.stroke();
      }

      // Draw flowing purple amplitude waves
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 30;
      
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const waveY = horizon + 50 + w * 80;
        
        for (let x = 0; x <= width; x += 5) {
          const wave1 = Math.sin(time * speed * 2 + x * 0.008 + w) * amplitude * 1.5;
          const wave2 = Math.sin(time * speed * 1.3 + x * 0.012 + w * 2) * amplitude * 0.8;
          const y = waveY + wave1 + wave2;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const gradient = ctx.createLinearGradient(0, waveY - amplitude, 0, waveY + amplitude);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, `rgba(191, 0, 255, ${0.6 - w * 0.15})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 - w * 0.5;
        ctx.stroke();
      }

      // Add scanlines effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 2);
      }

      // Add subtle vignette
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.3,
        width / 2, height / 2, height
      );
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [gridColor, glowColor, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
