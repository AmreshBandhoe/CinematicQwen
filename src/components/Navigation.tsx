import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 1]);
  const navY = useTransform(scrollYProgress, [0.02, 0.08], [-20, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 0.8]);

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className="fixed top-[40px] left-0 right-0 z-[150] px-6 md:px-12 py-4"
    >
      {/* Nav background */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-cinema-black/80 backdrop-blur-md border-b border-cinema-accent/5"
      />
      
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-cinema-light font-extralight text-lg tracking-wider cursor-pointer"
        >
          SCROLL<span className="text-cinema-accent">.</span>
        </motion.div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['Story', 'Gallery', 'Timeline'].map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -2 }}
              className="text-cinema-warm/60 text-xs tracking-[0.15em] uppercase hover:text-cinema-accent transition-colors duration-300"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border border-cinema-accent/40 text-cinema-accent text-xs tracking-[0.15em] uppercase rounded-full hover:bg-cinema-accent/10 transition-colors duration-300"
          >
            Explore
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
