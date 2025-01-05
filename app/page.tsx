import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Placeholder sections to be implemented */}
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="experience" className="min-h-screen"></section>
      <section id="projects" className="min-h-screen"></section>
      <section id="github" className="min-h-screen"></section>
      <section id="contact" className="min-h-screen"></section>
    </div>
  );
}
