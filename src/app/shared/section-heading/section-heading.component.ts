import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SectionTone = 'on-light' | 'on-dark';

/** Cabeçalho padrão das seções: sobretítulo, título e texto de apoio opcional (conteúdo projetado). */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss',
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly tone = input<SectionTone>('on-light');
}
