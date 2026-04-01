import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-1.html',
  styleUrls: ['./widget-1.scss']
})
export class Widget1Component {
  stats = [
    { label: 'Revenus', value: '€48 320', change: '+12.4%', up: true, icon: 'bi-currency-euro' },
    { label: 'Utilisateurs', value: '12 840', change: '+8.1%', up: true, icon: 'bi-people' },
    { label: 'Commandes', value: '3 294', change: '-2.3%', up: false, icon: 'bi-bag' },
    { label: 'Taux de conv.', value: '3.6%', change: '+0.4%', up: true, icon: 'bi-graph-up' }
  ];
  activities = [
    { user: 'Sophie M.', action: 'a passé une commande', time: 'il y a 2 min', color: '#4f46e5' },
    { user: 'Marc D.', action: 'a créé un compte', time: 'il y a 8 min', color: '#10b981' },
    { user: 'Admin', action: 'a publié un article', time: 'il y a 15 min', color: '#f59e0b' },
    { user: 'Lucie K.', action: 'a laissé un avis ⭐⭐⭐⭐⭐', time: 'il y a 22 min', color: '#ec4899' }
  ];
}
