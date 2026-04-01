import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RadioOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: string;
  price?: string;
}

@Component({
  selector: 'ui-radio-plan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-plan.component.html',
  styleUrl: './radio-plan.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioPlanComponent {
  selectedPlan: string = 'pro';
  planOptions: RadioOption[] = [
    { id: 'plan1', label: 'Starter', value: 'starter', description: 'Perfect for small projects', icon: 'bi-lightning', price: '$9/mo' },
    { id: 'plan2', label: 'Pro', value: 'pro', description: 'Best for growing businesses', icon: 'bi-rocket', price: '$29/mo' },
    { id: 'plan3', label: 'Enterprise', value: 'enterprise', description: 'For large organizations', icon: 'bi-building', price: '$99/mo' }
  ];
}
