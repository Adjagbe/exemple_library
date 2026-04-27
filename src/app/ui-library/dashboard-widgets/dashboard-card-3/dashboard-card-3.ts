import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-dashboard-card-3', standalone: true, imports: [CommonModule], templateUrl: './dashboard-card-3.html', styleUrls: ['./dashboard-card-3.scss'] })
export class DashboardCard3 {
  activities = [
    { icon:'📦', text:'Order #4521 shipped', time:'2 min ago', color:'#6366f1' },
    { icon:'👤', text:'New user registered', time:'15 min ago', color:'#10b981' },
    { icon:'��', text:'New support ticket #89', time:'1 hr ago', color:'#f59e0b' },
    { icon:'✅', text:'Invoice #1042 paid', time:'3 hr ago', color:'#8b5cf6' },
  ];
}
