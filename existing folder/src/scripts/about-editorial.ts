import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let initialized = false;

export function initAboutEditorial() {
  const page = document.querySelector<HTMLElement>('[data-about-editorial]');
  if (initialized || !page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  initialized = true;
  gsap.registerPlugin(ScrollTrigger);

  const carouselTimers = new Set<number>();
  const context = gsap.context(() => {
    const gallery = page.querySelector<HTMLElement>('[data-about-gallery]');
    const galleryCards = gallery ? Array.from(gallery.querySelectorAll<HTMLElement>('.about-editorial__gallery-set')) : [];
    const galleryFigures = galleryCards.flatMap((card) => Array.from(card.querySelectorAll<HTMLElement>('figure')));
    const collage = page.querySelector<HTMLElement>('[data-about-collage]');
    const collageCards = collage ? Array.from(collage.children) : [];
    const voices = page.querySelector<HTMLElement>('[data-about-voices]');
    const voiceCards = voices ? Array.from(voices.children) : [];
    const team = page.querySelector<HTMLElement>('[data-about-team]');
    const teamCards = team ? Array.from(team.children) : [];
    const carousel = page.querySelector<HTMLElement>('[data-about-gallery-carousel]');
    const reviewCarousel = page.querySelector<HTMLElement>('[data-about-voices-carousel]');

    if (gallery && galleryFigures.length) {
      gsap.from(galleryFigures, { y: 54, opacity: 0, immediateRender: false, duration: .9, stagger: .08, ease: 'power4.out', scrollTrigger: { trigger: gallery, start: 'top 85%', once: true } });
    }
    if (collage && collageCards.length) {
      gsap.from(collageCards, { y: 46, opacity: 0, duration: .85, stagger: .13, ease: 'power3.out', scrollTrigger: { trigger: collage, start: 'top 82%', once: true } });
    }
    // Keep these sections visible before they reach their ScrollTrigger. Without
    // immediateRender:false, GSAP can briefly apply the "from" state on load.
    if (voiceCards.length) gsap.from(voiceCards, { y: 28, opacity: 0, immediateRender: false, duration: .65, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: voices, start: 'top 80%', once: true } });
    if (teamCards.length) gsap.from(teamCards, { y: 34, opacity: 0, scale: .97, immediateRender: false, duration: .72, stagger: .08, ease: 'power3.out', scrollTrigger: { trigger: team, start: 'top 82%', once: true } });

    if (carousel) {
      const slides = Array.from(carousel.querySelectorAll<HTMLElement>('.about-editorial__gallery-set'));
      const dots = Array.from(carousel.querySelectorAll<HTMLButtonElement>('.about-editorial__gallery-dots button'));
      const previous = carousel.querySelector<HTMLButtonElement>('.about-editorial__gallery-arrow--previous');
      const next = carousel.querySelector<HTMLButtonElement>('.about-editorial__gallery-arrow--next');
      let activeIndex = 0;
      let timer: number | undefined;
      const selectSlide = (index: number) => {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeIndex));
        dots.forEach((dot, dotIndex) => {
          const active = dotIndex === activeIndex;
          dot.classList.toggle('is-active', active);
          dot.setAttribute('aria-current', String(active));
        });
      };
      const startTimer = () => {
        stopTimer();
        timer = window.setInterval(() => selectSlide(activeIndex + 1), 4200);
        carouselTimers.add(timer);
      };
      const stopTimer = () => {
        if (timer) {
          window.clearInterval(timer);
          carouselTimers.delete(timer);
          timer = undefined;
        }
      };
      dots.forEach((dot, index) => dot.addEventListener('click', () => { selectSlide(index); stopTimer(); startTimer(); }));
      previous?.addEventListener('click', () => { selectSlide(activeIndex - 1); stopTimer(); startTimer(); });
      next?.addEventListener('click', () => { selectSlide(activeIndex + 1); stopTimer(); startTimer(); });
      carousel.addEventListener('pointerenter', stopTimer);
      carousel.addEventListener('pointerleave', startTimer);
      startTimer();
    }

    if (reviewCarousel && voices && voiceCards.length) {
      const pagination = Array.from(reviewCarousel.querySelectorAll<HTMLButtonElement>('.about-editorial__voices-pagination button'));
      const visibleCards = Math.min(3, voiceCards.length);
      const continuationCards = voiceCards.slice(0, visibleCards).map((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        clone.tabIndex = -1;
        voices.append(clone);
        return clone;
      });
      let position = 0;
      let timer: number | undefined;
      let resetTimer: number | undefined;
      const setPosition = (nextPosition: number, animate = true) => {
        position = nextPosition;
        voices.classList.toggle('is-resetting', !animate);
        const firstCard = voiceCards[0];
        const gap = Number.parseFloat(getComputedStyle(voices).columnGap) || 0;
        const step = firstCard.getBoundingClientRect().width + gap;
        voices.style.transform = `translate3d(${-position * step}px, 0, 0)`;
        const activeIndex = position % voiceCards.length;
        pagination.forEach((dot, dotIndex) => {
          const active = dotIndex === activeIndex;
          dot.classList.toggle('is-active', active);
          dot.setAttribute('aria-current', String(active));
        });
      };
      const resetLoop = () => {
        setPosition(0, false);
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => voices.classList.remove('is-resetting')));
      };
      const advanceReview = () => {
        setPosition(position + 1);
        if (position === voiceCards.length) {
          if (resetTimer) window.clearTimeout(resetTimer);
          resetTimer = window.setTimeout(resetLoop, 840);
        }
      };
      const stopTimer = () => {
        if (timer) {
          window.clearInterval(timer);
          carouselTimers.delete(timer);
          timer = undefined;
        }
      };
      const startTimer = () => {
        stopTimer();
        timer = window.setInterval(advanceReview, 4800);
        carouselTimers.add(timer);
      };
      pagination.forEach((dot, index) => dot.addEventListener('click', () => { setPosition(index); startTimer(); }));
      reviewCarousel.addEventListener('pointerenter', stopTimer);
      reviewCarousel.addEventListener('pointerleave', startTimer);
      reviewCarousel.addEventListener('focusin', stopTimer);
      reviewCarousel.addEventListener('focusout', startTimer);
      window.addEventListener('resize', () => setPosition(position, false), { passive: true });
      void continuationCards;
      setPosition(0, false);
      startTimer();
    }
  }, page);

  window.addEventListener('pagehide', () => { carouselTimers.forEach((timer) => window.clearInterval(timer)); context.revert(); initialized = false; }, { once: true });
}
