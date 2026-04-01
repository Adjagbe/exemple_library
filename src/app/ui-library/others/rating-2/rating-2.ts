import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-2.html',
  styleUrls: ['./rating-2.scss']
})
export class Rating2Component {
  stars = [1, 2, 3, 4, 5];
  ratings: { [key: string]: number } = { quality: 0, service: 0, price: 0, delivery: 0 };
  hover: { [key: string]: number } = {};
  categories = [
    { key: 'quality', label: 'Qualité du produit', icon: 'bi-gem' },
    { key: 'service', label: 'Service client', icon: 'bi-headset' },
    { key: 'price', label: 'Rapport qualité/prix', icon: 'bi-tag' },
    { key: 'delivery', label: 'Livraison', icon: 'bi-truck' }
  ];
  set(cat: string, n: number) { this.ratings[cat] = n; }
  arr(n: number) { return Array(n).fill(0); }
  get avg() {
    const vals = Object.values(this.ratings).filter(v => v > 0);
    return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : '—';
  }
}
