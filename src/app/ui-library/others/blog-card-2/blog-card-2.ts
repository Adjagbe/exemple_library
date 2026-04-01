import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card-2.html',
  styleUrl: './blog-card-2.scss'
})
export class BlogCard2 {
  featured = { color: '#7c3aed', category: 'Featured', title: 'Comment construire un Design System scalable en 2026', excerpt: 'Un design system robuste est le fondement de toute expérience produit cohérente. Voici notre approche éprouvée après 50+ projets.', author: 'Sophie Martin', initials: 'SM', date: '28 mars 2026', readTime: 12 };
  posts = [
    { color: '#0ea5e9', category: 'Tech', title: 'TypeScript 5.5 : ce qui change', excerpt: 'Les nouvelles fonctionnalités qui vont transformer votre workflow.', author: 'Lucas B.', initials: 'LB', date: '25 mars', readTime: 5 },
    { color: '#f59e0b', category: 'Produit', title: 'OKRs vs KPIs : laquelle choisir ?', excerpt: 'Comprendre les différences pour mieux piloter votre croissance.', author: 'Emma D.', initials: 'ED', date: '22 mars', readTime: 4 },
    { color: '#10b981', category: 'Growth', title: 'SEO technique : check-list 2026', excerpt: 'Tous les points à vérifier pour un audit SEO complet.', author: 'Noah L.', initials: 'NL', date: '18 mars', readTime: 7 }
  ];
}
