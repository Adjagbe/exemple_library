import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tag {
  id: string;
  label: string;
  color: string;
  count?: number;
  removable?: boolean;
}

@Component({
  selector: 'ui-tags-cloud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsCloudComponent {
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

  selectedTags: string[] = [];

  toggleTag(tagId: string): void {
    const index = this.selectedTags.indexOf(tagId);
    if (index > -1) { this.selectedTags.splice(index, 1); }
    else { this.selectedTags.push(tagId); }
  }

  isSelected(tagId: string): boolean {
    return this.selectedTags.includes(tagId);
  }

  removeTag(tagId: string): void {
    this.tags = this.tags.filter(t => t.id !== tagId);
    this.selectedTags = this.selectedTags.filter(id => id !== tagId);
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
