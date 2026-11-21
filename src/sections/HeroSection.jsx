import * as Motion from 'motion/react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowUpRight, CheckCircle2, FileText, Briefcase } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

export default function HeroSection() {
  const highlights = [
    'Python & FastAPI Backends',
    'Cross-Platform Flutter Apps',
    'Direct & Clear Communication',
  ];

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white relative overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-slate-50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <Container>
        <div className="max-w-3xl">
          {/* Main Title */}
          <Motion.motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            Software developer building web and mobile software for{' '}
            <span className="text-blue-700 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-8">
              growing businesses
            </span>
            .
          </Motion.motion.h1>

          {/* Subtitle / Value Proposition */}
          <Motion.motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl"
          >
            Hi, I'm <span className="font-semibold text-slate-900">Subbaiah Raja</span>. I build custom applications, reliable backend APIs, and cross-platform mobile solutions for businesses, startups, and entrepreneurs.
          </Motion.motion.p>

          {/* Action CTAs */}
          <Motion.motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 mb-10 w-full"
          >
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="w-full sm:w-auto justify-center"
            >
              Discuss a Project
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#services"
              className="w-full sm:w-auto justify-center"
            >
              <Briefcase className="w-4 h-4 text-slate-500" />
              View Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={siteConfig.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              Resume (PDF)
            </Button>
          </Motion.motion.div>

          {/* Key Value Highlights */}
          <Motion.motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-slate-500">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </Motion.motion.div>
        </div>
      </Container>
    </section>
  );
}
