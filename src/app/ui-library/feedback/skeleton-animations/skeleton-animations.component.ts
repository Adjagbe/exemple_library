import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-skeleton-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-animations.component.html',
  styleUrl: './skeleton-animations.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkeletonAnimationsComponent {}
