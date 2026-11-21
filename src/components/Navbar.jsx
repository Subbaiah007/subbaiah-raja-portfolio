import { useState, useEffect } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-white/60 backdrop-blur-xs py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Brand */}
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-blue-600 transition-colors">
            SR
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-900 tracking-tight text-sm leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {siteConfig.title} &bull; Chennai
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 px-3 py-1.5 rounded-full border border-slate-200/70">
          {siteConfig.navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-600 hover:text-slate-950 px-3 py-1.5 rounded-full hover:bg-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            href={siteConfig.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            Resume
          </Button>
          <Button
            variant="primary"
            size="sm"
            href="#contact"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg max-h-[calc(100dvh-4.5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {siteConfig.navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Button
                variant="outline"
                size="md"
                href={siteConfig.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full justify-center"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                View Resume
              </Button>
              <Button
                variant="primary"
                size="md"
                href="#contact"
                onClick={closeMenu}
                className="w-full justify-center"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
