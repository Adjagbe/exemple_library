import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-basic.component.html',
  styleUrl: './skeleton-basic.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkeletonBasicComponent {
  isLoading = true;
  toggleLoading(): void { this.isLoading = !this.isLoading; }
}
