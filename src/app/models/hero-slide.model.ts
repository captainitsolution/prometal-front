export interface HeroSlide {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  /** Ponto de foco da imagem no recorte (valor de `object-position`). */
  readonly position: string;
}
