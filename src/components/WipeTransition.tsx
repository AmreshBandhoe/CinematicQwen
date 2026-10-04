import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface WipeTransitionProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  color?: string;
}

export default function WipeTransition({ direction = 'left', color = 'bg-cinema-black' }: WipeTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return { scaleX: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]), origin: "left" };
      case 'right':
        return { scaleX: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]), origin: "right" };
      case 'up':
        return { scaleY: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]), origin: "top" };
      case 'down':
        return { scaleY: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]), origin: "bottom" };
    }
  };

  const transform = getTransform();

  return (
    <div ref={ref} className="relative h-32 overflow-hidden">
      <motion.div
        className={`absolute inset-0 ${color}`}
        style={{
          [direction === 'left' || direction === 'right' ? 'scaleX' : 'scaleY']: transform.scaleX || transform.scaleY,
          transformOrigin: transform.origin,
        }}
      />
    </div>
  );
}
