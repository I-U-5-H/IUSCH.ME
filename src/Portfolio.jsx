import { useState, useEffect } from 'react';
import Galaxy from './components/Galaxy';
import GlowCursor from './components/GlowCursor';
import TextPressure from './components/TextPressure';
import DepthCarousel from './components/DepthCarousel';
import WarpText from './components/WarpText';

import { projectsData, skillsData, beyondTechData } from './data/portfolioData';
import { Mail, Sparkles, Radio, Sun, Moon } from 'lucide-react';

function GithubIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative z-50 flex items-center gap-3 cursor-pointer select-none rounded-full border-2 px-4 py-2.5 min-h-[48px] min-w-[48px] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        borderColor: isDark ? '#4338ca' : '#f59e0b',
        color: isDark ? '#c7d2fe' : '#92400e',
      }}
    >
      <span
        className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
        style={{
          background: isDark ? '#312e81' : '#fbbf24',
        }}
        aria-hidden="true"
      >
        {isDark ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </span>
      <span className="text-sm font-semibold tracking-wide">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Theme-dependent classes
  const bgClass = isDark ? 'bg-black text-slate-100' : 'bg-slate-50 text-slate-900';
  const headerBg = isDark
    ? 'bg-gradient-to-br from-[#08080f] via-[#0d0b1a] to-[#111118] border-white/6'
    : 'bg-white/90 border-slate-200';
  const footerBg = isDark
    ? 'border-white/5 bg-black/80'
    : 'border-slate-200 bg-white/90';
  const subTextColor = isDark ? 'text-zinc-300' : 'text-slate-600';
  const mutedTextColor = isDark ? 'text-zinc-300' : 'text-slate-500';

  return (
    <div className={`relative min-h-screen w-full selection:bg-zinc-800 selection:text-white ${bgClass}`}>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* 1. Global Interactive Galaxy Background (only in dark mode) */}
      {isDark && (
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
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
      )}

      {/* 2. Global Glow Cursor Wrapper (only in dark mode) */}
      <GlowCursor
        color="#e1cbcbff"
        secondaryColor="#df2d0eff"
        trailWidth={isDark ? 6 : 0}
        trailLength={isDark ? 20 : 0}
        glowIntensity={isDark ? 0.9 : 0}
        brightness={isDark ? 1 : 0}
        opacity={isDark ? 1 : 0}
        enabled={isDark}
        className="min-h-screen w-full"
      >
        {/* 3. Navigation Header */}
        <header className={`space-header sticky top-0 z-30 w-full px-6 py-3 flex items-center justify-between backdrop-blur-xl border-b ${headerBg}`}>
          <div className="flex items-center gap-2.5">
            <span className="text-xl planet-icon" role="img" aria-label="Rocket">🚀</span>
            <span className={`space-logo ${!isDark ? '!bg-gradient-to-r !from-indigo-600 !via-purple-600 !to-pink-500' : ''}`}>
              Ayush Tiwari
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-3" aria-label="Primary navigation">
            <a href="#projects" className={`space-nav-link ${!isDark ? '!text-slate-600 !border-slate-200 hover:!text-indigo-600 hover:!border-indigo-300 hover:!bg-indigo-50' : ''}`}>
              <span className="star-bounce" aria-hidden="true">🪐</span> Projects
            </a>
            <a href="#skills" className={`space-nav-link ${!isDark ? '!text-slate-600 !border-slate-200 hover:!text-indigo-600 hover:!border-indigo-300 hover:!bg-indigo-50' : ''}`}>
              <span className="star-bounce" style={{ animationDelay: '0.3s' }} aria-hidden="true">⭐</span> Skills
            </a>
            <a href="#beyond" className={`space-nav-link ${!isDark ? '!text-slate-600 !border-slate-200 hover:!text-indigo-600 hover:!border-indigo-300 hover:!bg-indigo-50' : ''}`}>
              <span className="star-bounce" style={{ animationDelay: '0.6s' }} aria-hidden="true">☄️</span> Beyond
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </header>

        {/* 4. Main Content Scroll Area */}
        <main id="main-content" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36 space-y-36">
          {/* HERO SECTION */}
          <section className="min-h-[85vh] flex flex-col items-center justify-center text-center relative pt-8" aria-label="Introduction">
            {/* Visually-hidden h1 for accessibility (WarpText is decorative canvas) */}
            <h1 className="sr-only">Ayush Tiwari — Portfolio</h1>

            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-xs mb-8 backdrop-blur-md ${isDark ? 'bg-white/[0.04] border-white/10 text-zinc-300' : 'bg-slate-100 border-slate-300 text-slate-600'}`}>
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SYSTEMS ARCHITECTURE &bull; CYBERSECURITY &bull; FORENSICS</span>
            </div>

            <WarpText
              text="Ayush Tiwari"
              color={isDark ? '#f8f5ff' : '#1e293b'}
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
            <p className={`max-w-2xl text-base sm:text-lg font-mono tracking-wide mt-4 mb-10 leading-relaxed px-4 ${subTextColor}`}>
              Cybersecurity Enthusiast &bull; Wanna be Systems &amp; Full-Stack Developer &bull; Explorer
            </p>
          </section>

          {/* SECTION 1: PROJECTS */}
          <section id="projects" className="scroll-mt-24" aria-label="Projects">
            <div className="text-center mb-10">
              <div className="h-16 sm:h-20 max-w-lg mx-auto">
                <TextPressure
                  text="PROJECTS"
                  flex={true}
                  textColor={isDark ? '#e2e8f0' : '#1e293b'}
                  minFontSize={32}
                  headingLevel={2}
                  className="font-mono tracking-wider font-semibold"
                />
              </div>
              <p className={`text-xs sm:text-sm font-mono tracking-widest uppercase mt-2 ${mutedTextColor}`}>
                // ARCHITECTED AUTONOMY &amp; TELEMETRY SYSTEMS
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
          <section id="skills" className="scroll-mt-24" aria-label="Skills and Interests">
            <div className="text-center mb-10">
              <div className="h-16 sm:h-20 max-w-xl mx-auto">
                <TextPressure
                  text="INTERESTS"
                  flex={true}
                  textColor={isDark ? '#e2e8f0' : '#1e293b'}
                  minFontSize={32}
                  headingLevel={2}
                  className="font-mono tracking-wider font-semibold"
                />
              </div>
              <p className={`text-xs sm:text-sm font-mono tracking-widest uppercase mt-2 ${mutedTextColor}`}>
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
          <section id="beyond" className="scroll-mt-24" aria-label="Beyond Tech">
            <div className="text-center mb-10">
              <div className="h-16 sm:h-20 max-w-xl mx-auto">
                <TextPressure
                  text="BEYOND TECH"
                  flex={true}
                  textColor={isDark ? '#e2e8f0' : '#1e293b'}
                  minFontSize={32}
                  headingLevel={2}
                  className="font-mono tracking-wider font-semibold"
                />
              </div>
              <p className={`text-xs sm:text-sm font-mono tracking-widest uppercase mt-2 ${mutedTextColor}`}>
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

        {/* 5. Footer */}
        <footer className={`relative z-10 border-t backdrop-blur-lg px-6 py-12 ${footerBg}`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className={`flex items-center justify-center md:justify-start gap-2 font-mono text-xs font-semibold ${isDark ? 'text-zinc-200' : 'text-slate-700'}`}>
                <Radio className="w-4 h-4" aria-hidden="true" />
                <span>MISSION COMMAND // AYUSH TIWARI</span>
              </div>
              <p className={`text-xs font-mono mt-1 ${mutedTextColor}`}>
                Deep space portfolio built with React Bits &amp; Tailwind CSS
              </p>
            </div>

            <div className="flex items-center gap-3" role="list" aria-label="Social links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                role="listitem"
                className={`p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg border transition-all hover:scale-105 ${isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'}`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ayush-tiwari-a81247317"
                target="_blank"
                rel="noreferrer"
                role="listitem"
                className={`p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg border transition-all hover:scale-105 ${isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'}`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atandt0808@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                className={`p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg border transition-all hover:scale-105 ${isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'}`}
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>

        {/* 6. Floating Theme Toggle (bottom right) */}
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </GlowCursor>
    </div>
  );
}
