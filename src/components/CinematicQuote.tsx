import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CinematicQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cinema-accent/[0.02] blur-[100px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Quote marks */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-cinema-accent/20 text-8xl md:text-9xl font-serif block mb-8"
        >
          "
        </motion.span>

        {/* Quote text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extralight text-cinema-light leading-tight mb-12"
        >
          The cinema is the most beautiful fraud in the world —
          <span className="block text-cinema-accent italic mt-4">
            it creates truth through illusion.
          </span>
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-12 h-[1px] bg-cinema-accent mx-auto mb-6" />
          <p className="text-cinema-warm/40 text-sm tracking-[0.2em] uppercase">
            Jean-Luc Godard
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
