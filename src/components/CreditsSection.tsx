import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const credits = [
  { role: "Directed by", name: "The Scroll" },
  { role: "Written by", name: "The Narrative" },
  { role: "Cinematography", name: "Light & Shadow" },
  { role: "Production Design", name: "Motion & Form" },
  { role: "Sound Design", name: "Silence & Rhythm" },
  { role: "Edited by", name: "Time Itself" },
  { role: "Starring", name: "You, the Viewer" },
];

export default function CreditsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <motion.div style={{ y }}>
          {credits.map((credit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="mb-12"
            >
              <p className="text-cinema-accent/40 text-xs tracking-[0.3em] uppercase mb-2">
                {credit.role}
              </p>
              <p className="text-cinema-light text-2xl md:text-3xl font-extralight">
                {credit.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
