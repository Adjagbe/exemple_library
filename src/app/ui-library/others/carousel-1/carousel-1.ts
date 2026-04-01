import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-1.html',
  styleUrl: './carousel-1.scss'
})
export class Carousel1 {
  current = 0;
  slides = [
    { color: '#4f46e5', title: 'Slide 1  Design moderne', subtitle: 'Des interfaces qui inspirent confiance et engagement.' },
    { color: '#0ea5e9', title: 'Slide 2  Performance', subtitle: 'Chargement ultra-rapide sur tous les appareils.' },
    { color: '#10b981', title: 'Slide 3  Accessibilité', subtitle: 'Conçu pour être utilisé par tout le monde.' }
  ];
  prev() { this.current = (this.current - 1 + this.slides.length) % this.slides.length; }
  next() { this.current = (this.current + 1) % this.slides.length; }
  go(i: number) { this.current = i; }
}
