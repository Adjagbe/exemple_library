import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-2.html',
  styleUrl: './carousel-2.scss'
})
export class Carousel2 {
  current = 0;
  cards = [
    { color: '#7c3aed', icon: 'bi-rocket-takeoff', title: 'Déploiement rapide', desc: 'Mettez en production en quelques minutes.' },
    { color: '#0ea5e9', icon: 'bi-shield-check', title: 'Sécurité renforcée', desc: 'Chiffrement de bout en bout, SOC2 certifié.' },
    { color: '#10b981', icon: 'bi-graph-up-arrow', title: 'Analytics avancés', desc: 'Tableaux de bord temps réel et prédictifs.' },
    { color: '#f59e0b', icon: 'bi-people', title: 'Collaboration', desc: 'Travaillez ensemble en temps réel.' },
    { color: '#ef4444', icon: 'bi-gear', title: 'Intégrations', desc: '200+ intégrations natives disponibles.' }
  ];
  get visible() { return this.cards.slice(this.current, this.current + 3); }
  prev() { this.current = Math.max(0, this.current - 1); }
  next() { this.current = Math.min(this.cards.length - 3, this.current + 1); }
}
