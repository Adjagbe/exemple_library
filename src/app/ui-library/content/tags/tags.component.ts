// ═══════════════════════════════════════════════════════════════
// TAGS COMPONENT - Premium UI Library
// Tag display and management
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tag {
  id: string;
  label: string;
  color: string;
  count?: number;
  removable?: boolean;
}

@Component({
  selector: 'ui-tags',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagsComponent {
  // New tag input
  newTagInput: string = '';

  // Sample tags
  tags: Tag[] = [
    { id: '1', label: 'JavaScript', color: '#f7df1e', count: 128, removable: true },
    { id: '2', label: 'TypeScript', color: '#3178c6', count: 95, removable: true },
    { id: '3', label: 'Angular', color: '#dd0031', count: 76, removable: true },
    { id: '4', label: 'React', color: '#61dafb', count: 112, removable: true },
    { id: '5', label: 'Vue.js', color: '#42b883', count: 64, removable: true },
    { id: '6', label: 'Node.js', color: '#339933', count: 89, removable: true },
    { id: '7', label: 'Python', color: '#3776ab', count: 103, removable: true },
    { id: '8', label: 'Docker', color: '#2496ed', count: 57, removable: true }
  ];

  // Status tags
  statusTags: Tag[] = [
    { id: 's1', label: 'En cours', color: '#f59e0b', removable: false },
    { id: 's2', label: 'Terminé', color: '#10b981', removable: false },
    { id: 's3', label: 'En attente', color: '#6b7280', removable: false },
    { id: 's4', label: 'Urgent', color: '#ef4444', removable: false },
    { id: 's5', label: 'Nouveau', color: '#4f46e5', removable: false }
  ];

  // Priority tags
  priorityTags: Tag[] = [
    { id: 'p1', label: 'Critique', color: '#dc2626', removable: false },
    { id: 'p2', label: 'Haute', color: '#f97316', removable: false },
    { id: 'p3', label: 'Moyenne', color: '#eab308', removable: false },
    { id: 'p4', label: 'Basse', color: '#22c55e', removable: false }
  ];

  // Selected tags
  selectedTags: string[] = [];

  // Color presets
  colorPresets: string[] = [
    '#4f46e5', '#7c3aed', '#ec4899', '#ef4444',
    '#f97316', '#f59e0b', '#22c55e', '#14b8a6',
    '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6'
  ];

  // New tag color
  selectedColor: string = '#4f46e5';

  // Add new tag
  addTag(): void {
    if (this.newTagInput.trim()) {
      const newTag: Tag = {
        id: Date.now().toString(),
        label: this.newTagInput.trim(),
        color: this.selectedColor,
        count: 0,
        removable: true
      };
      this.tags.push(newTag);
      this.newTagInput = '';
    }
  }

  // Remove tag
  removeTag(tagId: string): void {
    this.tags = this.tags.filter(t => t.id !== tagId);
    this.selectedTags = this.selectedTags.filter(id => id !== tagId);
  }

  // Toggle tag selection
  toggleTag(tagId: string): void {
    const index = this.selectedTags.indexOf(tagId);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tagId);
    }
  }

  // Check if tag is selected
  isSelected(tagId: string): boolean {
    return this.selectedTags.includes(tagId);
  }

  // Select color preset
  selectColor(color: string): void {
    this.selectedColor = color;
  }

  // Get text color based on background
  getTextColor(bgColor: string): string {
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#1f2937' : '#ffffff';
  }
}
