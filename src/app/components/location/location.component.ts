import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE } from '../../data/site.config';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

const { lat, lng } = SITE.coordinates;

@Component({
  selector: 'app-location',
  imports: [SectionHeadingComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  protected readonly address = SITE.address;
  protected readonly directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  /** URL fixa e confiável (constante do projeto), por isso pode ser marcada como segura. */
  protected readonly mapEmbedUrl: SafeResourceUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`,
  );
}
