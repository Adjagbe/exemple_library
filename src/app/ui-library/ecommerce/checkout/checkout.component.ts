import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  saveCard: boolean;
}

@Component({
  selector: 'ui-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent {
  currentStep: number = 1;
  totalSteps: number = 4;

  // Shipping address
  shippingAddress: Address = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  };

  // Billing address
  billingAddress: Address = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  };

  sameAsShipping: boolean = true;

  // Shipping method
  shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', description: '5-7 business days', price: 5.99 },
    { id: 'express', name: 'Express Shipping', description: '2-3 business days', price: 12.99 },
    { id: 'overnight', name: 'Overnight Shipping', description: 'Next business day', price: 24.99 },
    { id: 'free', name: 'Free Shipping', description: '7-10 business days', price: 0 }
  ];
  selectedShipping: string = 'standard';

  // Payment
  paymentMethod: string = 'card';
  paymentInfo: PaymentInfo = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  };

  savedCards = [
    { id: 'card1', last4: '4242', brand: 'Visa', expiry: '12/25' },
    { id: 'card2', last4: '8888', brand: 'Mastercard', expiry: '09/24' }
  ];
  selectedSavedCard: string = '';

  // Cart items
  cartItems: CartItem[] = [
    { id: '1', name: 'Premium Wireless Headphones', price: 299.99, quantity: 1, image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Item' },
    { id: '2', name: 'Laptop Stand - Silver', price: 79.99, quantity: 2, image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Item' },
    { id: '3', name: 'USB-C Hub 7-in-1', price: 49.99, quantity: 1, image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Item' }
  ];

  couponCode: string = 'SAVE10';
  discount: number = 50.99;

  isProcessing: boolean = false;
  orderPlaced: boolean = false;
  orderNumber: string = '';

  // Countries list
  countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'AU', name: 'Australia' }
  ];

  // States list (US)
  states = [
    { code: 'CA', name: 'California' },
    { code: 'NY', name: 'New York' },
    { code: 'TX', name: 'Texas' },
    { code: 'FL', name: 'Florida' },
    { code: 'WA', name: 'Washington' }
  ];

  getStepTitle(step: number): string {
    const titles = ['', 'Shipping', 'Billing', 'Payment', 'Review'];
    return titles[step];
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    if (step <= this.currentStep) {
      this.currentStep = step;
    }
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getShippingCost(): number {
    const method = this.shippingMethods.find(m => m.id === this.selectedShipping);
    return method ? method.price : 0;
  }

  getTax(): number {
    return (this.getSubtotal() - this.discount) * 0.08;
  }

  getTotal(): number {
    return this.getSubtotal() - this.discount + this.getShippingCost() + this.getTax();
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    this.paymentInfo.cardNumber = value.substring(0, 19);
  }

  formatExpiryDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.paymentInfo.expiryDate = value;
  }

  getCardBrand(): string {
    const number = this.paymentInfo.cardNumber.replace(/\s/g, '');
    if (number.startsWith('4')) return 'visa';
    if (number.startsWith('5')) return 'mastercard';
    if (number.startsWith('3')) return 'amex';
    if (number.startsWith('6')) return 'discover';
    return 'generic';
  }

  selectSavedCard(cardId: string): void {
    this.selectedSavedCard = cardId;
  }

  placeOrder(): void {
    this.isProcessing = true;
    
    // Simulate order processing
    setTimeout(() => {
      this.isProcessing = false;
      this.orderPlaced = true;
      this.orderNumber = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    }, 2500);
  }

  isShippingValid(): boolean {
    const a = this.shippingAddress;
    return !!(a.firstName && a.lastName && a.email && a.address && a.city && a.state && a.zipCode && a.country);
  }

  isBillingValid(): boolean {
    if (this.sameAsShipping) return true;
    const a = this.billingAddress;
    return !!(a.firstName && a.lastName && a.address && a.city && a.state && a.zipCode && a.country);
  }

  isPaymentValid(): boolean {
    if (this.paymentMethod === 'paypal') return true;
    if (this.selectedSavedCard) return true;
    const p = this.paymentInfo;
    return !!(p.cardNumber.length >= 19 && p.cardName && p.expiryDate.length === 5 && p.cvv.length >= 3);
  }

  copyBillingFromShipping(): void {
    if (this.sameAsShipping) {
      this.billingAddress = { ...this.shippingAddress };
    }
  }

  getSelectedShippingMethod(): { id: string; name: string; description: string; price: number } | undefined {
    return this.shippingMethods.find(m => m.id === this.selectedShipping);
  }
}
