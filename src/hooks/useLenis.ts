import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Integrate with Framer Motion's scroll
    function onScroll() {
      // Dispatch custom event so Framer Motion picks it up
      window.dispatchEvent(new Event('scroll'));
    }

    lenis.on('scroll', onScroll);

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const id = anchor.getAttribute('href');
        if (id && id.length > 1) {
          const element = document.querySelector(id) as HTMLElement | null;
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: 0, duration: 2 });
          }
        }
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      lenis.destroy();
    };
  }, []);
}
