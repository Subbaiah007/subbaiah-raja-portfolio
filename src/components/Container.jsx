import { cn } from '../utils/cn';

export default function Container({ children, className = '' }) {
  return (
    <div className={cn('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full', className)}>
      {children}
    </div>
  );
}
