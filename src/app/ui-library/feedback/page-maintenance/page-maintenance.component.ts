import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-page-maintenance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page-maintenance.component.html',
  styleUrls: ['./page-maintenance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageMaintenanceComponent {
  email: string = '';
  estimatedTime: string = '2 heures';
  progress: number = 65;
  
  statusUpdates = [
    { time: '14:30', message: 'Mise à jour de la base de données en cours', status: 'completed' },
    { time: '14:45', message: 'Migration des données utilisateurs', status: 'completed' },
    { time: '15:00', message: 'Optimisation des performances', status: 'in-progress' },
    { time: '15:30', message: 'Tests de sécurité', status: 'pending' },
    { time: '16:00', message: 'Remise en ligne', status: 'pending' }
  ];

  socialLinks = [
    { icon: 'bi-twitter-x', url: '#', label: 'Twitter' },
    { icon: 'bi-facebook', url: '#', label: 'Facebook' },
    { icon: 'bi-linkedin', url: '#', label: 'LinkedIn' }
  ];

  subscribe(): void {
    if (this.email) {
      console.log('Subscribe:', this.email);
      this.email = '';
    }
  }
}
