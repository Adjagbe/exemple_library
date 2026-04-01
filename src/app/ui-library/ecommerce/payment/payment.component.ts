import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  icon: string;
  description?: string;
}

interface SavedCard {
  id: string;
  brand: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
  cardHolder: string;
}

@Component({
  selector: 'ui-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent {
  // Payment methods
  paymentMethods: PaymentMethod[] = [
    { id: 'card', type: 'card', name: 'Credit / Debit Card', icon: 'bi-credit-card-2-front' },
    { id: 'paypal', type: 'paypal', name: 'PayPal', icon: 'bi-paypal' },
    { id: 'apple', type: 'wallet', name: 'Apple Pay', icon: 'bi-apple' },
    { id: 'google', type: 'wallet', name: 'Google Pay', icon: 'bi-google' },
    { id: 'bank', type: 'bank', name: 'Bank Transfer', icon: 'bi-bank' }
  ];
  
  selectedMethod: string = 'card';

  // Card form
  cardNumber: string = '';
  cardName: string = '';
  expiryDate: string = '';
  cvv: string = '';
  saveCard: boolean = false;

  // Saved cards
  savedCards: SavedCard[] = [
    { id: '1', brand: 'Visa', last4: '4242', expiry: '12/25', isDefault: true, cardHolder: 'John Doe' },
    { id: '2', brand: 'Mastercard', last4: '8888', expiry: '09/26', isDefault: false, cardHolder: 'John Doe' },
    { id: '3', brand: 'Amex', last4: '0005', expiry: '03/24', isDefault: false, cardHolder: 'John D.' }
  ];
  selectedSavedCard: string = '1';
  showNewCardForm: boolean = false;

  // Bank transfer
  bankName: string = '';
  accountNumber: string = '';
  routingNumber: string = '';
  accountType: string = 'checking';

  // Amount
  amount: number = 459.97;
  
  // State
  isProcessing: boolean = false;
  paymentSuccess: boolean = false;
  paymentError: string = '';

  selectMethod(methodId: string): void {
    this.selectedMethod = methodId;
    this.paymentError = '';
  }

  selectSavedCard(cardId: string): void {
    this.selectedSavedCard = cardId;
    this.showNewCardForm = false;
  }

  addNewCard(): void {
    this.showNewCardForm = true;
    this.selectedSavedCard = '';
  }

  deleteSavedCard(cardId: string, event: Event): void {
    event.stopPropagation();
    this.savedCards = this.savedCards.filter(c => c.id !== cardId);
    if (this.selectedSavedCard === cardId) {
      this.selectedSavedCard = this.savedCards.length > 0 ? this.savedCards[0].id : '';
      if (this.savedCards.length === 0) {
        this.showNewCardForm = true;
      }
    }
  }

  setDefaultCard(cardId: string, event: Event): void {
    event.stopPropagation();
    this.savedCards = this.savedCards.map(c => ({
      ...c,
      isDefault: c.id === cardId
    }));
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber = value.substring(0, 19);
  }

  formatExpiryDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.expiryDate = value;
  }

  getCardBrand(): string {
    const number = this.cardNumber.replace(/\s/g, '');
    if (number.startsWith('4')) return 'visa';
    if (number.startsWith('5')) return 'mastercard';
    if (number.startsWith('3')) return 'amex';
    if (number.startsWith('6')) return 'discover';
    return '';
  }

  getCardBrandIcon(): string {
    const brand = this.getCardBrand();
    switch (brand) {
      case 'visa': return 'bi-credit-card';
      case 'mastercard': return 'bi-credit-card';
      case 'amex': return 'bi-credit-card-2-back';
      default: return 'bi-credit-card';
    }
  }

  getSavedCardIcon(brand: string): string {
    switch (brand.toLowerCase()) {
      case 'visa': return 'bi-credit-card';
      case 'mastercard': return 'bi-credit-card-2-front';
      case 'amex': return 'bi-credit-card-2-back';
      default: return 'bi-credit-card';
    }
  }

  isFormValid(): boolean {
    if (this.selectedMethod === 'card') {
      if (this.selectedSavedCard && !this.showNewCardForm) {
        return true;
      }
      return this.cardNumber.length >= 19 && 
             this.cardName.length > 0 && 
             this.expiryDate.length === 5 && 
             this.cvv.length >= 3;
    }
    if (this.selectedMethod === 'bank') {
      return this.bankName.length > 0 && 
             this.accountNumber.length > 0 && 
             this.routingNumber.length > 0;
    }
    return true;
  }

  processPayment(): void {
    if (!this.isFormValid()) return;
    
    this.isProcessing = true;
    this.paymentError = '';

    // Simulate payment processing
    setTimeout(() => {
      this.isProcessing = false;
      
      // Simulate success (90% chance) or failure
      if (Math.random() > 0.1) {
        this.paymentSuccess = true;
      } else {
        this.paymentError = 'Payment failed. Please check your card details and try again.';
      }
    }, 2500);
  }

  retryPayment(): void {
    this.paymentSuccess = false;
    this.paymentError = '';
  }
}
