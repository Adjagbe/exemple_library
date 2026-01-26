import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface pour les éléments de menu
 */
interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  badge?: number;
  children?: MenuItem[];
}

/**
 * Interface pour les sections de menu
 */
interface MenuSection {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  /** État collapsed de la sidebar */
  isCollapsed = signal(false);

  /** Menu actuellement ouvert */
  openMenuId = signal<string | null>(null);

  /** Item actif */
  activeItemId = signal('dashboard');

  /** Sections du menu */
  menuSections: MenuSection[] = [
    {
      title: 'Principal',
      items: [
        { id: 'dashboard', label: 'Tableau de bord', icon: 'bi-grid-1x2-fill' },
        { id: 'analytics', label: 'Analytiques', icon: 'bi-graph-up', badge: 3 },
        { id: 'reports', label: 'Rapports', icon: 'bi-file-earmark-bar-graph' },
      ]
    },
    {
      title: 'Gestion',
      items: [
        { 
          id: 'users', 
          label: 'Utilisateurs', 
          icon: 'bi-people-fill',
          children: [
            { id: 'users-list', label: 'Liste', icon: 'bi-list-ul' },
            { id: 'users-roles', label: 'Rôles', icon: 'bi-shield-check' },
            { id: 'users-permissions', label: 'Permissions', icon: 'bi-key' },
          ]
        },
        { id: 'products', label: 'Produits', icon: 'bi-box-seam-fill', badge: 12 },
        { id: 'orders', label: 'Commandes', icon: 'bi-cart-fill' },
        { id: 'invoices', label: 'Factures', icon: 'bi-receipt' },
      ]
    },
    {
      title: 'Configuration',
      items: [
        { id: 'settings', label: 'Paramètres', icon: 'bi-gear-fill' },
        { id: 'integrations', label: 'Intégrations', icon: 'bi-plug-fill' },
        { id: 'notifications', label: 'Notifications', icon: 'bi-bell-fill', badge: 5 },
      ]
    }
  ];

  /** Informations utilisateur */
  user = {
    name: 'Jean Dupont',
    role: 'Administrateur',
    avatar: null as string | null
  };

  /** Initiales de l'utilisateur */
  userInitials = computed(() => {
    return this.user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  });

  /** Toggle la sidebar */
  toggleSidebar(): void {
    this.isCollapsed.update(v => !v);
  }

  /** Toggle un sous-menu */
  toggleMenu(itemId: string): void {
    this.openMenuId.update(current => current === itemId ? null : itemId);
  }

  /** Vérifie si un menu est ouvert */
  isMenuOpen(itemId: string): boolean {
    return this.openMenuId() === itemId;
  }

  /** Sélectionne un item */
  selectItem(itemId: string): void {
    this.activeItemId.set(itemId);
  }

  /** Vérifie si un item est actif */
  isActive(itemId: string): boolean {
    return this.activeItemId() === itemId;
  }

  /** État du dropdown utilisateur */
  isUserMenuOpen = signal(false);

  /** Toggle le menu utilisateur */
  toggleUserMenu(): void {
    this.isUserMenuOpen.update(v => !v);
  }

  /** Ferme le menu utilisateur */
  closeUserMenu(): void {
    this.isUserMenuOpen.set(false);
  }

  /** Action profil */
  goToProfile(): void {
    console.log('Naviguer vers le profil');
    this.closeUserMenu();
  }

  /** Action déconnexion */
  logout(): void {
    console.log('Déconnexion...');
    this.closeUserMenu();
  }
}
