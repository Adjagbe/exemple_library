// ═══════════════════════════════════════════════════════════════
// SEARCH COMPONENT - Premium UI Library
// Advanced search with suggestions and filters
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─────────────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────────────
export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'popular' | 'product' | 'category';
  icon?: string;
  meta?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  price?: number;
  rating?: number;
}

export interface SearchFilter {
  key: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range';
  options?: { value: string; label: string; count?: number }[];
  value?: any;
  min?: number;
  max?: number;
}

@Component({
  selector: 'ui-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {
  // ─────────────────────────────────────────────────────────────────
  // SEARCH STATE
  // ─────────────────────────────────────────────────────────────────
  searchQuery: string = '';
  isSearchOpen: boolean = false;
  isLoading: boolean = false;
  activeTab: 'all' | 'products' | 'categories' | 'users' = 'all';

  // ─────────────────────────────────────────────────────────────────
  // SUGGESTIONS
  // ─────────────────────────────────────────────────────────────────
  recentSearches: SearchSuggestion[] = [
    { id: '1', text: 'MacBook Pro', type: 'recent', icon: 'bi-clock-history' },
    { id: '2', text: 'iPhone 15', type: 'recent', icon: 'bi-clock-history' },
    { id: '3', text: 'Casque audio', type: 'recent', icon: 'bi-clock-history' }
  ];

  popularSearches: SearchSuggestion[] = [
    { id: '1', text: 'Écouteurs sans fil', type: 'popular', icon: 'bi-fire' },
    { id: '2', text: 'Tablettes', type: 'popular', icon: 'bi-fire' },
    { id: '3', text: 'Montres connectées', type: 'popular', icon: 'bi-fire' }
  ];

  suggestions: SearchSuggestion[] = [
    { id: '1', text: 'MacBook Pro 16"', type: 'product', meta: 'Électronique' },
    { id: '2', text: 'MacBook Air M2', type: 'product', meta: 'Électronique' },
    { id: '3', text: 'Mac Mini', type: 'product', meta: 'Électronique' },
    { id: '4', text: 'Accessoires Mac', type: 'category', icon: 'bi-folder' }
  ];

  // ─────────────────────────────────────────────────────────────────
  // RESULTS
  // ─────────────────────────────────────────────────────────────────
  searchResults: SearchResult[] = [
    { id: '1', title: 'MacBook Pro 16" M3 Pro', description: '36 Go RAM, 512 Go SSD, Puce M3 Pro', category: 'Électronique', price: 2999.99, rating: 4.8 },
    { id: '2', title: 'MacBook Pro 14" M3', description: '18 Go RAM, 512 Go SSD, Puce M3', category: 'Électronique', price: 2199.99, rating: 4.7 },
    { id: '3', title: 'MacBook Air 15" M3', description: '8 Go RAM, 256 Go SSD, Puce M3', category: 'Électronique', price: 1499.99, rating: 4.6 },
    { id: '4', title: 'Coque MacBook Pro 16"', description: 'Protection rigide transparente', category: 'Accessoires', price: 39.99, rating: 4.2 }
  ];

  totalResults: number = 156;

  // ─────────────────────────────────────────────────────────────────
  // METHODS
  // ─────────────────────────────────────────────────────────────────
  onSearchFocus(): void {
    this.isSearchOpen = true;
  }

  onSearchBlur(): void {
    setTimeout(() => {
      this.isSearchOpen = false;
    }, 200);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }

  selectSuggestion(suggestion: SearchSuggestion): void {
    this.searchQuery = suggestion.text;
    this.onSearch();
    this.isSearchOpen = false;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.isSearchOpen = false;
  }

  clearRecentSearches(): void {
    this.recentSearches = [];
  }

  removeRecentSearch(id: string): void {
    this.recentSearches = this.recentSearches.filter(s => s.id !== id);
  }

  setActiveTab(tab: 'all' | 'products' | 'categories' | 'users'): void {
    this.activeTab = tab;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  getFilteredSuggestions(): SearchSuggestion[] {
    if (!this.searchQuery.trim()) return [];
    const query = this.searchQuery.toLowerCase();
    return this.suggestions.filter(s => s.text.toLowerCase().includes(query));
  }
}
