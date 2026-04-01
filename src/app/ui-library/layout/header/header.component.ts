import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavLink {
  label: string;
  active?: boolean;
}

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  brandLetter = 'P';
  brandName = 'Platform';
  avatarInitials = 'JD';

  navLinks: NavLink[] = [
    { label: 'Dashboard', active: true },
    { label: 'Projets' },
    { label: 'Équipe' },
    { label: 'Rapports' }
  ];

  breadcrumbs = [
    { label: 'Accueil', href: '#' },
    { label: 'Projets', href: '#' }
  ];
  breadcrumbCurrent = 'Dashboard Analytics';
}
