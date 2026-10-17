import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HOW_TO_BUY_STEPS } from '../../data/how-to-buy';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { buildWhatsappUrl } from '../../utils/whatsapp';

@Component({
  selector: 'app-how-to-buy',
  imports: [SectionHeadingComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './how-to-buy.component.html',
  styleUrl: './how-to-buy.component.scss',
})
export class HowToBuyComponent {
  protected readonly steps = HOW_TO_BUY_STEPS;
  protected readonly whatsappUrl = buildWhatsappUrl();
}
