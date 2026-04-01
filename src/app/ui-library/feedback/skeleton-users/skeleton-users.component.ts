import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-users.component.html',
  styleUrl: './skeleton-users.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkeletonUsersComponent {
  isLoading = true;
  toggleLoading(): void { this.isLoading = !this.isLoading; }
}
