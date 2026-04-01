import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radio-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-rating.component.html',
  styleUrl: './radio-rating.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioRatingComponent {
  selectedRating: string = '5';
}
