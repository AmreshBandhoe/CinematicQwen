import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const galleryItems = [
  {
    title: "Light & Shadow",
    subtitle: "Chapter I",
    image: "https://image.qwenlm.ai/generated-images/d9b27119-89cc-4ac2-9522-f6b76571c0b3/_result.png",
  },
  {
    title: "Motion & Stillness",
    subtitle: "Chapter II",
    image: "https://image.qwenlm.ai/generated-images/61382642-c29a-4d73-9b3a-cf906387802f/_result.png",
  },
  {
    title: "Space & Time",
    subtitle: "Chapter III",
    image: "https://image.qwenlm.ai/generated-images/2b96a393-7fe3-45af-8b93-dec3640d7442/_result.png",
  },
  {
    title: "Sound & Silence",
    subtitle: "Chapter IV",
    image: "https://image.qwenlm.ai/generated-images/6dec3446-0981-4e62-b5e4-1a5bd59ff7df/_result.png",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Section divider */}
      <div className="section-divider w-full mb-32" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="text-cinema-accent text-sm tracking-[0.3em] uppercase block mb-4">
            The Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-extralight text-cinema-light">
            Visual
            <span className="text-cinema-accent italic font-light"> Chapters</span>
          </h2>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Scrolling text */}
        <motion.div
          style={{ x }}
          className="mt-24 overflow-hidden"
        >
          <p className="text-[8vw] font-extralight text-cinema-accent/5 whitespace-nowrap">
            CINEMATIC • STORYTELLING • SCROLL • EXPERIENCE • CINEMATIC • STORYTELLING •
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ title, subtitle, image, index, isInView }: {
  title: string;
  subtitle: string;
  image: string;
  index: number;
  isInView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
      className="group relative"
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-cinema-accent/10">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/90 via-cinema-black/40 to-transparent" />
        
        {/* Geometric elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 md:w-32 md:h-32 border border-cinema-accent/20 rounded-full"
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <span className="text-cinema-accent/70 text-xs tracking-[0.2em] uppercase mb-2">
            {subtitle}
          </span>
          <h3 className="text-2xl md:text-3xl font-extralight text-cinema-light group-hover:text-cinema-accent transition-colors duration-500">
            {title}
          </h3>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-cinema-accent/0 group-hover:bg-cinema-accent/5 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}
