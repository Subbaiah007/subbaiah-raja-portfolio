import { cn } from '../utils/cn';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow focus:ring-slate-900',
    secondary:
      'bg-blue-50 text-blue-700 hover:bg-blue-100/80 border border-blue-100 focus:ring-blue-600',
    outline:
      'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs focus:ring-slate-300',
    ghost:
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 focus:ring-slate-200',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
