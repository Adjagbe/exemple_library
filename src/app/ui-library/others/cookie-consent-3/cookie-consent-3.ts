import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-consent-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent-3.html',
  styleUrls: ['./cookie-consent-3.scss']
})
export class CookieConsent3Component {
  visible = true;
  accept() { this.visible = false; }
  decline() { this.visible = false; }
}
