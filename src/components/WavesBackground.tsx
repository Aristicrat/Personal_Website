"use client";

import dynamic from "next/dynamic";

const Waves = dynamic(() => import("./ui/Waves"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

interface WavesBackgroundProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
}

export default function WavesBackground({
  lineColor = "#bf00ff",
  backgroundColor = "transparent",
  waveSpeedX = 0.02,
  waveSpeedY = 0.01,
  waveAmpX = 40,
  waveAmpY = 20,
  xGap = 12,
  yGap = 36,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 300,
}: WavesBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Waves
        lineColor={lineColor}
        backgroundColor={backgroundColor}
        waveSpeedX={waveSpeedX}
        waveSpeedY={waveSpeedY}
        waveAmpX={waveAmpX}
        waveAmpY={waveAmpY}
        xGap={xGap}
        yGap={yGap}
        friction={friction}
        tension={tension}
        maxCursorMove={maxCursorMove}
      />
    </div>
  );
}
