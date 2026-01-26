import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
  maxQuantity: number;
}

@Component({
  selector: 'ui-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  items: CartItem[] = [
    {
      id: '1',
      name: 'MacBook Pro 16"',
      variant: 'M3 Pro, 512 Go, Noir sidéral',
      price: 2799,
      quantity: 1,
      image: 'https://picsum.photos/200/200?random=1',
      inStock: true,
      maxQuantity: 5
    },
    {
      id: '2',
      name: 'Sony WH-1000XM5',
      variant: 'Noir',
      price: 379,
      quantity: 2,
      image: 'https://picsum.photos/200/200?random=2',
      inStock: true,
      maxQuantity: 10
    },
    {
      id: '3',
      name: 'Apple Watch Ultra 2',
      variant: '49mm, Titane, Bracelet Alpine',
      price: 899,
      quantity: 1,
      image: 'https://picsum.photos/200/200?random=3',
      inStock: false,
      maxQuantity: 3
    }
  ];

  couponCode = '';
  appliedCoupon: { code: string; discount: number } | null = null;
  couponError = '';

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get discount(): number {
    return this.appliedCoupon ? this.subtotal * (this.appliedCoupon.discount / 100) : 0;
  }

  get shipping(): number {
    return this.subtotal > 100 ? 0 : 9.99;
  }

  get total(): number {
    return this.subtotal - this.discount + this.shipping;
  }

  get itemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity < 1) {
      this.removeItem(item);
    } else if (quantity <= item.maxQuantity) {
      item.quantity = quantity;
    }
  }

  incrementQuantity(item: CartItem): void {
    if (item.quantity < item.maxQuantity) {
      item.quantity++;
    }
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  applyCoupon(): void {
    this.couponError = '';
    
    // Simulation de validation de coupon
    const validCoupons: Record<string, number> = {
      'SAVE10': 10,
      'SAVE20': 20,
      'WELCOME': 15
    };

    const discount = validCoupons[this.couponCode.toUpperCase()];
    
    if (discount) {
      this.appliedCoupon = { code: this.couponCode.toUpperCase(), discount };
      this.couponCode = '';
    } else {
      this.couponError = 'Code promo invalide';
    }
  }

  removeCoupon(): void {
    this.appliedCoupon = null;
  }

  clearCart(): void {
    if (confirm('Êtes-vous sûr de vouloir vider votre panier ?')) {
      this.items = [];
    }
  }

  checkout(): void {
    console.log('Proceeding to checkout', {
      items: this.items,
      subtotal: this.subtotal,
      discount: this.discount,
      shipping: this.shipping,
      total: this.total
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }
}
