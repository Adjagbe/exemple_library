import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-1.html',
  styleUrls: ['./timeline-1.scss']
})
export class Timeline1Component {
  items = [
    { year: '2018', title: 'Fondation', desc: 'L\'entreprise est fondée dans un petit appartement parisien avec 3 co-fondateurs et une grande ambition.', color: '#4f46e5' },
    { year: '2019', title: 'Premier financement', desc: 'Levée de 500k€ en seed round. Recrutement des premières équipes tech et design.', color: '#0ea5e9' },
    { year: '2020', title: 'Lancement du produit', desc: 'Lancement public de la v1. Plus de 10 000 utilisateurs inscrits dans les 30 premiers jours.', color: '#10b981' },
    { year: '2022', title: 'Série A', desc: 'Levée de 5M€. Expansion internationale en Espagne, Italie et Royaume-Uni.', color: '#f59e0b' },
    { year: '2024', title: 'Cap des 500k utilisateurs', desc: 'La plateforme dépasse le demi-million d\'utilisateurs actifs mensuels à travers 12 pays.', color: '#ec4899' }
  ];
}
