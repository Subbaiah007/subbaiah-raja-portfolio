import Container from '../components/Container';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const responsibilities = [
    'Develop backend services and REST APIs using Python and FastAPI.',
    'Work with SQLModel and relational database data models.',
    'Build Flutter applications using Dart and Provider for state management.',
    'Implement API integration, request data validation, and application workflows.',
    'Work with Docker, Kubernetes, Git, and cloud-native development tools.',
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/70">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Professional Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Engineering background & employment.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional software development experience building backend APIs, data pipelines, and user-facing applications.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-3xl">
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-xs">
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  Software Engineer
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  EmbedUR Systems Private Limited
                </h3>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-500 font-medium space-y-1">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  2024 – Present
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Chennai, India
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="pt-6">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
                Key Responsibilities & Focus Areas
              </h4>
              <ul className="space-y-3">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
