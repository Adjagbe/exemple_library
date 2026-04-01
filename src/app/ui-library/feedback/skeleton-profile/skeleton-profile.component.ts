import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-profile.component.html',
  styleUrl: './skeleton-profile.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkeletonProfileComponent {
  isLoading = true;
  toggleLoading(): void { this.isLoading = !this.isLoading; }
}
