import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-testimonial-1', standalone: true, imports: [CommonModule], templateUrl: './testimonial-1.html', styleUrls: ['./testimonial-1.scss'] })
export class Testimonial1 {
  reviews = [
    { name:'Sarah Chen', role:'CTO, Vertiblock', avatar:'SC', text:'Migrated our entire infra in a weekend. The DX is unmatched.', stars:5 },
    { name:'Marcus Lee', role:'Lead Dev, Nomads', avatar:'ML', text:'We cut deployment time by 80%. The team can\'t stop talking about it.', stars:5 },
    { name:'Priya Sharma', role:'Founder, Lunarise', avatar:'PS', text:'Finally a platform that grows with you without surprise bills.', stars:5 },
    { name:'Tomas Eriksson', role:'Eng Manager, Fintek', avatar:'TE', text:'The support team is incredible. Issues resolved in under 15 minutes.', stars:5 },
    { name:'Ana Souza', role:'DevOps, Strati', avatar:'AS', text:'Auto-scaling saved us during a viral moment. Zero downtime.', stars:5 },
    { name:'James Okafor', role:'Architect, Nuvana', avatar:'JO', text:'Clean APIs, great docs. The integration took half a day.', stars:5 },
  ];
  get stars() { return [1,2,3,4,5]; }
}
