import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  checked?: boolean;
}

export interface FilterGroup {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range' | 'color' | 'rating';
  expanded: boolean;
  options?: FilterOption[];
  range?: { min: number; max: number; current: [number, number]; unit?: string };
  colors?: { value: string; hex: string; checked?: boolean }[];
  rating?: number;
}

export interface ActiveFilter {
  groupId: string;
  groupLabel: string;
  value: string;
  label: string;
}

@Component({
  selector: 'ui-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent {
  // FILTER GROUPS
  filterGroups: FilterGroup[] = [
    {
      id: 'category',
      label: 'Catégorie',
      type: 'checkbox',
      expanded: true,
      options: [
        { value: 'electronics', label: 'Électronique', count: 245, checked: false },
        { value: 'clothing', label: 'Vêtements', count: 189, checked: false },
        { value: 'home', label: 'Maison', count: 156, checked: false },
        { value: 'sports', label: 'Sports', count: 98, checked: false },
        { value: 'books', label: 'Livres', count: 76, checked: false }
      ]
    },
    {
      id: 'brand',
      label: 'Marque',
      type: 'checkbox',
      expanded: true,
      options: [
        { value: 'apple', label: 'Apple', count: 89, checked: false },
        { value: 'samsung', label: 'Samsung', count: 76, checked: false },
        { value: 'sony', label: 'Sony', count: 54, checked: false },
        { value: 'microsoft', label: 'Microsoft', count: 43, checked: false },
        { value: 'lg', label: 'LG', count: 32, checked: false }
      ]
    },
    {
      id: 'price',
      label: 'Prix',
      type: 'range',
      expanded: true,
      range: { min: 0, max: 5000, current: [0, 5000], unit: '€' }
    },
    {
      id: 'color',
      label: 'Couleur',
      type: 'color',
      expanded: true,
      colors: [
        { value: 'black', hex: '#111827', checked: false },
        { value: 'white', hex: '#ffffff', checked: false },
        { value: 'gray', hex: '#6b7280', checked: false },
        { value: 'red', hex: '#ef4444', checked: false },
        { value: 'blue', hex: '#3b82f6', checked: false },
        { value: 'green', hex: '#10b981', checked: false },
        { value: 'yellow', hex: '#fbbf24', checked: false },
        { value: 'purple', hex: '#8b5cf6', checked: false }
      ]
    },
    {
      id: 'rating',
      label: 'Note minimum',
      type: 'rating',
      expanded: true,
      rating: 0
    },
    {
      id: 'availability',
      label: 'Disponibilité',
      type: 'radio',
      expanded: false,
      options: [
        { value: 'all', label: 'Tous', checked: true },
        { value: 'instock', label: 'En stock', count: 456 },
        { value: 'preorder', label: 'Précommande', count: 23 }
      ]
    }
  ];

  // ACTIVE FILTERS
  activeFilters: ActiveFilter[] = [];

  toggleGroup(group: FilterGroup): void {
    group.expanded = !group.expanded;
  }

  onCheckboxChange(group: FilterGroup, option: FilterOption): void {
    option.checked = !option.checked;
    this.updateActiveFilters();
  }

  onRadioChange(group: FilterGroup, option: FilterOption): void {
    group.options?.forEach(opt => opt.checked = opt.value === option.value);
    this.updateActiveFilters();
  }

  onColorChange(group: FilterGroup, color: { value: string; hex: string; checked?: boolean }): void {
    color.checked = !color.checked;
    this.updateActiveFilters();
  }

  onRatingChange(group: FilterGroup, rating: number): void {
    group.rating = group.rating === rating ? 0 : rating;
    this.updateActiveFilters();
  }

  updateActiveFilters(): void {
    this.activeFilters = [];
    
    this.filterGroups.forEach(group => {
      if (group.type === 'checkbox' || group.type === 'radio') {
        group.options?.filter(opt => opt.checked && opt.value !== 'all').forEach(opt => {
          this.activeFilters.push({
            groupId: group.id,
            groupLabel: group.label,
            value: opt.value,
            label: opt.label
          });
        });
      }
      
      if (group.type === 'color') {
        group.colors?.filter(c => c.checked).forEach(c => {
          this.activeFilters.push({
            groupId: group.id,
            groupLabel: group.label,
            value: c.value,
            label: c.value
          });
        });
      }
      
      if (group.type === 'rating' && group.rating && group.rating > 0) {
        this.activeFilters.push({
          groupId: group.id,
          groupLabel: group.label,
          value: String(group.rating),
          label: `${group.rating}+ étoiles`
        });
      }
      
      if (group.type === 'range' && group.range) {
        const { min, max, current, unit } = group.range;
        if (current[0] !== min || current[1] !== max) {
          this.activeFilters.push({
            groupId: group.id,
            groupLabel: group.label,
            value: `${current[0]}-${current[1]}`,
            label: `${current[0]}${unit} - ${current[1]}${unit}`
          });
        }
      }
    });
  }

  removeFilter(filter: ActiveFilter): void {
    const group = this.filterGroups.find(g => g.id === filter.groupId);
    if (!group) return;

    if (group.type === 'checkbox' || group.type === 'radio') {
      const option = group.options?.find(opt => opt.value === filter.value);
      if (option) option.checked = false;
    }
    
    if (group.type === 'color') {
      const color = group.colors?.find(c => c.value === filter.value);
      if (color) color.checked = false;
    }
    
    if (group.type === 'rating') {
      group.rating = 0;
    }
    
    if (group.type === 'range' && group.range) {
      group.range.current = [group.range.min, group.range.max];
    }

    this.updateActiveFilters();
  }

  clearAllFilters(): void {
    this.filterGroups.forEach(group => {
      group.options?.forEach(opt => opt.checked = opt.value === 'all');
      group.colors?.forEach(c => c.checked = false);
      if (group.rating !== undefined) group.rating = 0;
      if (group.range) group.range.current = [group.range.min, group.range.max];
    });
    this.activeFilters = [];
  }

  formatRange(group: FilterGroup): string {
    if (!group.range) return '';
    const { current, unit } = group.range;
    return `${current[0]}${unit} - ${current[1]}${unit}`;
  }
}
