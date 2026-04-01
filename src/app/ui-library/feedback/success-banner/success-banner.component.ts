import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-success-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-banner.component.html',
  styleUrl: './success-banner.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SuccessBannerComponent {
  banner = {
    title: 'Paiement confirmé',
    message: 'Votre commande #12345 a été validée. Un email de confirmation vous a été envoyé.',
    icon: 'bi-bag-check-fill'
  };

  onViewOrder(): void { console.log('View order'); }
}
