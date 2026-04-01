import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RadioOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'ui-radio-basic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-basic.component.html',
  styleUrl: './radio-basic.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioBasicComponent {
  selectedBasic: string = 'option1';
  basicOptions: RadioOption[] = [
    { id: 'basic1', label: 'Option 1', value: 'option1' },
    { id: 'basic2', label: 'Option 2', value: 'option2' },
    { id: 'basic3', label: 'Option 3 (Disabled)', value: 'option3', disabled: true }
  ];
}
