import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; active?: boolean; }

@Component({
  selector: 'ui-navbar-gradient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-gradient.component.html',
  styleUrl: './navbar-gradient.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarGradientComponent {
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
