import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_CHANNELS } from '../../data/contact-channels';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-contact',
  imports: [SectionHeadingComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly channels = CONTACT_CHANNELS;
}
