// ═══════════════════════════════════════════════════════════════
// SUCCESS MESSAGE COMPONENT - Premium UI Library
// Success notification and message displays
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SuccessMessage {
  id: string;
  type: 'toast' | 'banner' | 'inline' | 'modal';
  title: string;
  message: string;
  icon?: string;
  action?: { label: string; callback: () => void };
  dismissible?: boolean;
  autoClose?: number;
}

@Component({
  selector: 'ui-success-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuccessMessageComponent {
  // Toast notifications
  toasts: SuccessMessage[] = [
    { id: '1', type: 'toast', title: 'Succès !', message: 'Votre fichier a été uploadé avec succès.', dismissible: true },
    { id: '2', type: 'toast', title: 'Enregistré', message: 'Les modifications ont été sauvegardées.', icon: 'bi-check-circle-fill', dismissible: true }
  ];

  // Banner
  banner: SuccessMessage = {
    id: 'banner1',
    type: 'banner',
    title: 'Paiement confirmé',
    message: 'Votre commande #12345 a été validée. Un email de confirmation vous a été envoyé.',
    icon: 'bi-bag-check-fill',
    action: { label: 'Voir la commande', callback: () => console.log('View order') }
  };

  // Inline messages
  inlineMessages: SuccessMessage[] = [
    { id: 'i1', type: 'inline', title: '', message: 'Profil mis à jour avec succès', icon: 'bi-check-lg' },
    { id: 'i2', type: 'inline', title: 'Email vérifié', message: 'Votre adresse email a été confirmée.', icon: 'bi-envelope-check' }
  ];

  // Modal success
  showModal: boolean = true;
  modalData: SuccessMessage = {
    id: 'modal1',
    type: 'modal',
    title: 'Inscription réussie !',
    message: 'Bienvenue dans notre communauté ! Votre compte a été créé avec succès. Vous pouvez maintenant accéder à toutes les fonctionnalités.',
    icon: 'bi-person-check-fill',
    action: { label: 'Commencer', callback: () => this.closeModal() }
  };

  dismissToast(id: string): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  closeModal(): void {
    this.showModal = false;
  }

  openModal(): void {
    this.showModal = true;
  }
}
