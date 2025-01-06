import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Github from '@/components/Github';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
      <section id="info" className="min-h-screen">
        <Hero />
      </section>
      {/* Placeholder sections to be implemented */}
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="experience" className="min-h-screen">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="github" className="min-h-screen">
        <Github />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
