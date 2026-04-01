import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RadioOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  price?: string;
}

@Component({
  selector: 'ui-radio-shipping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-shipping.component.html',
  styleUrl: './radio-shipping.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RadioShippingComponent {
  selectedShipping: string = 'standard';
  shippingOptions: RadioOption[] = [
    { id: 'ship1', label: 'Standard Shipping', value: 'standard', description: '5-7 business days', price: 'Free' },
    { id: 'ship2', label: 'Express Shipping', value: 'express', description: '2-3 business days', price: '$9.99' },
    { id: 'ship3', label: 'Next Day Delivery', value: 'nextday', description: 'Next business day', price: '$19.99' }
  ];
}
