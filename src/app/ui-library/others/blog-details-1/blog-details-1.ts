import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details-1.html',
  styleUrl: './blog-details-1.scss'
})
export class BlogDetails1 {
  tags = ['Angular', 'Design System', 'TypeScript', 'UX'];
  related = [
    { color: '#4f46e5', title: 'Angular 19 : Nouveautés', date: '25 mars 2026' },
    { color: '#0ea5e9', title: 'Core Web Vitals 2026', date: '20 mars 2026' },
    { color: '#10b981', title: 'TypeScript 5.5 : Guide', date: '15 mars 2026' }
  ];
}
