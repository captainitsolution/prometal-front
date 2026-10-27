import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../data/site.config';
import { IconComponent } from '../../shared/icon/icon.component';
import { buildWhatsappUrl } from '../../utils/whatsapp';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';

@Component({
  selector: 'app-hero',
  imports: [IconComponent, HeroCarouselComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly whatsappUrl = buildWhatsappUrl();
  protected readonly phoneUrl = `tel:+${SITE.phone.digits}`;
  protected readonly phoneDisplay = SITE.phone.display;
  protected readonly city = `${SITE.address.district}, ${SITE.address.city} - ${SITE.address.state}`;
}
