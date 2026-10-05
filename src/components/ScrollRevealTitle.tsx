import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function ScrollRevealTitle({ title, subtitle, className = "" }: ScrollRevealTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ["0.2em", "0em"]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ opacity, y, scale }}
        className="text-center"
      >
        <motion.h2
          style={{ letterSpacing }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight text-cinema-light mb-4"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-cinema-accent italic text-xl md:text-2xl font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
