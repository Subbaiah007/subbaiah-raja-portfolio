import Container from '../components/Container';
import Button from '../components/Button';
import { Mail, MessageCircle, ArrowUpRight, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

function GithubIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/916374311373?text=${encodeURIComponent(
    'Hi Subbaiah, I would like to get in touch.'
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/70">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Let’s connect and collaborate.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you are discussing engineering opportunities, software development, backend architectures, or mobile apps, feel free to reach out directly.
          </p>

          {/* Contact Direct Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Email Directly</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Send a direct message or inquiry.
                </p>
                <div className="text-xs font-mono font-medium text-slate-700 break-all mb-4">
                  {siteConfig.contact.email}
                </div>
              </div>
              <Button
                variant="primary"
                size="sm"
                href={`mailto:${siteConfig.contact.email}?subject=Hello%20Subbaiah`}
                className="w-full justify-center"
              >
                Send Email
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">WhatsApp / Direct Call</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Fastest way for questions or consultations.
                </p>
                <div className="text-xs font-mono font-medium text-slate-700 mb-4">
                  {siteConfig.contact.phone}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center text-emerald-700 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
              >
                Chat on WhatsApp
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Location & Verified Links */}
          <div className="pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Based in Chennai, Tamil Nadu, India
            </span>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-950 font-medium px-2.5 py-1 rounded-lg hover:bg-slate-200/60 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-medium px-2.5 py-1 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
