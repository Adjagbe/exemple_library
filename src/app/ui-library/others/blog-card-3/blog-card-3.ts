import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card-3.html',
  styleUrl: './blog-card-3.scss'
})
export class BlogCard3 {
  posts = [
    { color: '#111827', category: 'Design', title: 'Typographie pour le Web moderne', excerpt: 'Choisir les bonnes polices peut transformer l\'expérience utilisateur.', author: 'A.Leroy', date: '28 mars', readTime: 4, likes: 128 },
    { color: '#1e3a5f', category: 'Tech', title: 'Micro-frontends en production', excerpt: 'Retour d\'expérience après 2 ans de micro-frontends en prod.', author: 'T.Martin', date: '24 mars', readTime: 9, likes: 94 },
    { color: '#374151', category: 'Produit', title: 'Jobs-to-be-done : guide pratique', excerpt: 'Comprendre ce que vos utilisateurs veulent vraiment accomplir.', author: 'C.Blanc', date: '19 mars', readTime: 6, likes: 212 },
    { color: '#4b5563', category: 'Growth', title: 'A/B testing : les erreurs à éviter', excerpt: 'Les pièges classiques qui faussent vos résultats de tests.', author: 'M.Petit', date: '15 mars', readTime: 5, likes: 67 }
  ];
}
