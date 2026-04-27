import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cookie-banner-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cookie-banner-1.html',
  styleUrls: ['./cookie-banner-1.scss']
})
export class CookieBanner1 {
  visible = true;
  analytics = false;
  marketing = false;

  acceptAll() {
    this.analytics = true;
    this.marketing = true;
    this.visible = false;
  }

  saveSelection() {
    this.visible = false;
  }

  rejectAll() {
    this.analytics = false;
    this.marketing = false;
    this.visible = false;
  }
}
