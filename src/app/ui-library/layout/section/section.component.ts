import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  stars: number;
  text: string;
  avatarInitials: string;
  name: string;
  role: string;
}

export interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'ui-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SectionComponent {
  featuresWhite: Feature[] = [
    { icon: 'bi-lightning-charge', title: 'Performance', description: 'Interface ultra-rapide avec un temps de chargement inférieur à 200ms.' },
    { icon: 'bi-shield-check', title: 'Sécurité', description: 'Chiffrement AES-256 et conformité RGPD pour protéger vos données.' },
    { icon: 'bi-graph-up-arrow', title: 'Analytics', description: 'Tableaux de bord personnalisables avec des métriques en temps réel.' },
    { icon: 'bi-people', title: 'Collaboration', description: 'Travaillez en équipe avec des espaces partagés et des permissions.' },
    { icon: 'bi-puzzle', title: 'Intégrations', description: 'Connectez vos outils favoris parmi plus de 200 intégrations.' },
    { icon: 'bi-headset', title: 'Support 24/7', description: 'Une équipe dédiée disponible à tout moment pour vous aider.' }
  ];

  featuresDark: Feature[] = [
    { icon: 'bi-speedometer2', title: 'Rapidité', description: 'Déploiement en 5 minutes, sans configuration complexe.' },
    { icon: 'bi-arrows-fullscreen', title: 'Scalabilité', description: 'Architecture cloud qui s\'adapte à votre croissance.' },
    { icon: 'bi-palette', title: 'Personnalisation', description: 'Interface entièrement personnalisable selon vos besoins.' }
  ];

  stats: Stat[] = [
    { value: '10K+', label: 'Utilisateurs actifs' },
    { value: '99.9%', label: 'Disponibilité' },
    { value: '150+', label: 'Pays couverts' },
    { value: '4.9/5', label: 'Satisfaction client' }
  ];

  testimonials: Testimonial[] = [
    { stars: 5, text: "Une plateforme incroyable qui a transformé notre façon de travailler. L'interface est intuitive et les fonctionnalités sont exactement ce dont nous avions besoin.", avatarInitials: 'ML', name: 'Marie Laurent', role: 'CEO, TechStart' },
    { stars: 5, text: "Le support client est exceptionnel. Chaque fois que nous avons eu besoin d'aide, l'équipe a répondu rapidement et efficacement.", avatarInitials: 'TM', name: 'Thomas Martin', role: 'CTO, InnovaLab' },
    { stars: 4.5, text: "Nous avons réduit nos coûts opérationnels de 40% grâce à l'automatisation. Un investissement qui s'est rentabilisé en 2 mois.", avatarInitials: 'SD', name: 'Sophie Dubois', role: 'COO, DataFlow' }
  ];

  getStars(count: number): string[] {
    const full = Math.floor(count);
    const half = count % 1 >= 0.5;
    const stars: string[] = [];
    for (let i = 0; i < full; i++) stars.push('bi-star-fill');
    if (half) stars.push('bi-star-half');
    return stars;
  }
}
