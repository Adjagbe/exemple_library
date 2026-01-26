// ═══════════════════════════════════════════════════════════════
// ERROR MESSAGE COMPONENT - Premium UI Library
// Error notification and message displays
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ErrorMessage {
  id: string;
  type: 'toast' | 'banner' | 'inline' | 'alert';
  title: string;
  message: string;
  icon?: string;
  code?: string;
  action?: { label: string; callback: () => void };
  dismissible?: boolean;
}

@Component({
  selector: 'ui-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorMessageComponent {
  // Toast errors
  toasts: ErrorMessage[] = [
    { id: '1', type: 'toast', title: 'Échec de connexion', message: 'Impossible de se connecter au serveur. Veuillez réessayer.', dismissible: true },
    { id: '2', type: 'toast', title: 'Erreur', message: 'Le fichier est trop volumineux (max 10 Mo).', icon: 'bi-exclamation-triangle-fill', dismissible: true }
  ];

  // Banner error
  banner: ErrorMessage = {
    id: 'banner1',
    type: 'banner',
    title: 'Paiement refusé',
    message: 'Votre carte bancaire a été refusée. Veuillez vérifier vos informations ou utiliser un autre moyen de paiement.',
    icon: 'bi-credit-card-2-back',
    code: 'ERR_PAYMENT_DECLINED',
    action: { label: 'Réessayer', callback: () => console.log('Retry payment') }
  };

  // Inline errors
  inlineErrors: ErrorMessage[] = [
    { id: 'i1', type: 'inline', title: '', message: 'Ce champ est requis', icon: 'bi-exclamation-circle' },
    { id: 'i2', type: 'inline', title: 'Format invalide', message: 'L\'adresse email n\'est pas valide.', icon: 'bi-envelope-x' }
  ];

  // Alert variants
  alerts: ErrorMessage[] = [
    { id: 'a1', type: 'alert', title: 'Action impossible', message: 'Vous n\'avez pas les permissions nécessaires pour effectuer cette action.', icon: 'bi-shield-x' },
    { id: 'a2', type: 'alert', title: 'Session expirée', message: 'Votre session a expiré. Veuillez vous reconnecter.', icon: 'bi-clock-history', action: { label: 'Se reconnecter', callback: () => console.log('Login') } }
  ];

  dismissToast(id: string): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  dismissAlert(id: string): void {
    this.alerts = this.alerts.filter(a => a.id !== id);
  }
}
