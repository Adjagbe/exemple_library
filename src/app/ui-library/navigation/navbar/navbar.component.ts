// ═══════════════════════════════════════════════════════════════
// NAVBAR COMPONENT - Premium UI Library
// Variantes de barres de navigation pour applications SaaS
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavLink {
  label: string;
  icon?: string;
  badge?: number;
  active?: boolean;
}

export interface NavbarVariant {
  id: string;
  label: string;
  variant: 'default' | 'dark' | 'gradient' | 'tabs' | 'centered';
  brandLetter: string;
  brandName: string;
  links: NavLink[];
  showSearch?: boolean;
  searchPlaceholder?: string;
  showShortcut?: boolean;
  showCTA?: boolean;
  ctaGhost?: string;
  ctaPrimary?: string;
  showNotif?: boolean;
  showSettings?: boolean;
  avatarInitials: string;
  tabs?: NavLink[];
}

@Component({
  selector: 'ui-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  navbars: NavbarVariant[] = [
    {
      id: 'default',
      label: 'Default Navbar',
      variant: 'default',
      brandLetter: 'P',
      brandName: 'Platform',
      links: [
        { label: 'Dashboard', active: true },
        { label: 'Projets' },
        { label: 'Équipe' },
        { label: 'Rapports' },
        { label: 'Paramètres' }
      ],
      showNotif: true,
      avatarInitials: 'JD'
    },
    {
      id: 'dark',
      label: 'Dark Navbar',
      variant: 'dark',
      brandLetter: 'P',
      brandName: 'Platform',
      links: [
        { label: 'Dashboard', active: true },
        { label: 'Projets' },
        { label: 'Équipe' },
        { label: 'Rapports' }
      ],
      showSearch: true,
      searchPlaceholder: 'Rechercher...',
      showShortcut: true,
      showNotif: true,
      avatarInitials: 'ML'
    },
    {
      id: 'gradient',
      label: 'Gradient Navbar',
      variant: 'gradient',
      brandLetter: 'P',
      brandName: 'Platform',
      links: [
        { label: 'Dashboard', active: true },
        { label: 'Projets' },
        { label: 'Équipe' },
        { label: 'Rapports' }
      ],
      showNotif: true,
      showSettings: true,
      avatarInitials: 'TM'
    },
    {
      id: 'search-cta',
      label: 'Navbar with Search & CTA',
      variant: 'default',
      brandLetter: 'P',
      brandName: 'Platform',
      links: [
        { label: 'Accueil', active: true },
        { label: 'Fonctionnalités' },
        { label: 'Tarifs' },
        { label: 'Blog', badge: 3 }
      ],
      showSearch: true,
      searchPlaceholder: 'Rechercher...',
      showCTA: true,
      ctaGhost: 'Connexion',
      ctaPrimary: 'Essai gratuit',
      avatarInitials: ''
    },
    {
      id: 'tabs',
      label: 'Navbar with Tabs',
      variant: 'tabs',
      brandLetter: 'P',
      brandName: 'Platform',
      links: [],
      showNotif: true,
      showSettings: true,
      avatarInitials: 'JD',
      tabs: [
        { label: "Vue d'ensemble", active: true },
        { label: 'Analytics' },
        { label: 'Rapports' },
        { label: 'Notifications' },
        { label: 'Paramètres' }
      ]
    },
    {
      id: 'centered',
      label: 'Marketing Navbar — Centered Links',
      variant: 'centered',
      brandLetter: 'P',
      brandName: 'Platform',
      links: [
        { label: 'Produit' },
        { label: 'Solutions', active: true },
        { label: 'Tarifs' },
        { label: 'Ressources' }
      ],
      showCTA: true,
      ctaGhost: 'Se connecter',
      ctaPrimary: 'Commencer',
      avatarInitials: ''
    }
  ];

  setActiveLink(navbar: NavbarVariant, clickedLink: NavLink): void {
    navbar.links.forEach(l => l.active = false);
    clickedLink.active = true;
  }

  setActiveTab(navbar: NavbarVariant, clickedTab: NavLink): void {
    if (navbar.tabs) {
      navbar.tabs.forEach(t => t.active = false);
      clickedTab.active = true;
    }
  }
}
