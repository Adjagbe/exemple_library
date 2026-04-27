import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-sidebar-nav-2', standalone: true, imports: [CommonModule], templateUrl: './sidebar-nav-2.html', styleUrls: ['./sidebar-nav-2.scss'] })
export class SidebarNav2 {
  active = 'Home';
  sections = [
    { title:'Main', links: [{ label:'Home', icon:'🏠' }, { label:'Explore', icon:'🌐' }, { label:'Notifications', icon:'🔔', badge:'5' }] },
    { title:'Content', links: [{ label:'Posts', icon:'📝' }, { label:'Media', icon:'🎬' }, { label:'Collections', icon:'📚' }] },
    { title:'Account', links: [{ label:'Profile', icon:'👤' }, { label:'Settings', icon:'⚙️' }, { label:'Logout', icon:'🚪' }] },
  ];
  go(l: string) { this.active = l; }
}
