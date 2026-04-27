import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-testimonial-2', standalone: true, imports: [CommonModule], templateUrl: './testimonial-2.html', styleUrls: ['./testimonial-2.scss'] })
export class Testimonial2 {
  active = 0;
  quotes = [
    { text:'Switching was the best decision we made in 2024. Our team velocity tripled.', name:'Emily Foster', role:'VP Engineering, Arcana', avatar:'EF' },
    { text:'The onboarding is incredible. From zero to production in a single afternoon.', name:'David Kim', role:'CTO, Launchpad', avatar:'DK' },
    { text:'Security, scale, and speed. We stopped compromising on all three.', name:'Nadia Rossi', role:'Director of Infra, Polaris', avatar:'NR' },
  ];
  go(i: number) { this.active = i; }
}
