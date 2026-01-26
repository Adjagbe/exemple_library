// ═══════════════════════════════════════════════════════════════
// SKELETON LOADER COMPONENT - Premium UI Library
// Loading placeholder animations
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkeletonLoaderComponent {
  // Demo controls
  isLoading: boolean = true;

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }
}
