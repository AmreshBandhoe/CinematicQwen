import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FilmCountdown() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="relative"
      >
        {/* Rotating ring */}
        <motion.div
          style={{ rotate }}
          className="w-48 h-48 md:w-64 md:h-64 border border-cinema-accent/20 rounded-full relative"
        >
          {/* Cross hairs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-cinema-accent/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-cinema-accent/30" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-cinema-accent/30" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-cinema-accent/30" />
          
          {/* Corner markers */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-cinema-accent/30" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-cinema-accent/30" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-cinema-accent/30" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-cinema-accent/30" />
        </motion.div>

        {/* Center dot */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cinema-accent"
        />
      </motion.div>
    </section>
  );
}
