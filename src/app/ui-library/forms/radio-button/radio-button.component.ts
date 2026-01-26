// ═══════════════════════════════════════════════════════════════
// RADIO BUTTON COMPONENT - Premium UI Library
// Custom styled radio buttons with multiple variants
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RadioOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
  price?: string;
}

@Component({
  selector: 'ui-radio-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioButtonComponent {
  // Basic radio
  selectedBasic: string = 'option1';
  basicOptions: RadioOption[] = [
    { id: 'basic1', label: 'Option 1', value: 'option1' },
    { id: 'basic2', label: 'Option 2', value: 'option2' },
    { id: 'basic3', label: 'Option 3 (Disabled)', value: 'option3', disabled: true }
  ];

  // Plan selection
  selectedPlan: string = 'pro';
  planOptions: RadioOption[] = [
    { 
      id: 'plan1', 
      label: 'Starter', 
      value: 'starter',
      description: 'Perfect for small projects',
      icon: 'bi-lightning',
      price: '$9/mo'
    },
    { 
      id: 'plan2', 
      label: 'Pro', 
      value: 'pro',
      description: 'Best for growing businesses',
      icon: 'bi-rocket',
      price: '$29/mo'
    },
    { 
      id: 'plan3', 
      label: 'Enterprise', 
      value: 'enterprise',
      description: 'For large organizations',
      icon: 'bi-building',
      price: '$99/mo'
    }
  ];

  // Shipping method
  selectedShipping: string = 'standard';
  shippingOptions: RadioOption[] = [
    { 
      id: 'ship1', 
      label: 'Standard Shipping', 
      value: 'standard',
      description: '5-7 business days',
      price: 'Free'
    },
    { 
      id: 'ship2', 
      label: 'Express Shipping', 
      value: 'express',
      description: '2-3 business days',
      price: '$9.99'
    },
    { 
      id: 'ship3', 
      label: 'Next Day Delivery', 
      value: 'nextday',
      description: 'Next business day',
      price: '$19.99'
    }
  ];

  // Color selection
  selectedColor: string = 'blue';
  colorOptions = [
    { id: 'red', value: 'red', color: '#dc2626' },
    { id: 'blue', value: 'blue', color: '#2563eb' },
    { id: 'green', value: 'green', color: '#16a34a' },
    { id: 'purple', value: 'purple', color: '#7c3aed' },
    { id: 'orange', value: 'orange', color: '#ea580c' },
    { id: 'black', value: 'black', color: '#111827' }
  ];

  // Rating selection
  selectedRating: string = '5';
}
