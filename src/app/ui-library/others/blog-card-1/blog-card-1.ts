import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card-1.html',
  styleUrl: './blog-card-1.scss'
})
export class BlogCard1 {
  posts = [
    { color: '#4f46e5', category: 'Design', title: 'Les 10 tendances UI/UX de 2026', excerpt: 'Découvrez les tendances qui vont dominer le design digital cette année, de l\'IA générative aux interfaces adaptatives.', author: 'Sophie M.', date: '28 mars 2026', readTime: 5 },
    { color: '#0ea5e9', category: 'Développement', title: 'Angular 19 : Nouveautés et migration', excerpt: 'Tour d\'horizon des nouvelles fonctionnalités d\'Angular 19 et guide complet pour migrer vos applications existantes.', author: 'Lucas B.', date: '25 mars 2026', readTime: 8 },
    { color: '#10b981', category: 'Performance', title: 'Optimiser le Core Web Vitals en 2026', excerpt: 'Stratégies avancées pour améliorer LCP, FID et CLS et booster votre référencement naturel.', author: 'Emma D.', date: '20 mars 2026', readTime: 6 }
  ];
}
