"use client";

import Iridescence from "@/components/ui/Iridescence";

export default function IridescenceBackground() {
    return (
        <div className="fixed inset-0 z-[-2] opacity-30">
            <Iridescence
                color={[1, 0.5, 1]} // magenta/pink with cyan accents as per your request
                speed={0.8}
                amplitude={0.15}
                mouseReact={true}
            />
        </div>
    );
}
