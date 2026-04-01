import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-cards.component.html',
  styleUrl: './skeleton-cards.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkeletonCardsComponent {
  isLoading = true;
  toggleLoading(): void { this.isLoading = !this.isLoading; }
}
