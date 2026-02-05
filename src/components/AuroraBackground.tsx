"use client";

import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("./ui/Aurora"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/50" />,
});

interface AuroraBackgroundProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
}

export default function AuroraBackground({
  colorStops = ["#3A0CA3", "#7209B7", "#4361EE"],
  amplitude = 1.0,
  blend = 0.5,
  speed = 0.5,
}: AuroraBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-2]">
      <Aurora colorStops={colorStops} amplitude={amplitude} blend={blend} speed={speed} />
    </div>
  );
}
