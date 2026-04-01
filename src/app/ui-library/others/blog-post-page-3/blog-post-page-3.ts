import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-blog-post-page-3', standalone: true, imports: [CommonModule], templateUrl: './blog-post-page-3.html', styleUrl: './blog-post-page-3.scss' })
export class BlogPostPage3 {
  trending = [
    { color: '#4f46e5', num: '01', title: 'Design System scalable', reads: '12.4k' },
    { color: '#0ea5e9', num: '02', title: 'Angular 19 nouveautés', reads: '9.8k' },
    { color: '#10b981', num: '03', title: 'Core Web Vitals 2026', reads: '8.2k' }
  ];
  latest = [
    { color: '#8b5cf6', category: 'UX', title: 'L\'art de la micro-interaction', date: '28 mars' },
    { color: '#f59e0b', category: 'Dev', title: 'Bun vs Node : le verdict', date: '25 mars' },
    { color: '#ef4444', category: 'Biz', title: 'Lever des fonds en 2026', date: '22 mars' },
    { color: '#06b6d4', category: 'Data', title: 'BI avec DuckDB', date: '19 mars' }
  ];
}
