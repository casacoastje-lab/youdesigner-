import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Footer } from './components/Footer';
import { INITIAL_PROJECTS } from './data/portfolioData';
import { PortfolioProject } from './types';

export default function App() {
  const [projects] = useState<PortfolioProject[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Observer for active nav section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f4f5] selection:bg-[#ff5500] selection:text-white relative">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content: Hero, About Us, My Skills, My Project, Contact */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. About Us Section */}
        <AboutSection
          onContactClick={() => scrollToSection('contact')}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* 3. My Skills Section */}
        <SkillsSection />

        {/* 4. My Project Section */}
        <ProjectGrid
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 5. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Fullscreen Modal */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </div>
  );
}
