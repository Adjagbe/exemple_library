import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DragItem {
  id: string;
  title: string;
  description?: string;
  color: string;
  icon: string;
}

interface DropZone {
  id: string;
  title: string;
  items: DragItem[];
}

@Component({
  selector: 'ui-drag-drop-kanban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-drop-kanban.component.html',
  styleUrls: ['./drag-drop-kanban.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropKanbanComponent {
  // Drag state
  draggedItem: DragItem | null = null;
  draggedFromZone: string | null = null;

  // Kanban columns
  columns: DropZone[] = [
    {
      id: 'todo',
      title: 'À faire',
      items: [
        { id: '1', title: 'Conception maquettes', description: 'Créer les wireframes', color: '#8b5cf6', icon: 'bi-palette' },
        { id: '2', title: 'Recherche utilisateur', description: 'Interviews clients', color: '#3b82f6', icon: 'bi-people' },
        { id: '3', title: 'Documentation API', description: 'Swagger specs', color: '#10b981', icon: 'bi-file-earmark-code' }
      ]
    },
    {
      id: 'inprogress',
      title: 'En cours',
      items: [
        { id: '4', title: 'Développement frontend', description: 'Composants Angular', color: '#ef4444', icon: 'bi-code-slash' },
        { id: '5', title: 'Tests unitaires', description: 'Coverage 80%', color: '#f59e0b', icon: 'bi-check2-circle' }
      ]
    },
    {
      id: 'review',
      title: 'En revue',
      items: [
        { id: '6', title: 'Code review', description: 'PR #142', color: '#ec4899', icon: 'bi-git' }
      ]
    },
    {
      id: 'done',
      title: 'Terminé',
      items: [
        { id: '7', title: 'Setup projet', description: 'Configuration initiale', color: '#06b6d4', icon: 'bi-gear' }
      ]
    }
  ];

  // Drag start (Kanban)
  onDragStart(item: DragItem, zoneId: string): void {
    this.draggedItem = item;
    this.draggedFromZone = zoneId;
  }

  // Drag end
  onDragEnd(): void {
    this.draggedItem = null;
    this.draggedFromZone = null;
  }

  // Allow drop
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Drop (Kanban)
  onDrop(targetZoneId: string): void {
    if (!this.draggedItem || !this.draggedFromZone) return;

    const sourceZone = this.columns.find(c => c.id === this.draggedFromZone);
    const targetZone = this.columns.find(c => c.id === targetZoneId);

    if (sourceZone && targetZone && sourceZone.id !== targetZone.id) {
      sourceZone.items = sourceZone.items.filter(i => i.id !== this.draggedItem!.id);
      targetZone.items.push(this.draggedItem);
    }

    this.onDragEnd();
  }
}
