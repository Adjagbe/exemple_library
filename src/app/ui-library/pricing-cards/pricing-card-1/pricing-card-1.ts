import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-pricing-card-1', standalone: true, imports: [CommonModule], templateUrl: './pricing-card-1.html', styleUrls: ['./pricing-card-1.scss'] })
export class PricingCard1 {
  annual = false;
  plans = [
    { name:'Starter', monthly:0, annual:0, desc:'Perfect to get started', color:'#6366f1', features:['5 projects','1 GB storage','Basic analytics','Email support'], cta:'Get started free' },
    { name:'Pro', monthly:29, annual:19, desc:'For growing teams', color:'#8b5cf6', popular:true, features:['Unlimited projects','50 GB storage','Advanced analytics','Priority support','Custom domain'], cta:'Start free trial' },
    { name:'Enterprise', monthly:99, annual:79, desc:'For large organisations', color:'#ec4899', features:['Everything in Pro','500 GB storage','SLA guarantee','Dedicated manager','SSO & audit logs'], cta:'Contact sales' },
  ];
  price(p: any) { return this.annual ? p.annual : p.monthly; }
}
