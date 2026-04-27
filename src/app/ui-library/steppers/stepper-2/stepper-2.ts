import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-stepper-2', standalone: true, imports: [CommonModule], templateUrl: './stepper-2.html', styleUrls: ['./stepper-2.scss'] })
export class Stepper2 {
  current = 2;
  steps = [
    { n: 1, label: 'Personal Info', icon: '👤', body: 'Enter your name, email and phone number.' },
    { n: 2, label: 'Address', icon: '📍', body: 'Provide your shipping or billing address.' },
    { n: 3, label: 'Payment', icon: '💳', body: 'Add a credit card or select another method.' },
    { n: 4, label: 'Confirm', icon: '✅', body: 'Review and confirm your order details.' },
  ];
  go(n: number) { this.current = n; }
}
