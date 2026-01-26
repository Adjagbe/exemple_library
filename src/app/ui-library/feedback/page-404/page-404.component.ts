// ═══════════════════════════════════════════════════════════════
// PAGE 404 COMPONENT - Premium UI Library
// Custom 404 Not Found error page
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-page-404',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page-404.component.html',
  styleUrls: ['./page-404.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Page404Component {
  searchQuery: string = '';

  popularLinks = [
    { label: 'Accueil', url: '/', icon: 'bi-house' },
    { label: 'Tableau de bord', url: '/dashboard', icon: 'bi-grid' },
    { label: 'Produits', url: '/products', icon: 'bi-box' },
    { label: 'Support', url: '/support', icon: 'bi-headset' }
  ];

  onSearch(): void {
    console.log('Search:', this.searchQuery);
  }

  goBack(): void {
    window.history.back();
  }

  goHome(): void {
    console.log('Navigate to home');
  }
}
