import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-checkbox-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-colors.component.html',
  styleUrl: './checkbox-colors.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxColorsComponent {}
