import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BentoGrid from '@/components/BentoGrid';
import Contact from '@/components/Contact';
import ParticlesBackground from '@/components/ParticlesBackground';
import TextReveal from '@/components/TextReveal';
import ParallaxSection from '@/components/ParallaxSection';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <BentoGrid />
        <Contact />
      </div>
    </main>
  );
}