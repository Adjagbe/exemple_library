// ═══════════════════════════════════════════════════════════════
// TABLE COMPONENT - Premium UI Library
// Simple data table with sorting and styling
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─────────────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────────────
export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'badge' | 'avatar' | 'actions';
  badgeColors?: { [key: string]: string };
}

export interface TableRow {
  [key: string]: any;
  selected?: boolean;
}

export interface SortConfig {
  column: string;
  direction: 'asc' | 'desc';
}

@Component({
  selector: 'ui-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  // ─────────────────────────────────────────────────────────────────
  // TABLE CONFIGURATION
  // ─────────────────────────────────────────────────────────────────
  columns: TableColumn[] = [
    { key: 'id', label: 'ID', sortable: true, width: '80px', align: 'center' },
    { key: 'name', label: 'Nom', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Rôle', sortable: true, type: 'badge', badgeColors: {
      'Admin': 'danger',
      'Manager': 'warning',
      'User': 'primary',
      'Guest': 'secondary'
    }},
    { key: 'status', label: 'Statut', sortable: true, type: 'badge', badgeColors: {
      'Actif': 'success',
      'Inactif': 'secondary',
      'En attente': 'warning'
    }},
    { key: 'createdAt', label: 'Date création', sortable: true, type: 'date' },
    { key: 'actions', label: 'Actions', type: 'actions', align: 'center', width: '120px' }
  ];

  data: TableRow[] = [
    { id: 1, name: 'Jean Dupont', email: 'jean.dupont@email.com', role: 'Admin', status: 'Actif', createdAt: '2024-01-15' },
    { id: 2, name: 'Marie Martin', email: 'marie.martin@email.com', role: 'Manager', status: 'Actif', createdAt: '2024-02-20' },
    { id: 3, name: 'Pierre Bernard', email: 'pierre.bernard@email.com', role: 'User', status: 'En attente', createdAt: '2024-03-10' },
    { id: 4, name: 'Sophie Dubois', email: 'sophie.dubois@email.com', role: 'User', status: 'Actif', createdAt: '2024-03-15' },
    { id: 5, name: 'Lucas Moreau', email: 'lucas.moreau@email.com', role: 'Guest', status: 'Inactif', createdAt: '2024-04-01' },
    { id: 6, name: 'Emma Petit', email: 'emma.petit@email.com', role: 'Manager', status: 'Actif', createdAt: '2024-04-10' },
    { id: 7, name: 'Thomas Robert', email: 'thomas.robert@email.com', role: 'User', status: 'Actif', createdAt: '2024-04-15' },
    { id: 8, name: 'Léa Richard', email: 'lea.richard@email.com', role: 'User', status: 'En attente', createdAt: '2024-04-20' }
  ];

  sortConfig: SortConfig | null = null;
  selectAll: boolean = false;

  // ─────────────────────────────────────────────────────────────────
  // SORTING
  // ─────────────────────────────────────────────────────────────────
  sortBy(column: TableColumn): void {
    if (!column.sortable) return;

    if (this.sortConfig?.column === column.key) {
      this.sortConfig.direction = this.sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortConfig = { column: column.key, direction: 'asc' };
    }

    this.data.sort((a, b) => {
      const valA = a[column.key];
      const valB = b[column.key];
      
      let comparison = 0;
      if (valA < valB) comparison = -1;
      if (valA > valB) comparison = 1;
      
      return this.sortConfig!.direction === 'asc' ? comparison : -comparison;
    });
  }

  getSortIcon(column: TableColumn): string {
    if (!column.sortable) return '';
    if (this.sortConfig?.column !== column.key) return 'bi-chevron-expand';
    return this.sortConfig.direction === 'asc' ? 'bi-chevron-up' : 'bi-chevron-down';
  }

  // ─────────────────────────────────────────────────────────────────
  // SELECTION
  // ─────────────────────────────────────────────────────────────────
  toggleSelectAll(): void {
    this.data.forEach(row => row.selected = this.selectAll);
  }

  onRowSelect(): void {
    this.selectAll = this.data.every(row => row.selected);
  }

  getSelectedCount(): number {
    return this.data.filter(row => row.selected).length;
  }

  // ─────────────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────────────
  getBadgeClass(column: TableColumn, value: string): string {
    const color = column.badgeColors?.[value] || 'secondary';
    return `badge badge--${color}`;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  // ─────────────────────────────────────────────────────────────────
  // ACTIONS
  // ─────────────────────────────────────────────────────────────────
  onView(row: TableRow): void {
    console.log('View:', row);
  }

  onEdit(row: TableRow): void {
    console.log('Edit:', row);
  }

  onDelete(row: TableRow): void {
    console.log('Delete:', row);
  }
}
