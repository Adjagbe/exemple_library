import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-success-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-card.component.html',
  styleUrl: './success-card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SuccessCardComponent {}
