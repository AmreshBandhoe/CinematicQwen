import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const navY = useTransform(scrollYProgress, [0.05, 0.1], [-20, 0]);

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className="fixed top-[40px] left-0 right-0 z-[150] px-6 md:px-12 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-cinema-light font-extralight text-lg tracking-wider">
          SCROLL<span className="text-cinema-accent">.</span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['Story', 'Gallery', 'Timeline'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-cinema-warm/50 text-xs tracking-[0.15em] uppercase hover:text-cinema-accent transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border border-cinema-accent/30 text-cinema-accent text-xs tracking-[0.15em] uppercase rounded-full hover:bg-cinema-accent/10 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
