import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-stats-1', standalone: true, imports: [CommonModule], templateUrl: './stats-1.html', styleUrls: ['./stats-1.scss'] })
export class Stats1 {
  stats = [
    { value:'50K+', label:'Developers', icon:'👨‍💻' },
    { value:'99.9%', label:'Uptime SLA', icon:'⚡' },
    { value:'2.4B', label:'API requests / mo', icon:'🌐' },
    { value:'<50ms', label:'Avg latency', icon:'⏱️' },
  ];
}
