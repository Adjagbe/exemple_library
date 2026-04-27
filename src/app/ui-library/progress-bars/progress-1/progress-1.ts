import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-progress-1', standalone: true, imports: [CommonModule], templateUrl: './progress-1.html', styleUrls: ['./progress-1.scss'] })
export class Progress1 {
  bars = [
    { label:'Storage Used', pct:72, color:'#6366f1' },
    { label:'Bandwidth', pct:45, color:'#10b981' },
    { label:'API Credits', pct:91, color:'#f59e0b' },
    { label:'Team Seats', pct:30, color:'#8b5cf6' },
  ];
}
