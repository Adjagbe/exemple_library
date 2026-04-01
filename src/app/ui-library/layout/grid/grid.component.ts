import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DashCard {
  title: string;
  value: string;
  change: string;
  direction: 'up' | 'down';
}

@Component({
  selector: 'ui-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {
  dashCards: DashCard[] = [
    { title: 'Revenus', value: '€24,580', change: '+12.5%', direction: 'up' },
    { title: 'Utilisateurs', value: '2,847', change: '+8.3%', direction: 'up' },
    { title: 'Commandes', value: '486', change: '-2.1%', direction: 'down' },
    { title: 'Conversion', value: '3.24%', change: '+0.8%', direction: 'up' }
  ];

  galleryItems = [
    { tall: true, wide: false },
    { tall: false, wide: false },
    { tall: false, wide: false },
    { tall: false, wide: true },
    { tall: false, wide: false },
    { tall: false, wide: false },
    { tall: true, wide: false },
    { tall: false, wide: true }
  ];
}
