import { motion } from 'framer-motion';
import { Rocket, Moon, Sparkles } from 'lucide-react';

export default function SpaceSwitch({ isLightsOn, onToggle, variant = 'hero' }) {
  const isFloating = variant === 'floating';

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={isLightsOn ? 'Turn off lights' : 'Turn on lights'}
      // Bouncy, cartoonish hover and tap physics
      whileHover={{ scale: 1.05, rotate: isLightsOn ? 3 : -3 }}
      whileTap={{ scale: 0.95, y: 6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
      className={`group relative z-50 cursor-pointer select-none rounded-2xl border-[4px] transition-colors duration-300 ${isFloating
          ? 'fixed bottom-6 right-6 px-5 py-3'
          : 'px-8 py-4'
        } ${isLightsOn
          ? 'bg-violet-600 border-fuchsia-400 text-white shadow-[0_6px_0_#a21caf,0_15px_20px_rgba(192,38,211,0.4)]'
          : 'bg-slate-800 border-slate-600 text-slate-300 shadow-[0_6px_0_#475569,0_15px_20px_rgba(0,0,0,0.5)]'
        }`}
    // The box shadow drops to 0 when tapped using Framer Motion's y offset to simulate pushing a physical chunky button
    >
      {/* Cartoon Sparkle Accents (Only visible when lights are on) */}
      {isLightsOn && (
        <>
          <Sparkles className="absolute -top-3 -left-3 w-6 h-6 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute -bottom-2 -right-2 w-5 h-5 text-fuchsia-300 animate-bounce" />
        </>
      )}

      {/* Button Interior */}
      <div className="flex items-center gap-4">

        {/* Playful Icon Container */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full border-[3px] transition-colors duration-300 ${isLightsOn
              ? 'bg-yellow-400 border-yellow-200 text-violet-900'
              : 'bg-indigo-900 border-indigo-700 text-indigo-300'
            }`}
        >
          {isLightsOn ? (
            <Rocket className="w-5 h-5 fill-current" />
          ) : (
            <Moon className="w-5 h-5 fill-current" />
          )}
        </div>

        {/* Chunky Cartoon Text Details */}
        <div className="text-left">
          <div
            className={`font-black tracking-wide uppercase transition-colors ${isFloating ? 'text-sm' : 'text-sm sm:text-base'
              } ${isLightsOn ? 'text-white' : 'text-slate-300'}`}
          >
            {isLightsOn ? 'Ignite Space!' : 'It is dark...'}
          </div>
          <div
            className={`text-[11px] font-bold tracking-widest uppercase opacity-80 ${isFloating ? 'hidden sm:block' : 'block'
              }`}
          >
            {isLightsOn ? 'Engines Go' : 'Find Switch'}
          </div>
        </div>

        {/* Cartoon Status Tag */}
        <div
          className={`ml-2 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border-2 transition-all ${isLightsOn
              ? 'bg-lime-400 border-lime-200 text-lime-900 rotate-3'
              : 'bg-slate-700 border-slate-500 text-slate-400 -rotate-3'
            }`}
        >
          {isLightsOn ? 'ON' : 'OFF'}
        </div>
      </div>
    </motion.button>
  );
}