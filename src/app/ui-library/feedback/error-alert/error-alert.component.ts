import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ErrorAlert { id: string; title: string; message: string; icon?: string; actionLabel?: string; }

@Component({
  selector: 'ui-error-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ErrorAlertComponent {
  alerts: ErrorAlert[] = [
    { id: 'a1', title: 'Action impossible', message: 'Vous n\'avez pas les permissions nécessaires pour effectuer cette action.', icon: 'bi-shield-x' },
    { id: 'a2', title: 'Session expirée', message: 'Votre session a expiré. Veuillez vous reconnecter.', icon: 'bi-clock-history', actionLabel: 'Se reconnecter' }
  ];

  dismissAlert(id: string): void { this.alerts = this.alerts.filter(a => a.id !== id); }
  onAction(id: string): void { console.log('Action:', id); }
}
