import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FilmReelSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const frames = [
    "VISION", "LIGHT", "MOTION", "STORY", "CINEMA", "DREAM", "SCROLL", "CREATE"
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6">
        {/* Film strip top */}
        <div className="relative h-16 mb-8 overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute top-0 left-0 flex gap-4 whitespace-nowrap"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 border-2 border-cinema-accent/20 rounded" />
                <div className="w-12 h-12 border-2 border-cinema-accent/20 rounded" />
                <div className="w-12 h-12 border-2 border-cinema-accent/20 rounded" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Main content */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cinema-accent text-sm tracking-[0.3em] uppercase block mb-4"
          >
            The Reel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extralight text-cinema-light"
          >
            Frame by
            <span className="text-cinema-accent italic font-light"> Frame</span>
          </motion.h2>
        </div>

        {/* Scrolling frames */}
        <div className="relative h-32 overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute top-0 left-0 flex gap-8"
          >
            {Array.from({ length: 3 }).map((_, setIndex) => (
              frames.map((frame, i) => (
                <motion.div
                  key={`${setIndex}-${i}`}
                  whileHover={{ scale: 1.1, borderColor: "rgba(201, 169, 110, 0.5)" }}
                  className="w-48 h-32 border border-cinema-accent/20 rounded-lg flex items-center justify-center bg-cinema-dark/50 backdrop-blur-sm"
                >
                  <span className="text-cinema-accent/60 text-2xl font-extralight tracking-wider">
                    {frame}
                  </span>
                </motion.div>
              ))
            ))}
          </motion.div>
        </div>

        {/* Film strip bottom */}
        <div className="relative h-16 mt-8 overflow-hidden">
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, 1000]) }}
            className="absolute top-0 right-0 flex gap-4 whitespace-nowrap"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 border-2 border-cinema-accent/20 rounded" />
                <div className="w-12 h-12 border-2 border-cinema-accent/20 rounded" />
                <div className="w-12 h-12 border-2 border-cinema-accent/20 rounded" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
