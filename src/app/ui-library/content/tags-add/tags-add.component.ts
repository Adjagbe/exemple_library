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
  selector: 'ui-tags-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tags-add.component.html',
  styleUrl: './tags-add.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsAddComponent {
  newTagInput = '';
  selectedColor = '#4f46e5';

  colorPresets: string[] = [
    '#4f46e5', '#7c3aed', '#ec4899', '#ef4444',
    '#f97316', '#f59e0b', '#22c55e', '#14b8a6',
    '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6'
  ];

  addedTags: Tag[] = [];

  addTag(): void {
    if (this.newTagInput.trim()) {
      this.addedTags.push({
        id: Date.now().toString(),
        label: this.newTagInput.trim(),
        color: this.selectedColor,
        count: 0,
        removable: true
      });
      this.newTagInput = '';
    }
  }

  removeTag(tagId: string): void {
    this.addedTags = this.addedTags.filter(t => t.id !== tagId);
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  getTextColor(bgColor: string): string {
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#1f2937' : '#ffffff';
  }
}
