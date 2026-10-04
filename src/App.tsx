import { useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
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
import ParticleField from './components/ParticleField';
import CustomCursor from './components/CustomCursor';
import ChapterIndicator from './components/ChapterIndicator';
import FilmReelSection from './components/FilmReelSection';
import CinematicMoment from './components/CinematicMoment';
import SectionTransition from './components/SectionTransition';
import ActTransition from './components/ActTransition';
import CreditsSection from './components/CreditsSection';
import FilmCountdown from './components/FilmCountdown';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis smooth scroll
  useLenis();

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  // Scroll-driven background color transition
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.05, 0.1, 0.05, 0]);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div ref={containerRef} className="relative">
        {/* Scroll-driven ambient background */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="fixed inset-0 pointer-events-none z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cinema-accent/5 via-transparent to-cinema-gold/5" />
        </motion.div>
        {/* Ambient effects */}
        <ParticleField />
        <CustomCursor />
        
        {/* Film grain overlay */}
        <div className="film-grain" />
        
        {/* Letterbox bars */}
        <div className="letterbox-top" />
        <div className="letterbox-bottom" />
        
        {/* Progress bar */}
        <ProgressBar scrollYProgress={scrollYProgress} />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Chapter indicator */}
        <ChapterIndicator />
        
        {/* Main content */}
        <main className="relative">
          <HeroSection />
          <FilmCountdown />
          <SectionTransition />
          <StorySection />
          <ActTransition actNumber="Intermission" actTitle="A Pause in the Narrative" />
          <CinematicMoment />
          <ParallaxSection />
          <ActTransition actNumber="Interlude" actTitle="Between Worlds" />
          <CinematicQuote />
          <FilmReelSection />
          <ActTransition actNumber="Chronicle" actTitle="Moments in Time" />
          <TimelineSection />
          <GallerySection />
          <CreditsSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
