import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Testimonial {
  stars: number;
  text: string;
  avatarInitials: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials-section',
  imports: [CommonModule],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.scss',
})
export class TestimonialsSection {

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
