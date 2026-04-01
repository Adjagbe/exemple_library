import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; badge?: number; active?: boolean; }

@Component({
  selector: 'ui-navbar-search-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-search-cta.component.html',
  styleUrl: './navbar-search-cta.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarSearchCtaComponent {
  links: NavLink[] = [
    { label: 'Accueil', active: true },
    { label: 'Fonctionnalités' },
    { label: 'Tarifs' },
    { label: 'Blog', badge: 3 }
  ];

  setActive(link: NavLink): void {
    this.links.forEach(l => l.active = false);
    link.active = true;
  }
}
