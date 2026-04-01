import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SuccessMessage { id: string; title: string; message: string; icon?: string; dismissible?: boolean; }

@Component({
  selector: 'ui-success-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-toast.component.html',
  styleUrl: './success-toast.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SuccessToastComponent {
  toasts: SuccessMessage[] = [
    { id: '1', title: 'Succès !', message: 'Votre fichier a été uploadé avec succès.', dismissible: true },
    { id: '2', title: 'Enregistré', message: 'Les modifications ont été sauvegardées.', icon: 'bi-check-circle-fill', dismissible: true }
  ];

  dismissToast(id: string): void { this.toasts = this.toasts.filter(t => t.id !== id); }
}
