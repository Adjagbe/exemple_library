import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-success-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SuccessModalComponent {
  showModal = true;
  modalData = {
    title: 'Inscription réussie !',
    message: 'Bienvenue dans notre communauté ! Votre compte a été créé avec succès. Vous pouvez maintenant accéder à toutes les fonctionnalités.',
    icon: 'bi-person-check-fill',
    actionLabel: 'Commencer'
  };

  openModal(): void { this.showModal = true; }
  closeModal(): void { this.showModal = false; }
}
