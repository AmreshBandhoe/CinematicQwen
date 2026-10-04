import { useRef, useState, useCallback } from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ParallaxSection from './components/ParallaxSection';
import TimelineSection from './components/TimelineSection';
import CinematicQuote from './components/CinematicQuote';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div ref={containerRef} className="relative">
        {/* Film grain overlay */}
        <div className="film-grain" />
        
        {/* Letterbox bars */}
        <div className="letterbox-top" />
        <div className="letterbox-bottom" />
        
        {/* Progress bar */}
        <ProgressBar scrollYProgress={scrollYProgress} />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main className="relative">
          <HeroSection />
          <StorySection />
          <ParallaxSection />
          <CinematicQuote />
          <TimelineSection />
          <GallerySection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
