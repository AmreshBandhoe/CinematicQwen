import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background layers with parallax */}
      <div className="absolute inset-0">
        {/* Layer 1 - deepest */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cinema-accent/5 to-transparent blur-[60px]" />
          <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-cinema-gold/5 to-transparent blur-[50px]" />
        </motion.div>

        {/* Layer 2 - middle */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cinema-accent/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cinema-accent/5 rounded-full" />
        </motion.div>

        {/* Layer 3 - front */}
        <motion.div
          style={{ y: y3, rotate, scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Central content */}
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-cinema-accent/20 rounded-full flex items-center justify-center">
              <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-cinema-accent/10 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <motion.p
                    style={{ opacity: centerOpacity }}
                    className="text-cinema-accent text-6xl md:text-8xl font-extralight"
                  >
                    ∞
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating text elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-12 md:left-24"
      >
        <p className="text-cinema-warm/20 text-sm tracking-[0.2em] uppercase rotate-[-90deg] origin-left">
          Infinite Possibilities
        </p>
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 right-12 md:right-24"
      >
        <p className="text-cinema-warm/20 text-sm tracking-[0.2em] uppercase rotate-[90deg] origin-right">
          Boundless Creation
        </p>
      </motion.div>

      {/* Center text */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          style={{ opacity: centerOpacity }}
          className="text-4xl md:text-6xl font-extralight text-cinema-light"
        >
          Where Vision
          <span className="block text-cinema-accent italic">Meets Motion</span>
        </motion.h2>
      </div>
    </section>
  );
}
