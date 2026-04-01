import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; active?: boolean; }

@Component({
  selector: 'ui-navbar-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-tabs.component.html',
  styleUrl: './navbar-tabs.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarTabsComponent {
  tabs: NavLink[] = [
    { label: "Vue d'ensemble", active: true },
    { label: 'Analytics' },
    { label: 'Rapports' },
    { label: 'Notifications' },
    { label: 'Paramètres' }
  ];

  setActive(tab: NavLink): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }
}
