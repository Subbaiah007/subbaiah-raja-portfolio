import * as Motion from 'motion/react';
import { Terminal, FileText, CheckCircle2, Layers } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';

export default function IntroSection() {
  const features = [
    { label: 'React 19 + JavaScript (JSX)', desc: 'Pure ES6+ with clean JSX structure' },
    { label: 'Tailwind CSS v4', desc: 'Vite plugin integration & modern utility styling' },
    { label: 'Motion for React', desc: 'Fluid animations and interaction primitives' },
    { label: 'Lucide React', desc: 'Consistent, modern iconography' },
  ];

  return (
    <Motion.motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-xl w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <StatusBadge text="Environment Ready" />
        <span className="text-xs text-slate-400 font-mono">Vite + React</span>
      </div>

      <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
        <Terminal className="w-6 h-6 text-sky-400" />
        Portfolio Scaffold Initialized
      </h1>
      <p className="text-sm text-slate-400 mb-6">
        Temporary initialization view. All core architectural directories, configuration files, and styling pipelines are active.
      </p>

      <div className="space-y-3 mb-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/50 border border-slate-800/60 text-left"
          >
            <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-semibold text-slate-200">{item.label}</div>
              <div className="text-xs text-slate-400">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-slate-500" />
          Ready for portfolio build stage
        </span>
        <a
          href="/Subbaiah_Raja_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Verify Resume PDF
        </a>
      </div>
    </Motion.motion.div>
  );
}
