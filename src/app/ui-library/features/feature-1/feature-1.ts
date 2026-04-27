import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-feature-1', standalone: true, imports: [CommonModule], templateUrl: './feature-1.html', styleUrls: ['./feature-1.scss'] })
export class Feature1 {
  features = [
    {  title:'Blazing Fast', desc:'Sub-50ms response times with our global edge network spanning 30+ regions.', color:'#f59e0b' },
    {  title:'Enterprise Security', desc:'SOC2 Type II, GDPR compliant. End-to-end encryption on all data in transit.', color:'#6366f1' },
    {  title:'Advanced Analytics', desc:'Real-time dashboards with AI-powered insights and predictive modeling.', color:'#10b981' },
    {  title:'Developer First', desc:'RESTful APIs, webhooks, SDKs in 12 languages. Full documentation coverage.', color:'#ec4899' },
    {  title:'Global Scale', desc:'Auto-scaling infrastructure that handles millions of concurrent connections.', color:'#8b5cf6' },
    {  title:'24/7 Support', desc:'Dedicated customer success team with 15-minute SLA response guarantee.', color:'#0ea5e9' },
  ];
}
