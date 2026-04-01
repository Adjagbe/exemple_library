import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-blog-post-page-2', standalone: true, imports: [CommonModule], templateUrl: './blog-post-page-2.html', styleUrl: './blog-post-page-2.scss' })
export class BlogPostPage2 {
  categories = ['Tous', 'Design', 'Tech', 'Produit', 'Growth'];
  active = 'Tous';
  posts = [
    { color: '#4f46e5', category: 'Design', title: 'Design Tokens en 2026', date: '28 mars', readTime: 5 },
    { color: '#0ea5e9', category: 'Tech', title: 'Signals dans Angular', date: '24 mars', readTime: 8 },
    { color: '#10b981', category: 'Growth', title: 'Product-Led Growth', date: '20 mars', readTime: 6 },
    { color: '#f59e0b', category: 'Produit', title: 'Roadmap produit efficace', date: '16 mars', readTime: 4 },
    { color: '#ef4444', category: 'Design', title: 'Motion Design avancé', date: '12 mars', readTime: 7 },
    { color: '#8b5cf6', category: 'Tech', title: 'SSR vs CSR en 2026', date: '8 mars', readTime: 9 }
  ];
  get filtered() { return this.active === 'Tous' ? this.posts : this.posts.filter(p => p.category === this.active); }
  select(c: string) { this.active = c; }
}
