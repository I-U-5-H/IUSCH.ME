import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export const projectsData = [
  {
    title: 'Project O3',
    content: () => (
      <div className="h-full w-full flex flex-col justify-between p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <div>
          <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">
            Project O3
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            Python privacy application leveraging on-device local models to mask sensitive credentials, tokens, and PII before transmission. 100% offline execution.
          </p>
        </div>

        <a
          href="https://github.com/I-U-5-H/O3-webGPU"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors w-fit"
        >
          <FaGithub className="w-4 h-4" />
          <span>VIEW SOURCE</span>
        </a>
      </div>
    )
  },
  {
    title: 'Sanjeevani',
    content: () => (
      <div className="h-full w-full flex flex-col justify-between p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <div>
          <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">
            Sanjeevani
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            Mission-critical automated emergency response platform synchronizing geolocation telemetry, nearest paramedic routing, and hospital intake alerts.
          </p>
        </div>

        <a
          href="https://github.com/I-U-5-H/Sanjeevani"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-rose-400 transition-colors w-fit"
        >
          <FaGithub className="w-4 h-4" />
          <span>VIEW SOURCE</span>
        </a>
      </div>
    )
  },
  {
    title: 'Drishti',
    content: () => (
      <div className="h-full w-full flex flex-col justify-between p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <div>
          <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">
            Drishti
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            Digital wellness application tracking screen-on duration, micro-interaction fatigue, and ergonomics to optimize developer cognitive endurance.
          </p>
        </div>

        <a
          href="https://github.com/I-U-5-H/Drishti-hack-matrix"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-sky-400 transition-colors w-fit"
        >
          <FaGithub className="w-4 h-4" />
          <span>VIEW SOURCE</span>
        </a>
      </div>
    )
  }
];

export const skillsData = [
  {
    title: 'Cyber Security',
    content: () => (
      <div className="h-full w-full flex flex-col p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">Cyber Security & Forensics</h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
          Network analysis, Web Security, and User Privacy, made a web app to mask user's PII data before transmission.
        </p>
        <ul className="text-xs font-mono text-zinc-500 space-y-2 mt-auto">
          <li>→ OWASP & Web Security</li>
          <li>→ Network Analysis</li>
          <li>→ User Privacy</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Systems & Engineering',
    content: () => (
      <div className="h-full w-full flex flex-col p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">Other Technical Skills</h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
          A diverse toolkit spanning core computer science fundamentals and modern AI development.
        </p>
        <ul className="text-xs font-mono text-zinc-500 space-y-2 mt-auto">
          <li>→ Computer Networks</li>
          <li>→ Data Structures & Algorithms (DSA)</li>
          <li>→ Object-Oriented Programming (Java)</li>
          <li>→ Python Development</li>
          <li>→ crewAI</li>
          <li>→ Local & Agentic LLM Workflows</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Hackathons',
    content: () => (
      <div className="h-full w-full flex flex-col p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">My helping hand</h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
          Designed UI/UX,frontend and backend for several projects by myself and AI tools helped me to bring them to life.
        </p>
      </div>
    )
  }
];

export const beyondTechData = [
  {
    title: 'Visual Design',
    content: () => (
      <div className="h-full w-full flex flex-col p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">Designing</h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
          Don't know much, just exploring and learning Graphic Designing, UI/UX, poster Designing and Animation by getting my feet wet, this portfolio is an example of it.
        </p>
      </div>
    )
  },
  {
    title: 'Photos',
    content: () => (
      <div className="h-full w-full flex flex-col p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">Photography</h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
          Capturing what eyes love to see, bit of camera angles bit of post processing and a lot of beautiful magic.
        </p>
      </div>
    )
  },
  {
    title: 'Exploration',
    content: () => (
      <div className="h-full w-full flex flex-col p-8 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-[18px] text-left transition-all duration-300">
        <h3 className="text-2xl font-light text-zinc-100 tracking-tight mb-4">Learning new things</h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
          Exploring, observing and learning new things from new people, new situations, new environment and new places.
        </p>
      </div>
    )
  }
];