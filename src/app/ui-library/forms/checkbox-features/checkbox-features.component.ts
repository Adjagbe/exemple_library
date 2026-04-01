import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CheckboxItem { id: string; label: string; description?: string; checked: boolean; }

@Component({
  selector: 'ui-checkbox-features',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-features.component.html',
  styleUrl: './checkbox-features.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFeaturesComponent {
  featureCheckboxes: CheckboxItem[] = [
    { id: 'analytics', label: 'Analytics & Reporting', description: 'Get detailed insights and performance metrics', checked: true },
    { id: 'notifications', label: 'Push Notifications', description: 'Receive real-time alerts and updates', checked: true },
    { id: 'api', label: 'API Access', description: 'Full access to REST API endpoints', checked: false },
    { id: 'support', label: 'Priority Support', description: '24/7 dedicated customer support', checked: false }
  ];

  getSelectedCount(): number { return this.featureCheckboxes.filter(f => f.checked).length; }
}
