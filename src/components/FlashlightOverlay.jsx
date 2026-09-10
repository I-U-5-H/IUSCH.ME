import { useEffect, useState } from 'react';

export default function FlashlightOverlay({ isLightsOn }) {
  const [coords, setCoords] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 500,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('pointermove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-40 pointer-events-none transition-opacity duration-700 ease-out ${
        isLightsOn ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: `radial-gradient(circle 150px at ${coords.x}px ${coords.y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 85px, rgba(0, 0, 0, 0.72) 135px, #000000 150px)`,
      }}
    >
      {/* Subtle outer lens ring */}
      <div
        className="absolute rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.04)] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          width: '300px',
          height: '300px',
        }}
      />

      {/* Subtle Tactical Prompt when dark */}
      {!isLightsOn && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 text-xs font-mono tracking-wider backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
          <span>Searchlight Active • Find the switch to turn lights on</span>
        </div>
      )}
    </div>
  );
}
