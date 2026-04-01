import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-3.html',
  styleUrl: './carousel-3.scss'
})
export class Carousel3 {
  current = 0;
  testimonials = [
    { color: '#4f46e5', initials: 'SM', name: 'Sophie Martin', role: 'CEO, TechCorp', text: '« Ce produit a transformé la façon dont notre équipe travaille. La productivité a augmenté de 40% en seulement 3 mois. »', stars: 5 },
    { color: '#0ea5e9', initials: 'LB', name: 'Lucas Bernard', role: 'CTO, Startup', text: '« Interface intuitive, support exceptionnel. Je recommande à toutes les startups qui veulent scaler rapidement. »', stars: 5 },
    { color: '#10b981', initials: 'ED', name: 'Emma Dubois', role: 'Designer, Agency', text: '« Les composants sont magnifiques et parfaitement documentés. Mon équipe a pu démarrer en quelques heures. »', stars: 5 }
  ];
  prev() { this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length; }
  next() { this.current = (this.current + 1) % this.testimonials.length; }
  stars(n: number) { return Array(n).fill(0); }
}
