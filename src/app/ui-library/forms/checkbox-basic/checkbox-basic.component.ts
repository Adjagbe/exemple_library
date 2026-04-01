import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CheckboxItem { id: string; label: string; checked: boolean; disabled?: boolean; }

@Component({
  selector: 'ui-checkbox-basic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-basic.component.html',
  styleUrl: './checkbox-basic.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxBasicComponent {
  basicCheckboxes: CheckboxItem[] = [
    { id: 'option1', label: 'Option 1', checked: true },
    { id: 'option2', label: 'Option 2', checked: false },
    { id: 'option3', label: 'Option 3 (Disabled)', checked: false, disabled: true },
    { id: 'option4', label: 'Option 4 (Checked & Disabled)', checked: true, disabled: true }
  ];
}
