import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let cleanup: (() => void) | undefined;

export function initSmoothScroll() {
  if (cleanup || typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({
    // A short interpolation handles rapid wheel events progressively instead
    // of chasing one long duration-based target and then catching up in a jump.
    lerp: .085,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: .72,
    touchMultiplier: 1,
    autoRaf: true,
    anchors: { lerp: .1, offset: 0 }
  });

  const updateScrollTrigger = () => ScrollTrigger.update();

  lenis.on('scroll', updateScrollTrigger);

  cleanup = () => {
    lenis.off('scroll', updateScrollTrigger);
    lenis.destroy();
    cleanup = undefined;
  };
  window.addEventListener('pagehide', cleanup, { once: true });
}
