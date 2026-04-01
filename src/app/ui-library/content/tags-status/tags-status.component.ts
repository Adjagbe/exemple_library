import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tag { id: string; label: string; color: string; }

@Component({
  selector: 'ui-tags-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-status.component.html',
  styleUrl: './tags-status.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsStatusComponent {
  statusTags: Tag[] = [
    { id: 's1', label: 'En cours', color: '#f59e0b' },
    { id: 's2', label: 'Terminé', color: '#10b981' },
    { id: 's3', label: 'En attente', color: '#6b7280' },
    { id: 's4', label: 'Urgent', color: '#ef4444' },
    { id: 's5', label: 'Nouveau', color: '#4f46e5' }
  ];
}
