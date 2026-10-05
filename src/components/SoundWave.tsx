import { motion } from 'framer-motion';

export default function SoundWave() {
  const bars = 40;

  return (
    <div className="flex items-center justify-center gap-[2px] h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-cinema-accent/30 rounded-full"
          animate={{
            height: [
              `${Math.random() * 20 + 10}%`,
              `${Math.random() * 60 + 40}%`,
              `${Math.random() * 20 + 10}%`,
            ],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}
