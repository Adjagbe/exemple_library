// ═══════════════════════════════════════════════════════════════
// COUPON COMPONENT - Premium UI Library
// Coupon management interface with available and applied coupons
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed' | 'free_shipping' | 'bogo';
  value: number;
  description: string;
  minPurchase?: number;
  maxDiscount?: number;
  expiresAt: Date;
  usageLimit?: number;
  usedCount: number;
  categories?: string[];
  isActive: boolean;
}

@Component({
  selector: 'ui-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CouponComponent {
  // Available coupons
  availableCoupons: Coupon[] = [
    {
      id: '1',
      code: 'SAVE20',
      type: 'percentage',
      value: 20,
      description: '20% off your entire purchase',
      minPurchase: 50,
      maxDiscount: 100,
      expiresAt: new Date('2024-02-28'),
      usedCount: 0,
      isActive: true
    },
    {
      id: '2',
      code: 'FLAT50',
      type: 'fixed',
      value: 50,
      description: '$50 off orders over $200',
      minPurchase: 200,
      expiresAt: new Date('2024-03-15'),
      usedCount: 0,
      isActive: true
    },
    {
      id: '3',
      code: 'FREESHIP',
      type: 'free_shipping',
      value: 0,
      description: 'Free shipping on all orders',
      expiresAt: new Date('2024-02-20'),
      usedCount: 0,
      isActive: true
    },
    {
      id: '4',
      code: 'BOGO50',
      type: 'bogo',
      value: 50,
      description: 'Buy one get one 50% off on selected items',
      categories: ['Electronics', 'Accessories'],
      expiresAt: new Date('2024-01-31'),
      usedCount: 0,
      isActive: true
    },
    {
      id: '5',
      code: 'NEWUSER',
      type: 'percentage',
      value: 15,
      description: '15% off your first order',
      maxDiscount: 50,
      expiresAt: new Date('2024-12-31'),
      usageLimit: 1,
      usedCount: 1,
      isActive: false
    }
  ];

  // Applied coupon
  appliedCoupon: Coupon | null = null;

  // Form state
  couponInput: string = '';
  isApplying: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  // Cart info (mock)
  cartSubtotal: number = 175.00;
  shippingCost: number = 9.99;

  applyCoupon(): void {
    if (!this.couponInput.trim()) {
      this.errorMessage = 'Please enter a coupon code';
      return;
    }

    this.isApplying = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Simulate API call
    setTimeout(() => {
      const coupon = this.availableCoupons.find(
        c => c.code.toLowerCase() === this.couponInput.toLowerCase() && c.isActive
      );

      if (!coupon) {
        this.errorMessage = 'Invalid or expired coupon code';
        this.isApplying = false;
        return;
      }

      if (coupon.minPurchase && this.cartSubtotal < coupon.minPurchase) {
        this.errorMessage = `Minimum purchase of $${coupon.minPurchase} required`;
        this.isApplying = false;
        return;
      }

      if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
        this.errorMessage = 'This coupon has already been used';
        this.isApplying = false;
        return;
      }

      this.appliedCoupon = coupon;
      this.successMessage = 'Coupon applied successfully!';
      this.couponInput = '';
      this.isApplying = false;
    }, 1000);
  }

  removeCoupon(): void {
    this.appliedCoupon = null;
    this.successMessage = '';
  }

  selectCoupon(coupon: Coupon): void {
    if (!coupon.isActive) return;
    
    if (coupon.minPurchase && this.cartSubtotal < coupon.minPurchase) {
      this.errorMessage = `Add $${(coupon.minPurchase - this.cartSubtotal).toFixed(2)} more to use this coupon`;
      return;
    }

    this.appliedCoupon = coupon;
    this.successMessage = `Coupon "${coupon.code}" applied!`;
    this.errorMessage = '';
  }

  copyCouponCode(code: string): void {
    navigator.clipboard.writeText(code);
    this.successMessage = `Code "${code}" copied to clipboard!`;
    setTimeout(() => {
      if (this.successMessage.includes('copied')) {
        this.successMessage = '';
      }
    }, 2000);
  }

  getDiscountAmount(): number {
    if (!this.appliedCoupon) return 0;

    switch (this.appliedCoupon.type) {
      case 'percentage':
        let discount = this.cartSubtotal * (this.appliedCoupon.value / 100);
        if (this.appliedCoupon.maxDiscount) {
          discount = Math.min(discount, this.appliedCoupon.maxDiscount);
        }
        return discount;
      case 'fixed':
        return this.appliedCoupon.value;
      case 'free_shipping':
        return this.shippingCost;
      default:
        return 0;
    }
  }

  getTotal(): number {
    let total = this.cartSubtotal + this.shippingCost - this.getDiscountAmount();
    if (this.appliedCoupon?.type === 'free_shipping') {
      total = this.cartSubtotal;
    }
    return Math.max(0, total);
  }

  getCouponTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      'percentage': 'Percentage Off',
      'fixed': 'Fixed Amount',
      'free_shipping': 'Free Shipping',
      'bogo': 'Buy One Get One'
    };
    return labels[type] || type;
  }

  getCouponTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      'percentage': 'bi-percent',
      'fixed': 'bi-currency-dollar',
      'free_shipping': 'bi-truck',
      'bogo': 'bi-gift'
    };
    return icons[type] || 'bi-tag';
  }

  getDaysUntilExpiry(date: Date): number {
    const today = new Date();
    const expiry = new Date(date);
    const diff = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  }

  isExpiringSoon(date: Date): boolean {
    return this.getDaysUntilExpiry(date) <= 7;
  }

  isEligible(coupon: Coupon): boolean {
    if (!coupon.isActive) return false;
    if (coupon.minPurchase && this.cartSubtotal < coupon.minPurchase) return false;
    if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) return false;
    return true;
  }
}
