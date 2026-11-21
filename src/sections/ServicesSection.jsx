import Container from '../components/Container';
import { Globe, LayoutGrid, Database, Smartphone, Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Business Websites',
      icon: Globe,
      description:
        'Clean, responsive websites tailored for local businesses, professionals, and startups to present their offerings clearly and turn visitors into client enquiries.',
      points: [
        'Mobile-friendly responsive design',
        'Clear service presentation & call-to-actions',
        'Contact & enquiry integration',
      ],
    },
    {
      title: 'Custom Business Applications',
      icon: LayoutGrid,
      description:
        'Digital systems designed around practical day-to-day operations to replace paperwork and disorganized spreadsheets with reliable workflows.',
      points: [
        'Appointment booking & scheduling systems',
        'Client, patient, or customer record tracking',
        'Internal task management & admin dashboards',
      ],
    },
    {
      title: 'Backend APIs & Integrations',
      icon: Database,
      description:
        'Secure backend services built with Python and FastAPI that handle business data correctly, validate incoming requests, and connect your tools together.',
      points: [
        'RESTful API architecture & endpoints',
        'Structured database design & relational data',
        'System health monitoring & request validation',
      ],
    },
    {
      title: 'Cross-Platform Mobile Applications',
      icon: Smartphone,
      description:
        'Mobile applications developed using Flutter for Android and iOS, providing a consistent user interface and smooth connection to backend data.',
      points: [
        'Cross-platform delivery for Android and iOS',
        'Clean, intuitive Material Design layouts',
        'State management & live API synchronization',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/70">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Software solutions tailored for growing businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical development services focused on usability, reliability, and clear communication—without technical complexity getting in the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-2.5">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
