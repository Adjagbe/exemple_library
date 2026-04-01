import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CheckboxItem { id: string; label: string; checked: boolean; }

@Component({
  selector: 'ui-checkbox-nested',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-nested.component.html',
  styleUrl: './checkbox-nested.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxNestedComponent {
  parentChecked: boolean = false;
  childCheckboxes: CheckboxItem[] = [
    { id: 'child1', label: 'Select All Documents', checked: false },
    { id: 'child2', label: 'Select All Images', checked: false },
    { id: 'child3', label: 'Select All Videos', checked: false }
  ];

  toggleParent(): void { this.childCheckboxes.forEach(child => child.checked = this.parentChecked); }
  updateParent(): void { this.parentChecked = this.childCheckboxes.filter(c => c.checked).length === this.childCheckboxes.length; }
  isIndeterminate(): boolean { const c = this.childCheckboxes.filter(c => c.checked).length; return c > 0 && c < this.childCheckboxes.length; }
}
