import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NAV_LINKS } from '../../data/navigation';
import { SITE } from '../../data/site.config';
import { IconComponent } from '../../shared/icon/icon.component';
import { buildWhatsappUrl } from '../../utils/whatsapp';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly siteName = SITE.name;
  protected readonly navLinks = NAV_LINKS;
  protected readonly whatsappUrl = buildWhatsappUrl();

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
