import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SITE_FULL_ADDRESS } from '../../data/site.config';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly site = SITE;
  protected readonly fullAddress = SITE_FULL_ADDRESS;
  protected readonly year = new Date().getFullYear();
}
