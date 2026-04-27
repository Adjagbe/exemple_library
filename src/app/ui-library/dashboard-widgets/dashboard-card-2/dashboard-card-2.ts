import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-dashboard-card-2', standalone: true, imports: [CommonModule], templateUrl: './dashboard-card-2.html', styleUrls: ['./dashboard-card-2.scss'] })
export class DashboardCard2 {
  bars = [
    { month:'Jan', val:65 }, { month:'Feb', val:78 }, { month:'Mar', val:52 },
    { month:'Apr', val:91 }, { month:'May', val:84 }, { month:'Jun', val:73 },
    { month:'Jul', val:95 }, { month:'Aug', val:88 },
  ];
}
