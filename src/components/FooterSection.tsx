import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function FooterSection() {
  return (
    <footer className="relative py-32 md:py-48">
      {/* Section divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="section-divider w-full mb-32 origin-left"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cinema-accent text-sm tracking-[0.3em] uppercase block mb-6"
          >
            The End is Just the Beginning
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-cinema-light mb-8">
            Ready to Create
            <span className="block text-cinema-accent italic font-light">Your Story?</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cinema-warm/40 text-lg font-light max-w-lg mx-auto mb-12"
          >
            Every scroll is a new chapter. Every moment is a frame waiting to be captured.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(201, 169, 110, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-10 py-4 border border-cinema-accent text-cinema-accent text-sm tracking-[0.2em] uppercase rounded-full hover:bg-cinema-accent/10 transition-colors duration-500"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 pt-16 border-t border-cinema-accent/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-cinema-light font-extralight text-xl tracking-wider cursor-pointer"
            >
              SCROLL<span className="text-cinema-accent">.</span>STORYBOARD
            </motion.div>

            {/* Links */}
            <div className="flex gap-8">
              {['Story', 'Gallery', 'Timeline', 'Contact'].map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-cinema-warm/40 text-sm tracking-wider hover:text-cinema-accent transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {['◉', '◎', '◈'].map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, borderColor: "rgba(201, 169, 110, 1)" }}
                  className="w-8 h-8 rounded-full border border-cinema-accent/20 flex items-center justify-center text-cinema-accent/40 hover:text-cinema-accent transition-colors duration-300 cursor-pointer text-xs"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-cinema-warm/20 text-xs tracking-wider"
          >
            © 2024 Scroll Storyboard. A Cinematic Experience.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
