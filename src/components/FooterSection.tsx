import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-32 md:py-48">
      {/* Section divider */}
      <div className="section-divider w-full mb-32" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-cinema-accent text-sm tracking-[0.3em] uppercase block mb-6">
            The End is Just the Beginning
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-cinema-light mb-8">
            Ready to Create
            <span className="block text-cinema-accent italic font-light">Your Story?</span>
          </h2>
          <p className="text-cinema-warm/40 text-lg font-light max-w-lg mx-auto mb-12">
            Every scroll is a new chapter. Every moment is a frame waiting to be captured.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-cinema-accent text-cinema-accent text-sm tracking-[0.2em] uppercase rounded-full hover:bg-cinema-accent/10 transition-colors duration-500"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 pt-16 border-t border-cinema-accent/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="text-cinema-light font-extralight text-xl tracking-wider">
              SCROLL<span className="text-cinema-accent">.</span>STORYBOARD
            </div>

            {/* Links */}
            <div className="flex gap-8">
              {['Story', 'Gallery', 'Timeline', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-cinema-warm/40 text-sm tracking-wider hover:text-cinema-accent transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {['◉', '◎', '◈'].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-cinema-accent/20 flex items-center justify-center text-cinema-accent/40 hover:border-cinema-accent hover:text-cinema-accent transition-colors duration-300 cursor-pointer text-xs"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-cinema-warm/20 text-xs tracking-wider">
            © 2024 Scroll Storyboard. A Cinematic Experience.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
