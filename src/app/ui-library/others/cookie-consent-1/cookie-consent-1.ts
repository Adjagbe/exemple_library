import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-consent-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent-1.html',
  styleUrls: ['./cookie-consent-1.scss']
})
export class CookieConsent1Component {
  visible = true;
  acceptAll() { this.visible = false; }
  decline() { this.visible = false; }
}
