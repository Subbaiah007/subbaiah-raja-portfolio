import Container from '../components/Container';
import { GraduationCap, Code2, Server, Cpu } from 'lucide-react';

export default function AboutSection() {
  const technologies = [
    {
      category: 'Primary Stack',
      items: ['Python', 'FastAPI', 'Flutter', 'Dart', 'SQLModel'],
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL', 'SQLite', 'Relational Data Modeling'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Docker', 'Kubernetes', 'Google Cloud Platform (GCP)', 'Git'],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200/70">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-6">
              Engineering practical software with clarity and precision.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                I am a software engineer based in Chennai, India. My engineering background in mechatronics provides me with a structured, systems-oriented mindset toward analyzing problems and developing software.
              </p>
              <p>
                My professional work centers on building clean backend services with Python and FastAPI, handling structured relational data, and delivering cross-platform mobile user experiences with Flutter.
              </p>
              <p>
                When working with businesses and entrepreneurs, my focus is straightforward: understanding your actual process requirements, writing maintainable code, and delivering solutions that solve practical operational challenges directly.
              </p>
            </div>

            {/* Education Box */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Education & Degree
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  Bachelor of Engineering (B.E.), Mechatronics
                </h4>
                <p className="text-sm text-slate-600 mt-0.5">
                  Chennai Institute of Technology &bull; Graduated 2024
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Capabilities */}
          <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl p-7 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-blue-700" />
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Technical Capabilities
              </h3>
            </div>

            <div className="space-y-6">
              {technologies.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2.5">
                    {idx === 0 && <Code2 className="w-3.5 h-3.5 text-blue-600" />}
                    {idx === 1 && <Server className="w-3.5 h-3.5 text-blue-600" />}
                    {idx === 2 && <Cpu className="w-3.5 h-3.5 text-blue-600" />}
                    <span>{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs font-medium text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
