import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { buildWhatsappUrl } from '../../utils/whatsapp';

/** Botão flutuante de atalho para o WhatsApp da loja. */
@Component({
  selector: 'app-whatsapp-button',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="whatsapp-button"
      [href]="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento pelo WhatsApp"
    >
      <app-icon name="whatsapp" />
    </a>
  `,
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  protected readonly whatsappUrl = buildWhatsappUrl();
}
