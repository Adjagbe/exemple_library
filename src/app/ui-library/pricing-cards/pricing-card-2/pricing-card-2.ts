import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-pricing-card-2', standalone: true, imports: [CommonModule], templateUrl: './pricing-card-2.html', styleUrls: ['./pricing-card-2.scss'] })
export class PricingCard2 {
  plans = [
    { name:'Free', price:'€0', period:'forever', features:['3 projects','Community support','1 user'], accent:'#6366f1' },
    { name:'Growth', price:'€49', period:'/month', features:['Unlimited projects','Priority email','Up to 10 users','API access'], accent:'#8b5cf6', hot:true },
    { name:'Scale', price:'€149', period:'/month', features:['Everything in Growth','Dedicated Slack','Unlimited users','SLA 99.99%'], accent:'#ec4899' },
  ];
}
