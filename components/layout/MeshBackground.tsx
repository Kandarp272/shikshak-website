"use client";

import React from "react";

const MeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-mesh-1/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-gradient-mesh-2/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-gradient-mesh-3/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Dark Overlay to ensure readability */}
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
};

export default MeshBackground;
