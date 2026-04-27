import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-stepper-3', standalone: true, imports: [CommonModule], templateUrl: './stepper-3.html', styleUrls: ['./stepper-3.scss'] })
export class Stepper3 {
  current = 1; total = 4;
  labels = ['Cart', 'Shipping', 'Payment', 'Review'];
  get pct() { return Math.round((this.current / this.total) * 100); }
  next() { if(this.current < this.total) this.current++; }
  prev() { if(this.current > 1) this.current--; }
}
