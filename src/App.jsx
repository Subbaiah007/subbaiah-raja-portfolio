import HeaderLayout from './layouts/HeaderLayout';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <HeaderLayout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </HeaderLayout>
  );
}
