import { useState } from 'react';
import IndexHeader from '@/components/index/IndexHeader';
import IndexHero from '@/components/index/IndexHero';
import IndexSections from '@/components/index/IndexSections';
import IndexFooter from '@/components/index/IndexFooter';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <IndexHeader activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <IndexHero scrollToSection={scrollToSection} />
        <IndexSections />
      </main>
      <IndexFooter />
    </div>
  );
};

export default Index;
