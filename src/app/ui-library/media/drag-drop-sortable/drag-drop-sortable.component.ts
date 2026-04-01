import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-drag-drop-sortable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-drop-sortable.component.html',
  styleUrls: ['./drag-drop-sortable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropSortableComponent {
  // Sortable list
  sortableItems: { id: string; title: string; icon: string }[] = [
    { id: 's1', title: 'Premier élément', icon: 'bi-1-circle' },
    { id: 's2', title: 'Deuxième élément', icon: 'bi-2-circle' },
    { id: 's3', title: 'Troisième élément', icon: 'bi-3-circle' },
    { id: 's4', title: 'Quatrième élément', icon: 'bi-4-circle' },
    { id: 's5', title: 'Cinquième élément', icon: 'bi-5-circle' }
  ];
  draggedSortableIndex: number | null = null;

  // Sortable drag start
  onSortableDragStart(index: number): void {
    this.draggedSortableIndex = index;
  }

  // Sortable drag over
  onSortableDragOver(event: DragEvent, index: number): void {
    event.preventDefault();
    if (this.draggedSortableIndex === null || this.draggedSortableIndex === index) return;

    const items = [...this.sortableItems];
    const [draggedItem] = items.splice(this.draggedSortableIndex, 1);
    items.splice(index, 0, draggedItem);
    this.sortableItems = items;
    this.draggedSortableIndex = index;
  }

  // Sortable drag end
  onSortableDragEnd(): void {
    this.draggedSortableIndex = null;
  }
}
