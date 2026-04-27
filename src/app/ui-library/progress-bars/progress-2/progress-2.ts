import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-progress-2', standalone: true, imports: [CommonModule], templateUrl: './progress-2.html', styleUrls: ['./progress-2.scss'] })
export class Progress2 {
  steps = [
    { label:'Account', done:true },
    { label:'Details', done:true },
    { label:'Billing', done:false },
    { label:'Review', done:false },
  ];
  skills = [
    { label:'React', pct:88, color:'#61dafb' },
    { label:'TypeScript', pct:76, color:'#3178c6' },
    { label:'Node.js', pct:70, color:'#68a063' },
  ];
}
