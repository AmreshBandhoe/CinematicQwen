import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });
  const trailSpringX = useSpring(trailX, { damping: 30, stiffness: 120 });
  const trailSpringY = useSpring(trailY, { damping: 30, stiffness: 120 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(!!isClickable);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [cursorX, cursorY, trailX, trailY, isVisible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-screen"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201, 169, 110, 0.15) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10001]"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? 'rgba(201, 169, 110, 0.8)' : 'rgba(201, 169, 110, 0.4)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 rounded-full border border-cinema-accent/40" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10002]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cinema-accent" />
      </motion.div>
    </>
  );
}
