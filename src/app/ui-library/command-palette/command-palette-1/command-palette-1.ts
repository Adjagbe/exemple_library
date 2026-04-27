import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-command-palette-1', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './command-palette-1.html', styleUrls: ['./command-palette-1.scss'] })
export class CommandPalette1 {
  query = '';
  groups = [
    { title:'Quick Actions', items:[{ icon:'🚀', label:'Deploy to production', kbd:'↵' }, { icon:'🔧', label:'Open settings', kbd:'⌘,' }, { icon:'📊', label:'View analytics', kbd:'' }] },
    { title:'Navigation', items:[{ icon:'🏠', label:'Go to Dashboard', kbd:'' }, { icon:'📦', label:'Orders', kbd:'' }, { icon:'👥', label:'Users', kbd:'' }] },
  ];
  get filtered() {
    if (!this.query) return this.groups;
    return this.groups.map(g => ({ ...g, items: g.items.filter(i => i.label.toLowerCase().includes(this.query.toLowerCase())) })).filter(g => g.items.length);
  }
}
