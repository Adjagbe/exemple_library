import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ErrorMessage { id: string; title: string; message: string; icon?: string; dismissible?: boolean; }

@Component({
  selector: 'ui-error-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-toast.component.html',
  styleUrl: './error-toast.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ErrorToastComponent {
  toasts: ErrorMessage[] = [
    { id: '1', title: 'Échec de connexion', message: 'Impossible de se connecter au serveur. Veuillez réessayer.', dismissible: true },
    { id: '2', title: 'Erreur', message: 'Le fichier est trop volumineux (max 10 Mo).', icon: 'bi-exclamation-triangle-fill', dismissible: true }
  ];

  dismissToast(id: string): void { this.toasts = this.toasts.filter(t => t.id !== id); }
}
