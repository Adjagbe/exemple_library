import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-2.html',
  styleUrls: ['./timeline-2.scss']
})
export class Timeline2Component {
  items = [
    { side: 'left', date: 'Janv. 2019', title: 'Création de l\'entreprise', desc: 'Fondation avec une équipe de 4 passionnés du numérique.', icon: 'bi-rocket-takeoff', color: '#4f46e5' },
    { side: 'right', date: 'Juin 2019', title: 'Premier client', desc: 'Signature du premier contrat avec une PME locale.', icon: 'bi-handshake', color: '#0ea5e9' },
    { side: 'left', date: 'Mars 2020', title: 'Pivot produit', desc: 'Repositionnement vers le SaaS B2B après retours marché.', icon: 'bi-arrow-repeat', color: '#10b981' },
    { side: 'right', date: 'Sept. 2021', title: 'Prix de l\'innovation', desc: 'Récompensés au salon VivaTech pour notre solution IA.', icon: 'bi-trophy', color: '#f59e0b' },
    { side: 'left', date: 'Déc. 2023', title: 'IPO annoncé', desc: 'Introduction en bourse prévue pour Q1 2024.', icon: 'bi-graph-up-arrow', color: '#ec4899' }
  ];
}
