import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-checkbox-sizes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-sizes.component.html',
  styleUrl: './checkbox-sizes.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxSizesComponent {}
