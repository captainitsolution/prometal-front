import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { HERO_SLIDES } from '../../data/hero-slides';
import { IconComponent } from '../../shared/icon/icon.component';

const AUTOPLAY_INTERVAL_MS = 5000;

/** Carrossel de fotos do banner. Troca sozinho, pausa com o mouse/foco e não anima se o usuário pediu menos movimento. */
@Component({
  selector: 'app-hero-carousel',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent {
  protected readonly slides = HERO_SLIDES;
  protected readonly current = signal(0);
  private readonly paused = signal(false);

  constructor() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || this.slides.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      if (!this.paused()) {
        this.next();
      }
    }, AUTOPLAY_INTERVAL_MS);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }

  protected next(): void {
    this.current.update((index) => (index + 1) % this.slides.length);
  }

  protected previous(): void {
    this.current.update((index) => (index - 1 + this.slides.length) % this.slides.length);
  }

  protected goTo(index: number): void {
    this.current.set(index);
  }

  protected setPaused(paused: boolean): void {
    this.paused.set(paused);
  }
}
