import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-kanban-1', standalone: true, imports: [CommonModule], templateUrl: './kanban-1.html', styleUrls: ['./kanban-1.scss'] })
export class Kanban1 {
  columns = [
    { title:'Backlog', color:'#94a3b8', cards:[
      { title:'Research competitors', tag:'Strategy', avatar:'JD' },
      { title:'Write API docs', tag:'Dev', avatar:'ML' },
    ]},
    { title:'In Progress', color:'#f59e0b', cards:[
      { title:'Design onboarding flow', tag:'Design', avatar:'SC' },
      { title:'Fix auth bug #243', tag:'Dev', avatar:'JD' },
    ]},
    { title:'Review', color:'#6366f1', cards:[
      { title:'Landing page v3', tag:'Design', avatar:'EF' },
    ]},
    { title:'Done', color:'#34d399', cards:[
      { title:'Set up CI/CD pipeline', tag:'Infra', avatar:'ML' },
      { title:'Integrate Stripe', tag:'Dev', avatar:'SC' },
    ]},
  ];
}
