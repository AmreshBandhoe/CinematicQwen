import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ActTransitionProps {
  actNumber: string;
  actTitle: string;
}

export default function ActTransition({ actNumber, actTitle }: ActTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0.8, 1, 1, 0.9]);
  const letterSpacing = useTransform(scrollYProgress, [0.3, 0.5], ["0.5em", "0.2em"]);

  return (
    <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="text-center"
      >
        {/* Act number */}
        <motion.p
          style={{ letterSpacing }}
          className="text-cinema-accent/40 text-sm tracking-widest uppercase mb-4"
        >
          {actNumber}
        </motion.p>

        {/* Decorative lines */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-16 h-[1px] bg-cinema-accent/30 origin-right"
          />
          <div className="w-2 h-2 rounded-full bg-cinema-accent/30" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-16 h-[1px] bg-cinema-accent/30 origin-left"
          />
        </div>

        {/* Act title */}
        <h2 className="text-3xl md:text-5xl font-extralight text-cinema-light">
          {actTitle}
        </h2>
      </motion.div>
    </section>
  );
}
