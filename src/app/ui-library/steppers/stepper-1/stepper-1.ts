import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-stepper-1', standalone: true, imports: [CommonModule], templateUrl: './stepper-1.html', styleUrls: ['./stepper-1.scss'] })
export class Stepper1 {
  current = 1;
  steps = [
    { n: 1, label: 'Account', desc: 'Basic info' },
    { n: 2, label: 'Profile', desc: 'Your details' },
    { n: 3, label: 'Billing', desc: 'Payment' },
    { n: 4, label: 'Done', desc: 'Finish' },
  ];
  next() { if(this.current < this.steps.length) this.current++; }
  prev() { if(this.current > 1) this.current--; }
}
