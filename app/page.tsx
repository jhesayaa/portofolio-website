import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Project';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates'; 
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import LoadingScreen from '@/components/LoadingScreen'; 
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <LoadingScreen /> 
      <BackToTop />
      <main className="min-h-screen bg-black relative overflow-hidden">
        <div className="fixed inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}