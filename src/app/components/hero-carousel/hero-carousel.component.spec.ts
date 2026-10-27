import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HERO_SLIDES } from '../../data/hero-slides';
import { HeroCarouselComponent } from './hero-carousel.component';

describe('HeroCarouselComponent', () => {
  let fixture: ComponentFixture<HeroCarouselComponent>;
  let element: HTMLElement;

  const activeIndex = (): number =>
    Array.from(element.querySelectorAll('.carousel__slide')).findIndex((slide) =>
      slide.classList.contains('carousel__slide--active'),
    );

  const click = (selector: string): void => {
    element.querySelector<HTMLButtonElement>(selector)!.click();
    fixture.detectChanges();
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCarouselComponent);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('exibe uma foto e um ponto de navegação para cada slide', () => {
    expect(element.querySelectorAll('.carousel__slide').length).toBe(HERO_SLIDES.length);
    expect(element.querySelectorAll('.carousel__dot').length).toBe(HERO_SLIDES.length);
  });

  it('começa na primeira foto', () => {
    expect(activeIndex()).toBe(0);
  });

  it('avança e volta entre as fotos, de forma circular', () => {
    click('.carousel__arrow--next');
    expect(activeIndex()).toBe(1 % HERO_SLIDES.length);

    click('.carousel__arrow--prev');
    expect(activeIndex()).toBe(0);

    click('.carousel__arrow--prev');
    expect(activeIndex()).toBe(HERO_SLIDES.length - 1);
  });

  it('vai direto para a foto escolhida pelo ponto', () => {
    const dots = element.querySelectorAll<HTMLButtonElement>('.carousel__dot');
    dots[HERO_SLIDES.length - 1].click();
    fixture.detectChanges();

    expect(activeIndex()).toBe(HERO_SLIDES.length - 1);
    expect(dots[HERO_SLIDES.length - 1].getAttribute('aria-current')).toBe('true');
  });

  it('esconde dos leitores de tela as fotos que não estão visíveis', () => {
    const hidden = element.querySelectorAll('.carousel__slide[aria-hidden="true"]');

    expect(hidden.length).toBe(HERO_SLIDES.length - 1);
  });
});
