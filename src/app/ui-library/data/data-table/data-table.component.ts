import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface DataTableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'currency' | 'badge' | 'progress' | 'avatar' | 'actions';
  badgeColors?: { [key: string]: string };
}

export interface DataTableRow {
  [key: string]: any;
  selected?: boolean;
}

export interface PaginationConfig {
  currentPage: number;
  pageSize: number;
  pageSizeOptions: number[];
  totalItems: number;
}

export interface FilterConfig {
  key: string;
  label: string;
  type: 'select' | 'date' | 'dateRange' | 'search';
  options?: { value: string; label: string }[];
  value?: any;
}

@Component({
  selector: 'ui-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit {

  columns: DataTableColumn[] = [
    { key: 'id', label: 'ID', sortable: true, width: '80px', align: 'center' },
    { key: 'product', label: 'Produit', sortable: true },
    { key: 'category', label: 'Catégorie', sortable: true, filterable: true, type: 'badge', badgeColors: {
      'Électronique': 'primary',
      'Vêtements': 'success',
      'Maison': 'warning',
      'Sports': 'danger'
    }},
    { key: 'price', label: 'Prix', sortable: true, type: 'currency', align: 'right' },
    { key: 'stock', label: 'Stock', sortable: true, type: 'progress', align: 'center' },
    { key: 'status', label: 'Statut', sortable: true, filterable: true, type: 'badge', badgeColors: {
      'En stock': 'success',
      'Stock faible': 'warning',
      'Rupture': 'danger'
    }},
    { key: 'lastUpdate', label: 'Mise à jour', sortable: true, type: 'date' },
    { key: 'actions', label: '', type: 'actions', width: '100px', align: 'center' }
  ];


  allData: DataTableRow[] = [
    { id: 1, product: 'MacBook Pro 16"', category: 'Électronique', price: 2499.99, stock: 85, status: 'En stock', lastUpdate: '2024-05-01' },
    { id: 2, product: 'iPhone 15 Pro', category: 'Électronique', price: 1199.99, stock: 120, status: 'En stock', lastUpdate: '2024-05-02' },
    { id: 3, product: 'Nike Air Max 90', category: 'Sports', price: 149.99, stock: 25, status: 'Stock faible', lastUpdate: '2024-04-28' },
    { id: 4, product: 'Canapé 3 places', category: 'Maison', price: 899.99, stock: 0, status: 'Rupture', lastUpdate: '2024-04-15' },
    { id: 5, product: 'T-Shirt Premium', category: 'Vêtements', price: 39.99, stock: 200, status: 'En stock', lastUpdate: '2024-05-03' },
    { id: 6, product: 'iPad Pro 12.9"', category: 'Électronique', price: 1099.99, stock: 45, status: 'En stock', lastUpdate: '2024-05-01' },
    { id: 7, product: 'Vélo de route', category: 'Sports', price: 1299.99, stock: 8, status: 'Stock faible', lastUpdate: '2024-04-20' },
    { id: 8, product: 'Lampe design', category: 'Maison', price: 129.99, stock: 60, status: 'En stock', lastUpdate: '2024-04-25' },
    { id: 9, product: 'Jean slim', category: 'Vêtements', price: 79.99, stock: 150, status: 'En stock', lastUpdate: '2024-05-02' },
    { id: 10, product: 'AirPods Pro', category: 'Électronique', price: 279.99, stock: 0, status: 'Rupture', lastUpdate: '2024-04-10' },
    { id: 11, product: 'Raquette tennis', category: 'Sports', price: 189.99, stock: 35, status: 'En stock', lastUpdate: '2024-04-22' },
    { id: 12, product: 'Table basse', category: 'Maison', price: 249.99, stock: 18, status: 'Stock faible', lastUpdate: '2024-04-18' },
    { id: 13, product: 'Chemise lin', category: 'Vêtements', price: 69.99, stock: 90, status: 'En stock', lastUpdate: '2024-05-01' },
    { id: 14, product: 'Samsung Galaxy S24', category: 'Électronique', price: 999.99, stock: 70, status: 'En stock', lastUpdate: '2024-05-03' },
    { id: 15, product: 'Haltères 10kg', category: 'Sports', price: 49.99, stock: 100, status: 'En stock', lastUpdate: '2024-04-30' }
  ];

  filteredData: DataTableRow[] = [];
  displayedData: DataTableRow[] = [];


  // SEARCH & FILTERS
  searchQuery: string = '';
  
  filters: FilterConfig[] = [
    { 
      key: 'category', 
      label: 'Catégorie', 
      type: 'select', 
      options: [
        { value: '', label: 'Toutes' },
        { value: 'Électronique', label: 'Électronique' },
        { value: 'Vêtements', label: 'Vêtements' },
        { value: 'Maison', label: 'Maison' },
        { value: 'Sports', label: 'Sports' }
      ],
      value: ''
    },
    { 
      key: 'status', 
      label: 'Statut', 
      type: 'select', 
      options: [
        { value: '', label: 'Tous' },
        { value: 'En stock', label: 'En stock' },
        { value: 'Stock faible', label: 'Stock faible' },
        { value: 'Rupture', label: 'Rupture' }
      ],
      value: ''
    }
  ];


  // PAGINATION
  pagination: PaginationConfig = {
    currentPage: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 25, 50],
    totalItems: 0
  };

  // SORTING
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  // SELECTION
  selectAll: boolean = false;

  ngOnInit(): void {
    this.applyFilters();
  }

  // FILTERING & SEARCH
  applyFilters(): void {
    let result = [...this.allData];

    // Apply search
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(row => 
        row['product'].toLowerCase().includes(query) ||
        row['category'].toLowerCase().includes(query)
      );
    }

    // Apply filters
    this.filters.forEach(filter => {
      if (filter.value) {
        result = result.filter(row => row[filter.key] === filter.value);
      }
    });

    // Apply sorting
    if (this.sortColumn) {
      result.sort((a, b) => {
        const valA = a[this.sortColumn];
        const valB = b[this.sortColumn];
        let comparison = 0;
        if (valA < valB) comparison = -1;
        if (valA > valB) comparison = 1;
        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    this.filteredData = result;
    this.pagination.totalItems = result.length;
    this.pagination.currentPage = 1;
    this.updateDisplayedData();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.filters.forEach(f => f.value = '');
    this.applyFilters();
  }

  hasActiveFilters(): boolean {
    return this.filters.some(f => f.value !== '');
  }

  // SORTING
  sortBy(column: DataTableColumn): void {
    if (!column.sortable) return;

    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }

    this.applyFilters();
  }

  getSortIcon(column: DataTableColumn): string {
    if (!column.sortable) return '';
    if (this.sortColumn !== column.key) return 'bi-chevron-expand';
    return this.sortDirection === 'asc' ? 'bi-chevron-up' : 'bi-chevron-down';
  }

  // PAGINATION
  updateDisplayedData(): void {
    const start = (this.pagination.currentPage - 1) * this.pagination.pageSize;
    const end = start + this.pagination.pageSize;
    this.displayedData = this.filteredData.slice(start, end);
    this.updateSelectAll();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.pagination.currentPage = page;
      this.updateDisplayedData();
    }
  }

  onPageSizeChange(): void {
    this.pagination.currentPage = 1;
    this.updateDisplayedData();
  }

  getTotalPages(): number {
    return Math.ceil(this.pagination.totalItems / this.pagination.pageSize);
  }

  getPageNumbers(): number[] {
    const total = this.getTotalPages();
    const current = this.pagination.currentPage;
    const pages: number[] = [];
    
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);
    
    if (end - start < 4) {
      if (start === 1) end = Math.min(total, start + 4);
      else start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  getStartIndex(): number {
    return (this.pagination.currentPage - 1) * this.pagination.pageSize + 1;
  }

  getEndIndex(): number {
    return Math.min(this.pagination.currentPage * this.pagination.pageSize, this.pagination.totalItems);
  }

  // SELECTION
  toggleSelectAll(): void {
    this.displayedData.forEach(row => row.selected = this.selectAll);
  }

  onRowSelect(): void {
    this.updateSelectAll();
  }

  updateSelectAll(): void {
    this.selectAll = this.displayedData.length > 0 && this.displayedData.every(row => row.selected);
  }

  getSelectedCount(): number {
    return this.filteredData.filter(row => row.selected).length;
  }

  // HELPERS
  getBadgeClass(column: DataTableColumn, value: string): string {
    const color = column.badgeColors?.[value] || 'secondary';
    return `badge badge--${color}`;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(value);
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  getStockPercentage(stock: number): number {
    return Math.min(100, stock);
  }

  getStockColor(stock: number): string {
    if (stock === 0) return '#ef4444';
    if (stock < 30) return '#f59e0b';
    return '#10b981';
  }

  // ACTIONS
  onView(row: DataTableRow): void {
    console.log('View:', row);
  }

  onEdit(row: DataTableRow): void {
    console.log('Edit:', row);
  }

  onDelete(row: DataTableRow): void {
    console.log('Delete:', row);
  }

  exportData(): void {
    console.log('Export data:', this.filteredData);
  }
}
