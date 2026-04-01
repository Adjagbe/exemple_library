import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; active?: boolean; }

@Component({
  selector: 'ui-navbar-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-default.component.html',
  styleUrl: './navbar-default.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarDefaultComponent {
  links: NavLink[] = [
    { label: 'Dashboard', active: true },
    { label: 'Projets' },
    { label: 'Équipe' },
    { label: 'Rapports' },
    { label: 'Paramètres' }
  ];

  setActive(link: NavLink): void {
    this.links.forEach(l => l.active = false);
    link.active = true;
  }
}
