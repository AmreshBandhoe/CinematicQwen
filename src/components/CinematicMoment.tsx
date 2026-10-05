import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SoundWave from './SoundWave';

export default function CinematicMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <section ref={ref} className="relative h-[150vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, opacity, rotate }}
        className="relative text-center px-6"
      >
        {/* Glowing background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cinema-accent/10 blur-[100px]" />
        </motion.div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-cinema-accent/50 text-sm tracking-[0.3em] uppercase mb-8">
            A Moment of
          </p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-cinema-light mb-8 glow-text">
            Pure
            <span className="block text-cinema-accent italic font-light">Cinema</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cinema-accent to-transparent mx-auto mb-8"
          />
          
          {/* Sound wave visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="w-64 mx-auto"
          >
            <SoundWave />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
