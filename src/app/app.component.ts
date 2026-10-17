import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HoursComponent } from './components/hours/hours.component';
import { HowToBuyComponent } from './components/how-to-buy/how-to-buy.component';
import { LocationComponent } from './components/location/location.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    HowToBuyComponent,
    HoursComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {}
