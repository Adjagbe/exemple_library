import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-feature-section-white',
  imports: [CommonModule],
  templateUrl: './feature-section-white.html',
  styleUrl: './feature-section-white.scss',
})
export class FeatureSectionWhite {

  featuresWhite: Feature[] = [
      { icon: 'bi-lightning-charge', title: 'Performance', description: 'Interface ultra-rapide avec un temps de chargement inférieur à 200ms.' },
      { icon: 'bi-shield-check', title: 'Sécurité', description: 'Chiffrement AES-256 et conformité RGPD pour protéger vos données.' },
      { icon: 'bi-graph-up-arrow', title: 'Analytics', description: 'Tableaux de bord personnalisables avec des métriques en temps réel.' },
      { icon: 'bi-people', title: 'Collaboration', description: 'Travaillez en équipe avec des espaces partagés et des permissions.' },
      { icon: 'bi-puzzle', title: 'Intégrations', description: 'Connectez vos outils favoris parmi plus de 200 intégrations.' },
      { icon: 'bi-headset', title: 'Support 24/7', description: 'Une équipe dédiée disponible à tout moment pour vous aider.' }
    ];
  
}
