import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useTransform } from 'framer-motion';

export default function ProgressBar({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Track */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-cinema-gray/30 z-[200]" />
      {/* Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cinema-accent to-cinema-gold z-[200] origin-left"
        style={{ scaleX }}
      />
    </>
  );
}
