import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let cleanup: (() => void) | undefined;

export function initAboutSliders() {
  const sliders = Array.from(document.querySelectorAll<HTMLElement>('[data-about-slider]'));
  if (cleanup || !sliders.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(Draggable, ScrollTrigger);
  const draggables: Draggable[] = [];
  const context = gsap.context(() => {
    sliders.forEach((slider) => {
      const drag = slider.querySelector<HTMLElement>('.about-slider__drag');
      const group = slider.querySelector<HTMLElement>('.about-sliders__group');
      if (!drag || !group) return;

      let duplicates = 0;
      while (drag.scrollWidth < window.innerWidth * 2 && duplicates < 10) {
        const clone = group.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('img').forEach((image) => image.alt = '');
        drag.append(clone);
        duplicates += 1;
      }

      const reversed = slider.dataset.reversed === 'true';
      const duration = (Number(slider.dataset.duration) || 60) * (group.offsetWidth / window.innerWidth) * .75;
      const width = Number(slider.dataset.width) || 100;
      const overflow = width - 100;
      const groups = Array.from(drag.querySelectorAll<HTMLElement>('.about-sliders__group'));

      gsap.set(slider, { width: `${width}vw` });
      const marquee = gsap.fromTo(
        groups,
        { xPercent: reversed ? -100 : 0 },
        { xPercent: reversed ? 0 : -100, duration, ease: 'none', repeat: -1 }
      );
      marquee.progress(reversed ? .63 : .27);

      gsap.fromTo(
        slider,
        { x: reversed ? `${overflow}vw` : '0vw' },
        {
          x: reversed ? '0vw' : `${-overflow}vw`,
          ease: 'none',
          scrollTrigger: { trigger: slider, start: 'top bottom', end: 'bottom top', scrub: true }
        }
      );

      let scrollDirection = 1;
      ScrollTrigger.create({
        trigger: slider,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (trigger) => {
          if (scrollDirection === trigger.direction) return;
          scrollDirection = trigger.direction;
          marquee.timeScale(scrollDirection);
        }
      });

      const dragStrength = .023 * (Number(slider.dataset.duration) || 60);
      const [draggable] = Draggable.create(drag, {
        allowContextMenu: true,
        minimumMovement: 4,
        type: 'x',
        onDrag: function () {
          gsap.set(this.target, { x: 0 });
          gsap.to(marquee, {
            duration: .1,
            overwrite: true,
            timeScale: -this.x * dragStrength * (reversed ? -1 : 1)
          });
          drag.classList.add('about-slider__drag--dragging');
          this.update();
        },
        onDragEnd: function () {
          gsap.to(marquee, { duration: 1.234, ease: 'power3.out', timeScale: scrollDirection });
          gsap.delayedCall(.321, () => drag.classList.remove('about-slider__drag--dragging'));
          this.update();
        }
      });
      draggables.push(draggable);
    });
  });

  ScrollTrigger.refresh();
  cleanup = () => {
    draggables.forEach((draggable) => draggable.kill());
    context.revert();
    cleanup = undefined;
  };
  window.addEventListener('pagehide', cleanup, { once: true });
}
