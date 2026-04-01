import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DraggableChip {
  id: string;
  name: string;
  icon: string;
}

interface TargetZone {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  variant: string;
  items: DraggableChip[];
}

@Component({
  selector: 'ui-drag-drop-zones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-drop-zones.component.html',
  styleUrls: ['./drag-drop-zones.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropZonesComponent {
  // Source chips
  sourceChips: DraggableChip[] = [
    { id: 'chip1', name: 'Image.png', icon: 'bi-file-earmark-image' },
    { id: 'chip2', name: 'Document.pdf', icon: 'bi-file-earmark-pdf' },
    { id: 'chip3', name: 'Audio.mp3', icon: 'bi-file-earmark-music' }
  ];

  // Target zones
  targetZones: TargetZone[] = [
    { id: 'main', title: 'Dossier Principal', subtitle: 'Déposez vos fichiers ici', icon: 'bi-folder', variant: '', items: [] },
    { id: 'archive', title: 'Archives', subtitle: 'Fichiers archivés', icon: 'bi-archive', variant: 'secondary', items: [] },
    { id: 'trash', title: 'Corbeille', subtitle: 'Supprimer définitivement', icon: 'bi-trash', variant: 'danger', items: [] }
  ];

  // Drag state
  draggedChip: DraggableChip | null = null;
  draggedFromZone: string | null = null; // 'source' or zone id
  dragOverZoneId: string | null = null;

  // Drag start from source
  onChipDragStart(chip: DraggableChip, fromZone: string): void {
    this.draggedChip = chip;
    this.draggedFromZone = fromZone;
  }

  // Drag end
  onChipDragEnd(): void {
    this.draggedChip = null;
    this.draggedFromZone = null;
    this.dragOverZoneId = null;
  }

  // Allow drop
  onZoneDragOver(event: DragEvent, zoneId: string): void {
    event.preventDefault();
    this.dragOverZoneId = zoneId;
  }

  onZoneDragLeave(zoneId: string): void {
    if (this.dragOverZoneId === zoneId) {
      this.dragOverZoneId = null;
    }
  }

  // Drop on target zone
  onZoneDrop(event: DragEvent, targetZoneId: string): void {
    event.preventDefault();
    this.dragOverZoneId = null;

    if (!this.draggedChip) return;

    const chip = this.draggedChip;
    const fromZone = this.draggedFromZone;

    // Remove from source
    if (fromZone === 'source') {
      this.sourceChips = this.sourceChips.filter(c => c.id !== chip.id);
    } else {
      // Remove from another target zone
      const zone = this.targetZones.find(z => z.id === fromZone);
      if (zone) {
        zone.items = zone.items.filter(c => c.id !== chip.id);
      }
    }

    // Add to target zone (avoid duplicates)
    const targetZone = this.targetZones.find(z => z.id === targetZoneId);
    if (targetZone && !targetZone.items.find(c => c.id === chip.id)) {
      targetZone.items.push(chip);
    }

    this.onChipDragEnd();
  }

  // Drop back to source
  onSourceDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOverZoneId = 'source';
  }

  onSourceDragLeave(): void {
    if (this.dragOverZoneId === 'source') {
      this.dragOverZoneId = null;
    }
  }

  onSourceDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragOverZoneId = null;

    if (!this.draggedChip || this.draggedFromZone === 'source') return;

    const chip = this.draggedChip;

    // Remove from target zone
    const fromZone = this.targetZones.find(z => z.id === this.draggedFromZone);
    if (fromZone) {
      fromZone.items = fromZone.items.filter(c => c.id !== chip.id);
    }

    // Add back to source (avoid duplicates)
    if (!this.sourceChips.find(c => c.id === chip.id)) {
      this.sourceChips.push(chip);
    }

    this.onChipDragEnd();
  }
}
