import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://image.qwenlm.ai/generated-images/cfade6cc-6824-4480-8ea2-db7067f7c88b/_result.png')" }}
        />
        <div className="absolute inset-0 bg-cinema-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black/80 via-transparent to-cinema-black" />
      </motion.div>

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cinema-accent/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cinema-gold/10 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cinema-accent/5 blur-[120px]"
        />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette z-10 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6"
        style={{ y: textY, opacity }}
      >
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-cinema-accent text-sm tracking-[0.3em] uppercase font-light">
            A Cinematic Experience
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight mb-8 glow-text"
        >
          <motion.span
            className="block text-cinema-light overflow-hidden"
            initial={{ y: "100%" }}
            animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7, ease: [0.77, 0, 0.175, 1] }}
          >
            Scroll
          </motion.span>
          <motion.span
            className="block text-cinema-accent italic font-light overflow-hidden"
            initial={{ y: "100%" }}
            animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.9, ease: [0.77, 0, 0.175, 1] }}
          >
            Storyboard
          </motion.span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={loaded ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.0, ease: [0.77, 0, 0.175, 1] }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cinema-accent to-transparent mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-cinema-warm/60 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed"
        >
          An immersive journey through motion, light, and narrative — 
          told one scroll at a time.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-cinema-accent/70 text-xs tracking-[0.2em] uppercase">Scroll Down</span>
            <svg width="20" height="30" viewBox="0 0 20 30" className="text-cinema-accent/70">
              <rect x="7" y="1" width="6" height="12" rx="3" stroke="currentColor" fill="none" strokeWidth="1" />
              <motion.circle
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                cx="10" cy="5" r="1.5" fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
