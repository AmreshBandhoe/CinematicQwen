import { motion } from 'framer-motion';
import { useRef } from 'react';

const storyBlocks = [
  {
    number: "01",
    title: "The Beginning",
    text: "Every great story starts with a single frame. In the silence before the action, we find the potential for infinite possibilities.",
    align: "left" as const,
  },
  {
    number: "02",
    title: "The Journey",
    text: "Through valleys of shadow and peaks of light, the narrative unfolds. Each moment builds upon the last, creating a tapestry of experience.",
    align: "right" as const,
  },
  {
    number: "03",
    title: "The Revelation",
    text: "In the convergence of all paths, truth emerges. Not as a destination, but as a transformation — the viewer becomes the story.",
    align: "left" as const,
  },
];

export default function StorySection() {
  return (
    <section className="relative py-32 md:py-48">
      {/* Section divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="section-divider w-full mb-32 origin-left"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-32">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-cinema-accent text-sm tracking-[0.3em] uppercase block mb-4"
          >
            The Narrative
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-cinema-light"
          >
            Three Acts of
            <span className="block text-cinema-accent italic font-light">Visual Poetry</span>
          </motion.h2>
        </div>
        
        {/* Story blocks */}
        <div className="space-y-48 md:space-y-64">
          {storyBlocks.map((block, index) => (
            <StoryBlock key={index} {...block} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ number, title, text, align, index }: {
  number: string;
  title: string;
  text: string;
  align: 'left' | 'right';
  index: number;
}) {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'} items-start`}>
      <motion.div
        initial={{ opacity: 0, x: align === 'left' ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        className={`max-w-xl ${align === 'right' ? 'md:text-right' : 'md:text-left'}`}
      >
        {/* Number */}
        <span className="text-cinema-accent/30 text-8xl md:text-9xl font-extralight block mb-4">
          {number}
        </span>
        
        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-extralight text-cinema-light mb-6">
          {title}
        </h3>
        
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className={`w-20 h-[1px] bg-cinema-accent mb-6 ${align === 'right' ? 'ml-auto' : ''} origin-left`}
        />
        
        {/* Text */}
        <p className="text-cinema-warm/50 text-lg md:text-xl font-light leading-relaxed">
          {text}
        </p>
      </motion.div>
    </div>
  );
}
