import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let initialized = false;

export function initContactCta() {
  const section = document.querySelector<HTMLElement>('[data-contact-cta]');
  if (initialized || !section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  initialized = true;
  gsap.registerPlugin(ScrollTrigger);

  const image = section.querySelector<HTMLElement>('.contact-cta__media .scene__image');
  const shade = section.querySelector<HTMLElement>('.contact-cta__shade');
  const heading = section.querySelector<HTMLElement>('.contact-cta__content h2');
  const intro = section.querySelector<HTMLElement>('.contact-cta__intro');
  const card = section.querySelector<HTMLElement>('.contact-cta__card');
  const context = gsap.context(() => {
    if (image) {
      gsap.fromTo(image, { scale: 1.12 }, {
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 82%', once: true }
      });
    }
    if (heading) gsap.from(heading, { y: 48, opacity: 0, duration: .95, ease: 'power4.out', scrollTrigger: { trigger: section, start: 'top 78%', once: true } });
    if (intro) gsap.from(intro, { y: 28, opacity: 0, duration: .8, delay: .16, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 72%', once: true } });
    if (card) gsap.from(card, { y: 54, opacity: 0, scale: .96, duration: .95, delay: .24, ease: 'power4.out', scrollTrigger: { trigger: section, start: 'top 70%', once: true } });
    if (image) gsap.to(image, {
      yPercent: 9,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
    });
    if (shade) gsap.to(shade, {
      opacity: .78,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
    });
    if (card) gsap.to(card, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }, section);

  window.addEventListener('pagehide', () => { context.revert(); initialized = false; }, { once: true });
}
