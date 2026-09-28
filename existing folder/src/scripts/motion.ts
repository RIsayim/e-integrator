import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let initialized = false;

export function initMotion() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);
  const context = gsap.context(() => {
    const hero = document.querySelector('.hero, .portfolio-hero, .project-article__hero, .about-page-hero, .contact-page-hero, .automation-hero');
    const heroImage = hero?.querySelector<HTMLElement>('.scene__image, .home-hero__video');
    const heroCopy = hero?.querySelector<HTMLElement>('.hero__copy, .portfolio-hero__copy, .project-showcase-hero__copy, .about-page-hero__copy, .contact-page-hero__copy, .automation-hero__copy');

    if (heroImage) {
      gsap.fromTo(heroImage, { scale: 1.08 }, { scale: 1, duration: 1.3, ease: 'power3.out' });
      gsap.to(heroImage, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    }
    if (heroCopy) gsap.from(heroCopy.children, { y: 28, duration: .75, stagger: .12, ease: 'power3.out', delay: .15 });

    gsap.utils.toArray<HTMLElement>('.section-intro, .project-intro__grid, .project-story__grid, .project-result__grid').forEach((element) => {
      gsap.from(element.children, { y: 28, duration: .75, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 85%', once: true } });
    });

    gsap.utils.toArray<HTMLElement>('.project-card, .philosophy-card, .team-card, .project-highlights li').forEach((element) => {
      gsap.from(element, { y: 34, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
    });

    gsap.utils.toArray<HTMLElement>('.scene').forEach((element) => {
      const image = element.querySelector<HTMLElement>('.scene__image');
      if (!image || element.closest('.hero, .portfolio-hero, .project-article__hero, .about-page-hero, .contact-page-hero, .automation-hero, .about-sliders-section, .contact-cta')) return;
      gsap.fromTo(element, { clipPath: 'inset(8% 0 8% 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      gsap.fromTo(image, { scale: 1.06 }, { scale: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
    });

    gsap.utils.toArray<HTMLElement>('.pill-button:not([data-static-cta])').forEach((button) => {
      button.addEventListener('pointermove', (event) => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const bounds = button.getBoundingClientRect();
        gsap.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * .08, y: (event.clientY - bounds.top - bounds.height / 2) * .08, duration: .3, ease: 'power2.out' });
      });
      button.addEventListener('pointerleave', () => gsap.to(button, { x: 0, y: 0, duration: .45, ease: 'elastic.out(1, .45)' }));
    });

    ScrollTrigger.refresh();
  });

  window.addEventListener('pagehide', () => { context.revert(); initialized = false; }, { once: true });
}
