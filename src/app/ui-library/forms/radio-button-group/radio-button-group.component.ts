import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radio-button-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-button-group.component.html',
  styleUrl: './radio-button-group.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioButtonGroupComponent {
  selectedValue: string = 'option1';
}
