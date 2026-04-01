import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Stat {
  value: string;
  label: string;
}


@Component({
  selector: 'app-stats-section',
  imports: [CommonModule],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
})
export class StatsSection {
 stats: Stat[] = [
    { value: '10K+', label: 'Utilisateurs actifs' },
    { value: '99.9%', label: 'Disponibilité' },
    { value: '150+', label: 'Pays couverts' },
    { value: '4.9/5', label: 'Satisfaction client' }
  ];
}
