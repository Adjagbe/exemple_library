import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radio-color',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-color.component.html',
  styleUrl: './radio-color.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioColorComponent {
  selectedColor: string = 'blue';
  colorOptions = [
    { id: 'red', value: 'red', color: '#dc2626' },
    { id: 'blue', value: 'blue', color: '#2563eb' },
    { id: 'green', value: 'green', color: '#16a34a' },
    { id: 'purple', value: 'purple', color: '#7c3aed' },
    { id: 'orange', value: 'orange', color: '#ea580c' },
    { id: 'black', value: 'black', color: '#111827' }
  ];
}
