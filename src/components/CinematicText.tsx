import { motion } from 'framer-motion';

interface CinematicTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function CinematicText({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03 
}: CinematicTextProps) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: i * 0.1 },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}
