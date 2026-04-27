import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-dashboard-card-1', standalone: true, imports: [CommonModule], templateUrl: './dashboard-card-1.html', styleUrls: ['./dashboard-card-1.scss'] })
export class DashboardCard1 {
  kpis = [
    { label: 'Total Revenue', value: '€148,320', change: '+12.4%', up: true, icon: '💰' },
    { label: 'Active Users', value: '24,851', change: '+8.1%', up: true, icon: '👥' },
    { label: 'Conversion Rate', value: '3.24%', change: '-0.6%', up: false, icon: '📈' },
    { label: 'Avg. Session', value: '4m 32s', change: '+1.2%', up: true, icon: '⏱' },
  ];
}
