"use client";

import dynamic from "next/dynamic";

const SynthwaveGrid = dynamic(() => import("./ui/SynthwaveGrid"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0a0a1a]" />,
});

interface SynthwaveBackgroundProps {
  gridColor?: string;
  glowColor?: string;
  amplitude?: number;
  speed?: number;
}

export default function SynthwaveBackground({
  gridColor = "#00ff41",
  glowColor = "#bf00ff",
  amplitude = 30,
  speed = 1,
}: SynthwaveBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-2]">
      <SynthwaveGrid
        gridColor={gridColor}
        glowColor={glowColor}
        amplitude={amplitude}
        speed={speed}
      />
    </div>
  );
}
