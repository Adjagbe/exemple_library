import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; active?: boolean; }

@Component({
  selector: 'ui-navbar-dark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-dark.component.html',
  styleUrl: './navbar-dark.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarDarkComponent {
  links: NavLink[] = [
    { label: 'Dashboard', active: true },
    { label: 'Projets' },
    { label: 'Équipe' },
    { label: 'Rapports' }
  ];

  setActive(link: NavLink): void {
    this.links.forEach(l => l.active = false);
    link.active = true;
  }
}
