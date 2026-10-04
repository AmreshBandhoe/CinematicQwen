import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProgressBar({ scrollYProgress }: { scrollYProgress: any }) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-cinema-accent z-[200] origin-left"
      style={{ scaleX }}
    />
  );
}
