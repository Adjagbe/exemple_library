// ═══════════════════════════════════════════════════════════════
// CATEGORIES COMPONENT - Premium UI Library
// Category display and selection
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Category {
  id: string;
  name: string;
  description?: string;
  icon: string;
  color: string;
  count: number;
  children?: Category[];
  expanded?: boolean;
}

@Component({
  selector: 'ui-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent {
  // Search
  searchQuery: string = '';

  // Selected categories
  selectedCategories: string[] = [];

  // View mode
  viewMode: 'grid' | 'list' | 'tree' = 'grid';

  // Main categories
  categories: Category[] = [
    {
      id: '1',
      name: 'Développement',
      description: 'Langages, frameworks et outils de développement',
      icon: 'bi-code-slash',
      color: '#4f46e5',
      count: 256,
      children: [
        { id: '1-1', name: 'Frontend', icon: 'bi-window', color: '#06b6d4', count: 89 },
        { id: '1-2', name: 'Backend', icon: 'bi-server', color: '#8b5cf6', count: 102 },
        { id: '1-3', name: 'Mobile', icon: 'bi-phone', color: '#ec4899', count: 65 }
      ],
      expanded: true
    },
    {
      id: '2',
      name: 'Design',
      description: 'UI/UX, graphisme et ressources visuelles',
      icon: 'bi-palette',
      color: '#ec4899',
      count: 142,
      children: [
        { id: '2-1', name: 'UI Design', icon: 'bi-grid', color: '#f97316', count: 58 },
        { id: '2-2', name: 'UX Research', icon: 'bi-person-lines-fill', color: '#14b8a6', count: 34 },
        { id: '2-3', name: 'Illustrations', icon: 'bi-brush', color: '#a855f7', count: 50 }
      ],
      expanded: false
    },
    {
      id: '3',
      name: 'Marketing',
      description: 'SEO, publicité et stratégies marketing',
      icon: 'bi-megaphone',
      color: '#f59e0b',
      count: 98,
      children: [
        { id: '3-1', name: 'SEO', icon: 'bi-search', color: '#22c55e', count: 42 },
        { id: '3-2', name: 'Social Media', icon: 'bi-share', color: '#3b82f6', count: 36 },
        { id: '3-3', name: 'Email Marketing', icon: 'bi-envelope', color: '#ef4444', count: 20 }
      ],
      expanded: false
    },
    {
      id: '4',
      name: 'Business',
      description: 'Gestion, finance et entrepreneuriat',
      icon: 'bi-briefcase',
      color: '#10b981',
      count: 87,
      children: [
        { id: '4-1', name: 'Management', icon: 'bi-people', color: '#6366f1', count: 31 },
        { id: '4-2', name: 'Finance', icon: 'bi-cash-stack', color: '#22c55e', count: 28 },
        { id: '4-3', name: 'Startups', icon: 'bi-rocket', color: '#f97316', count: 28 }
      ],
      expanded: false
    },
    {
      id: '5',
      name: 'Data Science',
      description: 'Analytics, ML et intelligence artificielle',
      icon: 'bi-graph-up',
      color: '#8b5cf6',
      count: 134,
      children: [
        { id: '5-1', name: 'Machine Learning', icon: 'bi-cpu', color: '#4f46e5', count: 56 },
        { id: '5-2', name: 'Analytics', icon: 'bi-bar-chart', color: '#06b6d4', count: 48 },
        { id: '5-3', name: 'Big Data', icon: 'bi-database', color: '#ec4899', count: 30 }
      ],
      expanded: false
    },
    {
      id: '6',
      name: 'DevOps',
      description: 'Cloud, CI/CD et infrastructure',
      icon: 'bi-cloud',
      color: '#06b6d4',
      count: 76,
      children: [
        { id: '6-1', name: 'Cloud', icon: 'bi-cloud-upload', color: '#3b82f6', count: 32 },
        { id: '6-2', name: 'CI/CD', icon: 'bi-arrow-repeat', color: '#22c55e', count: 24 },
        { id: '6-3', name: 'Containers', icon: 'bi-box', color: '#8b5cf6', count: 20 }
      ],
      expanded: false
    }
  ];

  // Toggle category expansion
  toggleCategory(category: Category): void {
    category.expanded = !category.expanded;
  }

  // Toggle category selection
  toggleSelection(categoryId: string): void {
    const index = this.selectedCategories.indexOf(categoryId);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(categoryId);
    }
  }

  // Check if selected
  isSelected(categoryId: string): boolean {
    return this.selectedCategories.includes(categoryId);
  }

  // Set view mode
  setViewMode(mode: 'grid' | 'list' | 'tree'): void {
    this.viewMode = mode;
  }

  // Get filtered categories
  get filteredCategories(): Category[] {
    if (!this.searchQuery) return this.categories;

    const query = this.searchQuery.toLowerCase();
    return this.categories.filter(cat =>
      cat.name.toLowerCase().includes(query) ||
      cat.description?.toLowerCase().includes(query) ||
      cat.children?.some(child => child.name.toLowerCase().includes(query))
    );
  }

  // Get total selected count
  get selectedCount(): number {
    return this.selectedCategories.length;
  }

  // Clear selection
  clearSelection(): void {
    this.selectedCategories = [];
  }
}
