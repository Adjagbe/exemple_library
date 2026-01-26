// ═══════════════════════════════════════════════════════════════
// CHECKBOX COMPONENT - Premium UI Library
// Custom styled checkboxes with multiple variants
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CheckboxItem {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
}

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  // Basic checkboxes
  basicCheckboxes: CheckboxItem[] = [
    { id: 'option1', label: 'Option 1', checked: true },
    { id: 'option2', label: 'Option 2', checked: false },
    { id: 'option3', label: 'Option 3 (Disabled)', checked: false, disabled: true },
    { id: 'option4', label: 'Option 4 (Checked & Disabled)', checked: true, disabled: true }
  ];

  // Checkboxes with descriptions
  featureCheckboxes: CheckboxItem[] = [
    { 
      id: 'analytics', 
      label: 'Analytics & Reporting', 
      description: 'Get detailed insights and performance metrics',
      checked: true 
    },
    { 
      id: 'notifications', 
      label: 'Push Notifications', 
      description: 'Receive real-time alerts and updates',
      checked: true 
    },
    { 
      id: 'api', 
      label: 'API Access', 
      description: 'Full access to REST API endpoints',
      checked: false 
    },
    { 
      id: 'support', 
      label: 'Priority Support', 
      description: '24/7 dedicated customer support',
      checked: false 
    }
  ];

  // Parent-child checkboxes
  parentChecked: boolean = false;
  childCheckboxes: CheckboxItem[] = [
    { id: 'child1', label: 'Select All Documents', checked: false },
    { id: 'child2', label: 'Select All Images', checked: false },
    { id: 'child3', label: 'Select All Videos', checked: false }
  ];

  // Agreement checkbox
  agreementChecked: boolean = false;

  toggleParent(): void {
    this.childCheckboxes.forEach(child => child.checked = this.parentChecked);
  }

  updateParent(): void {
    const checkedCount = this.childCheckboxes.filter(c => c.checked).length;
    this.parentChecked = checkedCount === this.childCheckboxes.length;
  }

  isIndeterminate(): boolean {
    const checkedCount = this.childCheckboxes.filter(c => c.checked).length;
    return checkedCount > 0 && checkedCount < this.childCheckboxes.length;
  }

  getSelectedCount(): number {
    return this.featureCheckboxes.filter(f => f.checked).length;
  }
}
