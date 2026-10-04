import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const chapters = [
  { id: 0, title: "Prologue" },
  { id: 1, title: "Act I" },
  { id: 2, title: "Interlude" },
  { id: 3, title: "Act II" },
  { id: 4, title: "Timeline" },
  { id: 5, title: "Gallery" },
  { id: 6, title: "Epilogue" },
];

export default function ChapterIndicator() {
  const { scrollYProgress } = useScroll();
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.15) setActiveChapter(0);
      else if (v < 0.28) setActiveChapter(1);
      else if (v < 0.42) setActiveChapter(2);
      else if (v < 0.56) setActiveChapter(3);
      else if (v < 0.70) setActiveChapter(4);
      else if (v < 0.85) setActiveChapter(5);
      else setActiveChapter(6);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[150] hidden lg:flex flex-col items-end gap-4"
    >
      {chapters.map((chapter, index) => (
        <div
          key={chapter.id}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Chapter title */}
          <span
            className={`text-xs tracking-wider uppercase transition-all duration-300 ${
              activeChapter === index
                ? 'text-cinema-accent opacity-100'
                : 'text-cinema-warm/30 opacity-0 group-hover:opacity-100'
            }`}
          >
            {chapter.title}
          </span>
          
          {/* Dot indicator */}
          <div className="relative">
            <motion.div
              animate={{
                scale: activeChapter === index ? 1.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeChapter === index
                  ? 'bg-cinema-accent shadow-[0_0_10px_rgba(201,169,110,0.5)]'
                  : 'bg-cinema-warm/20 group-hover:bg-cinema-warm/40'
              }`}
            />
            {activeChapter === index && (
              <motion.div
                className="absolute inset-0 rounded-full border border-cinema-accent/30"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
