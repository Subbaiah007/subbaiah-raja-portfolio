import { CheckCircle2 } from 'lucide-react';

export default function StatusBadge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 shadow-sm">
      <CheckCircle2 className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  );
}
