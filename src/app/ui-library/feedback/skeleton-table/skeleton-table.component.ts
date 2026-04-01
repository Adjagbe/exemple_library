import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-table.component.html',
  styleUrl: './skeleton-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkeletonTableComponent {
  isLoading = true;
  toggleLoading(): void { this.isLoading = !this.isLoading; }
}
