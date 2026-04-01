import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cookie-consent-2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cookie-consent-2.html',
  styleUrls: ['./cookie-consent-2.scss']
})
export class CookieConsent2Component {
  visible = true;
  prefs = { analytics: true, marketing: false, functional: true };
  step: 'main' | 'settings' = 'main';
  accept() { this.visible = false; }
  save() { this.visible = false; }
}
