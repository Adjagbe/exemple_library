import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-blog-post-page-1', standalone: true, imports: [CommonModule], templateUrl: './blog-post-page-1.html', styleUrl: './blog-post-page-1.scss' })
export class BlogPostPage1 {
  posts = [
    { color: '#4f46e5', category: 'Design', title: 'Créer un Design System scalable', date: '28 mars 2026', readTime: 8, featured: true },
    { color: '#0ea5e9', category: 'Tech', title: 'Angular 19 : Guide complet', date: '25 mars', readTime: 10, featured: false },
    { color: '#10b981', category: 'Growth', title: 'SEO technique en 2026', date: '20 mars', readTime: 6, featured: false },
    { color: '#f59e0b', category: 'Produit', title: 'JTBD framework pratique', date: '15 mars', readTime: 5, featured: false },
    { color: '#ef4444', category: 'Perf', title: 'Optimiser le Core Web Vitals', date: '10 mars', readTime: 7, featured: false }
  ];
  get featured() { return this.posts[0]; }
  get rest() { return this.posts.slice(1); }
}
