import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; active?: boolean; }

@Component({
  selector: 'ui-navbar-centered',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-centered.component.html',
  styleUrl: './navbar-centered.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarCenteredComponent {
  links: NavLink[] = [
    { label: 'Produit' },
    { label: 'Solutions', active: true },
    { label: 'Tarifs' },
    { label: 'Ressources' }
  ];

  setActive(link: NavLink): void {
    this.links.forEach(l => l.active = false);
    link.active = true;
  }
}
