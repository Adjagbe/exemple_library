
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tag { id: string; label: string; color: string; }

@Component({
  selector: 'ui-tags-priority',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-priority.component.html',
  styleUrl: './tags-priority.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsPriorityComponent {
  priorityTags: Tag[] = [
    { id: 'p1', label: 'Critique', color: '#dc2626' },
    { id: 'p2', label: 'Haute', color: '#f97316' },
    { id: 'p3', label: 'Moyenne', color: '#eab308' },
    { id: 'p4', label: 'Basse', color: '#22c55e' }
  ];

  getTextColor(bgColor: string): string {
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#1f2937' : '#ffffff';
  }
}
