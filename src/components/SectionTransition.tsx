import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create a wipe effect from center
  const leftScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const rightScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const centerOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);

  return (
    <div ref={ref} className="relative h-[30vh] overflow-hidden">
      {/* Left wipe */}
      <motion.div
        style={{ scaleX: leftScale }}
        className="absolute top-0 left-0 w-1/2 h-full bg-cinema-black origin-right"
      />
      
      {/* Right wipe */}
      <motion.div
        style={{ scaleX: rightScale }}
        className="absolute top-0 right-0 w-1/2 h-full bg-cinema-black origin-left"
      />
      
      {/* Center flash */}
      <motion.div
        style={{ opacity: centerOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-cinema-accent to-transparent" />
      </motion.div>
    </div>
  );
}
