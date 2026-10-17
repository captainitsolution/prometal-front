import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS_HOURS } from '../../data/business-hours';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-hours',
  imports: [SectionHeadingComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.scss',
})
export class HoursComponent {
  protected readonly rows = BUSINESS_HOURS;
}
