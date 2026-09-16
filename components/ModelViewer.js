'use client';

import { useEffect } from 'react';

export default function ModelViewer({ src, alt, poster }) {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <div className="modelFrame">
      <model-viewer
        src={src}
        alt={alt}
        poster={poster}
        camera-controls
        touch-action="pan-y"
        shadow-intensity="0.65"
        exposure="1"
        auto-rotate
        auto-rotate-delay="1200"
        rotation-per-second="12deg"
        interaction-prompt="auto"
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      />
      <div className="modelHint">Drag to rotate · Scroll to zoom</div>
    </div>
  );
}
