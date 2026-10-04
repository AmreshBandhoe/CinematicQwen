import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineItems = [
  {
    year: "2019",
    title: "Genesis",
    description: "The first frame is captured. A vision takes shape in the darkness of creation.",
    icon: "◈",
  },
  {
    year: "2020",
    title: "Evolution",
    description: "Techniques refine. The language of visual storytelling begins to emerge with clarity.",
    icon: "◇",
  },
  {
    year: "2022",
    title: "Convergence",
    description: "Art meets technology. New dimensions of expression become possible.",
    icon: "◆",
  },
  {
    year: "2024",
    title: "Transcendence",
    description: "The boundary between viewer and creator dissolves. Experience becomes creation.",
    icon: "✦",
  },
];

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-32 md:py-48">
      {/* Section divider */}
      <div className="section-divider w-full mb-32" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <span className="text-cinema-accent text-sm tracking-[0.3em] uppercase block mb-4">
            The Timeline
          </span>
          <h2 className="text-4xl md:text-6xl font-extralight text-cinema-light">
            Evolution of
            <span className="block text-cinema-accent italic font-light">a Vision</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cinema-accent/50 via-cinema-accent/20 to-transparent origin-top hidden md:block"
          />

          {/* Timeline items */}
          <div className="space-y-24 md:space-y-32">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, description, icon, index, isInView }: {
  year: string;
  title: string;
  description: string;
  icon: string;
  index: number;
  isInView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center`}>
        <span className="text-cinema-accent/30 text-5xl md:text-6xl font-extralight block mb-2">
          {year}
        </span>
        <h3 className="text-2xl md:text-3xl font-extralight text-cinema-light mb-3">
          {title}
        </h3>
        <p className="text-cinema-warm/40 font-light max-w-sm mx-auto md:mx-0">
          {description}
        </p>
      </div>

      {/* Center dot */}
      <div className="relative z-10 hidden md:flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
          className="w-12 h-12 rounded-full border border-cinema-accent/30 flex items-center justify-center bg-cinema-dark"
        >
          <span className="text-cinema-accent text-lg">{icon}</span>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
