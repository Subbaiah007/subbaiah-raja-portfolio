import Container from '../components/Container';
import { Layers, FileCode, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Clinic Management Application',
      category: 'Full-Stack Application Design',
      problem:
        'Clinics and healthcare practices need organized records to track patient visits, consultations, and treatment instructions without scattered paperwork.',
      implementation:
        'Designed backend data models linking doctors, appointments, consultation records, diagnoses, and prescription items using SQLModel and FastAPI. Implemented appointment-booking workflows and clinical treatment notes.',
      technologies: ['Python', 'FastAPI', 'SQLModel', 'Relational Database Design'],
      status: 'Personal Project',
    },
    {
      title: 'Flutter Task Manager',
      category: 'Mobile Application',
      problem:
        'Users need an uncomplicated, responsive interface to track daily responsibilities and manage ongoing tasks reliably on mobile devices.',
      implementation:
        'Structured the application into distinct UI pages, data models, and business logic using Flutter and Dart. Utilized ChangeNotifierProvider for predictable state management, reactive updates, and asynchronous task loading.',
      technologies: ['Flutter', 'Dart', 'Provider', 'Git'],
      status: 'Personal Project',
    },
    {
      title: 'Patient Data REST API',
      category: 'Backend & Data Services',
      problem:
        'Applications handling sensitive patient records require validated endpoints, clean CRUD data flows, and automated health checks to ensure reliability.',
      implementation:
        'Built and tested REST API endpoints using FastAPI, SQLModel, and SQLite. Integrated strict request validation, structured error handling, patient data operations, and automated health-check endpoints.',
      technologies: ['Python', 'FastAPI', 'SQLModel', 'SQLite', 'REST APIs'],
      status: 'Personal Project',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-slate-200/70">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Selected Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Practical software projects & implementations.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A selection of verified personal projects demonstrating backend API architecture, relational database modeling, and mobile user interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    <FileCode className="w-3 h-3 text-slate-400" />
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Problem Addressed */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    Problem Addressed
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Implementation */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-500" />
                    Implementation Details
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.implementation}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-5 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note for Visitors */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-slate-900">
              Need a custom application or business workflow digitized?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              I can help design and develop applications according to your business requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors shrink-0"
          >
            Discuss your requirements
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
