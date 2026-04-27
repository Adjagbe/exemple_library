import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-sidebar-nav-1', standalone: true, imports: [CommonModule], templateUrl: './sidebar-nav-1.html', styleUrls: ['./sidebar-nav-1.scss'] })
export class SidebarNav1 {
  active = 'Dashboard';
  links = [
    { label:'Dashboard', icon:'📊' },
    { label:'Analytics', icon:'📈' },
    { label:'Orders', icon:'📦', badge:'12' },
    { label:'Customers', icon:'👥' },
    { label:'Products', icon:'🛍️' },
    { label:'Settings', icon:'⚙️' },
  ];
  go(l: string) { this.active = l; }
}
