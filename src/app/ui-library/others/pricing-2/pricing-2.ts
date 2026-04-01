import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-2.html',
  styleUrl: './pricing-2.scss'
})
export class Pricing2 {
  annual = false;
  plans = [
    { name: 'Free', monthlyPrice: 0, annualPrice: 0, features: ['3 utilisateurs', '10 projets', '1 GB'] },
    { name: 'Team', monthlyPrice: 49, annualPrice: 39, features: ['20 utilisateurs', 'Projets illimités', '100 GB', 'Intégrations'] },
    { name: 'Business', monthlyPrice: 99, annualPrice: 79, features: ['100 utilisateurs', 'Projets illimités', '1 TB', 'SSO', 'Analytics', 'Support dédié'] }
  ];
  price(plan: any) { return this.annual ? plan.annualPrice : plan.monthlyPrice; }
}
