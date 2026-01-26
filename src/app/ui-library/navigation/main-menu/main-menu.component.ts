// ═══════════════════════════════════════════════════════════════
// MAIN MENU COMPONENT - Premium UI Library
// Horizontal navigation menu with icons
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  link?: string;
  badge?: string;
  badgeType?: 'primary' | 'success' | 'warning' | 'danger';
  children?: MenuItem[];
  active?: boolean;
}

@Component({
  selector: 'ui-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent {
  menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'bi-grid-1x2',
      link: '/dashboard',
      active: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'bi-graph-up',
      link: '/analytics',
      badge: 'New',
      badgeType: 'primary'
    },
    {
      id: 'products',
      label: 'Products',
      icon: 'bi-box-seam',
      children: [
        { id: 'all-products', label: 'All Products', icon: 'bi-grid', link: '/products' },
        { id: 'add-product', label: 'Add Product', icon: 'bi-plus-circle', link: '/products/add' },
        { id: 'categories', label: 'Categories', icon: 'bi-tags', link: '/products/categories' },
        { id: 'inventory', label: 'Inventory', icon: 'bi-clipboard-data', link: '/products/inventory' }
      ]
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: 'bi-cart3',
      badge: '12',
      badgeType: 'warning',
      children: [
        { id: 'all-orders', label: 'All Orders', icon: 'bi-list-ul', link: '/orders' },
        { id: 'pending', label: 'Pending', icon: 'bi-clock', link: '/orders/pending', badge: '5', badgeType: 'warning' },
        { id: 'completed', label: 'Completed', icon: 'bi-check-circle', link: '/orders/completed' },
        { id: 'returns', label: 'Returns', icon: 'bi-arrow-return-left', link: '/orders/returns' }
      ]
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: 'bi-people',
      link: '/customers'
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: 'bi-file-earmark-bar-graph',
      children: [
        { id: 'sales', label: 'Sales Report', icon: 'bi-currency-dollar', link: '/reports/sales' },
        { id: 'traffic', label: 'Traffic Report', icon: 'bi-bar-chart', link: '/reports/traffic' },
        { id: 'revenue', label: 'Revenue Report', icon: 'bi-graph-up-arrow', link: '/reports/revenue' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'bi-gear',
      link: '/settings'
    }
  ];

  activeMenu: string | null = null;
  mobileMenuOpen: boolean = false;

  toggleSubmenu(menuId: string): void {
    this.activeMenu = this.activeMenu === menuId ? null : menuId;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  isSubmenuOpen(menuId: string): boolean {
    return this.activeMenu === menuId;
  }
}
