import { useState } from 'react';
import Galaxy from './components/Galaxy';
import GlowCursor from './components/GlowCursor';
import TextPressure from './components/TextPressure';
import DepthCarousel from './components/DepthCarousel';
import FlashlightOverlay from './components/FlashlightOverlay';
import WarpText from './components/WarpText';

import SpaceSwitch from './components/SpaceSwitch';
import { projectsData, skillsData, beyondTechData } from './data/portfolioData';
import { Mail, Sparkles, Radio } from 'lucide-react';

function GithubIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Portfolio() {
  const [isLightsOn, setIsLightsOn] = useState(false);

  const toggleLights = () => {
    setIsLightsOn((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-slate-100 selection:bg-zinc-800 selection:text-white">
      {/* 1. Global Interactive Galaxy Background (Subtle Deep Space) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Galaxy
          starSpeed={0.5}
          density={0.9}
          hueShift={215}
          speed={0.7}
          glowIntensity={0.25}
          saturation={0.35}
          mouseInteraction={true}
          twinkleIntensity={0.6}
        />
      </div>

      {/* 2. Global Glow Cursor Wrapper (Subtle Starlight) */}
      <GlowCursor
        color="#e1cbcbff"
        secondaryColor="#df2d0eff"
        trailWidth={6}
        trailLength={20}
        glowIntensity={0.9}
        brightness={1}
        opacity={1}
        className="min-h-screen w-full"
      >
        {/* 3. Flashlight Overlay (z-index: 40) */}
        <FlashlightOverlay isLightsOn={isLightsOn} />

        {/* 4. Space Cartoon Navigation Bar */}
        <header className="space-header sticky top-0 z-30 w-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xl planet-icon">🚀</span>
            <span className="space-logo">
              Ayush Tiwari
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-3">
            <a href="#projects" className="space-nav-link">
              <span className="star-bounce">🪐</span> Projects
            </a>
            <a href="#skills" className="space-nav-link">
              <span className="star-bounce" style={{ animationDelay: '0.3s' }}>⭐</span> Skills
            </a>
            <a href="#beyond" className="space-nav-link">
              <span className="star-bounce" style={{ animationDelay: '0.6s' }}>☄️</span> Beyond
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span
              className={`hidden sm:inline-flex space-status-pill ${isLightsOn ? 'space-status-online' : 'space-status-offline'}`}
            >
              <span className={`space-status-dot ${isLightsOn ? 'bg-slate-400' : 'bg-purple-400/60'}`} />
              {isLightsOn ? '🛸 Cruising!' : '🌙 Drifting...'}
            </span>
          </div>
        </header>

        {/* 5. Main Content Scroll Area */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36 space-y-36">
          {/* HERO SECTION */}
          <section className="min-h-[85vh] flex flex-col items-center justify-center text-center relative pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 font-mono text-xs mb-8 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>SYSTEMS ARCHITECTURE &bull; CYBERSECURITY &bull; FORENSICS</span>
            </div>




            <WarpText
              text="Ayush Tiwari"
              color="#f8f5ff"
              warpStrength={0.08}
              warpScale={1.7}
              speed={0.55}
              pointerInfluence={0.42}
              pointerStrength={0.38}
              refraction={0.018}
              ripple
              fontSize={116}
              fontWeight={800}
              style={{ height: '320px' }}
              fontFamily="inherit"
              letterSpacing={-0.06}
              lineHeight={0.9}
            />

            {/* Sub-headline */}
            <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-mono tracking-wide mt-4 mb-10 leading-relaxed px-4">
              Cybersecurity Enthusiast &bull; Wanna be Systems & Full-Stack Developer &bull; Explorer
            </p>

            {/* Central Space Switch */}
            <div className="flex flex-col items-center gap-4">
              <SpaceSwitch isLightsOn={isLightsOn} onToggle={toggleLights} variant="hero" />
              <p className="text-xs font-mono text-zinc-400 tracking-wider">
                {isLightsOn ? 'Click to engage blackout mode' : 'Locate switch to toggle space illumination'}
              </p>
            </div>
          </section>

          {/* SECTION 1: PROJECTS */}
          <section id="projects" className="scroll-mt-24">
            <div className="text-center mb-10">
              <div className="h-16 sm:h-20 max-w-lg mx-auto">
                <TextPressure
                  text="PROJECTS"
                  flex={true}
                  textColor="#e2e8f0"
                  minFontSize={32}
                  className="font-mono tracking-wider font-semibold"
                />
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-widest uppercase mt-2">
                // ARCHITECTED AUTONOMY & TELEMETRY SYSTEMS
              </p>
            </div>

            <div className="relative">
              <DepthCarousel
                items={projectsData}
                cardWidth={330}
                cardHeight={450}
                depth={220}
                spread={85}
                tilt={18}
                perspective={1300}
                showControls={true}
                showIndicators={true}
                className="h-[520px]"
              />
            </div>
          </section>

          {/* SECTION 2: SKILLS & MILESTONES */}
          <section id="skills" className="scroll-mt-24">
            <div className="text-center mb-10">
              <div className="h-16 sm:h-20 max-w-xl mx-auto">
                <TextPressure
                  text="INTERESTS"
                  flex={true}
                  textColor="#e2e8f0"
                  minFontSize={32}
                  className="font-mono tracking-wider font-semibold"
                />
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-widest uppercase mt-2">
                // CYBERSECURITY • CODE ARCHITECTURE • HACKATHON PODIUM
              </p>
            </div>

            <div className="relative">
              <DepthCarousel
                items={skillsData}
                cardWidth={330}
                cardHeight={450}
                depth={220}
                spread={85}
                tilt={18}
                perspective={1300}
                showControls={true}
                showIndicators={true}
                className="h-[520px]"
              />
            </div>
          </section>

          {/* SECTION 3: BEYOND TECH */}
          <section id="beyond" className="scroll-mt-24">
            <div className="text-center mb-10">
              <div className="h-16 sm:h-20 max-w-xl mx-auto">
                <TextPressure
                  text="BEYOND TECH"
                  flex={true}
                  textColor="#e2e8f0"
                  minFontSize={32}
                  className="font-mono tracking-wider font-semibold"
                />
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-widest uppercase mt-2">
                // GRAPHIC DESIGN • PUBLIC SPEAKING • CURIOUS DISCOVERIES
              </p>
            </div>

            <div className="relative">
              <DepthCarousel
                items={beyondTechData}
                cardWidth={330}
                cardHeight={450}
                depth={220}
                spread={85}
                tilt={18}
                perspective={1300}
                showControls={true}
                showIndicators={true}
                className="h-[520px]"
              />
            </div>
          </section>
        </main>

        {/* 6. Cosmic Footer */}
        <footer className="relative z-10 border-t border-white/5 bg-black/80 backdrop-blur-lg px-6 py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs font-semibold text-zinc-200">
                <Radio className="w-4 h-4 text-zinc-400" />
                <span>MISSION COMMAND // AYUSH TIWARI</span>
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Deep space portfolio built with React Bits & Tailwind CSS
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ayush-tiwari-a81247317"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atandt0808@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>

        {/* 7. Floating Space Switch (pinned bottom right for continuous vertical navigation) */}
        <SpaceSwitch isLightsOn={isLightsOn} onToggle={toggleLights} variant="floating" />
      </GlowCursor>
    </div>
  );
}
