import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Education } from '@/sections/Education';
import { Skills } from '@/sections/Skills';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 px-4 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} 凌梓菲. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}