import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-1.html',
  styleUrls: ['./rating-1.scss']
})
export class Rating1Component {
  Math = Math;
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hover = 0;
  reviews = [
    { name: 'Sophie M.', avatar: 'S', stars: 5, date: '12 janv. 2025', text: 'Excellent produit, je le recommande à 100 % !' },
    { name: 'Marc D.', avatar: 'M', stars: 4, date: '8 janv. 2025', text: 'Très satisfait, livraison rapide et emballage soigné.' },
    { name: 'Lucie K.', avatar: 'L', stars: 5, date: '3 janv. 2025', text: 'Je suis impressionnée par la qualité. Parfait !' }
  ];
  avg = 4.7;
  total = 128;
  distribution = [
    { stars: 5, pct: 73 }, { stars: 4, pct: 18 }, { stars: 3, pct: 5 }, { stars: 2, pct: 2 }, { stars: 1, pct: 2 }
  ];
  set(n: number) { this.rating = n; }
  arr(n: number) { return Array(n).fill(0); }
}
