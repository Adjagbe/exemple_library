import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-error-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-banner.component.html',
  styleUrl: './error-banner.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ErrorBannerComponent {
  banner = {
    title: 'Paiement refusé',
    message: 'Votre carte bancaire a été refusée. Veuillez vérifier vos informations ou utiliser un autre moyen de paiement.',
    icon: 'bi-credit-card-2-back',
    code: 'ERR_PAYMENT_DECLINED'
  };

  onRetry(): void { console.log('Retry payment'); }
}
