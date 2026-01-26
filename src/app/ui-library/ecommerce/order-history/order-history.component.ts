// ═══════════════════════════════════════════════════════════════
// ORDER HISTORY COMPONENT - Premium UI Library
// Orders list with status tracking and details
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface OrderItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  orderNumber: string;
  date: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  paymentMethod: string;
  shippingAddress: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

@Component({
  selector: 'ui-order-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OrderHistoryComponent {
  orders: Order[] = [
    {
      id: '1',
      orderNumber: 'ORD-2024-0156',
      date: new Date('2024-01-15'),
      status: 'delivered',
      items: [
        { id: '1', name: 'Premium Wireless Headphones', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Headphones', quantity: 1, price: 299.99 },
        { id: '2', name: 'USB-C Charging Cable', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Cable', quantity: 2, price: 19.99 }
      ],
      subtotal: 339.97,
      shipping: 0,
      tax: 27.20,
      total: 367.17,
      paymentMethod: 'Visa •••• 4242',
      shippingAddress: '123 Main St, New York, NY 10001',
      trackingNumber: 'TRK-789456123',
      estimatedDelivery: new Date('2024-01-20')
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-0142',
      date: new Date('2024-01-10'),
      status: 'shipped',
      items: [
        { id: '3', name: 'Ergonomic Office Chair', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Chair', quantity: 1, price: 449.99 }
      ],
      subtotal: 449.99,
      shipping: 29.99,
      tax: 38.40,
      total: 518.38,
      paymentMethod: 'Mastercard •••• 8888',
      shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
      trackingNumber: 'TRK-456789012',
      estimatedDelivery: new Date('2024-01-18')
    },
    {
      id: '3',
      orderNumber: 'ORD-2024-0128',
      date: new Date('2024-01-05'),
      status: 'processing',
      items: [
        { id: '4', name: 'Smart Watch Pro', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Watch', quantity: 1, price: 399.99 },
        { id: '5', name: 'Watch Band - Leather', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Band', quantity: 2, price: 49.99 }
      ],
      subtotal: 499.97,
      shipping: 0,
      tax: 40.00,
      total: 539.97,
      paymentMethod: 'PayPal',
      shippingAddress: '789 Pine Rd, Chicago, IL 60601'
    },
    {
      id: '4',
      orderNumber: 'ORD-2024-0098',
      date: new Date('2023-12-28'),
      status: 'cancelled',
      items: [
        { id: '6', name: 'Laptop Stand - Aluminum', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Stand', quantity: 1, price: 89.99 }
      ],
      subtotal: 89.99,
      shipping: 9.99,
      tax: 8.00,
      total: 107.98,
      paymentMethod: 'Visa •••• 4242',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: '5',
      orderNumber: 'ORD-2023-0875',
      date: new Date('2023-12-15'),
      status: 'refunded',
      items: [
        { id: '7', name: 'Wireless Keyboard', image: 'https://placehold.co/80x80/e5e7eb/64748b?text=Keyboard', quantity: 1, price: 149.99 }
      ],
      subtotal: 149.99,
      shipping: 0,
      tax: 12.00,
      total: 161.99,
      paymentMethod: 'Amex •••• 0005',
      shippingAddress: '321 Elm St, Boston, MA 02101'
    }
  ];

  // Filters
  searchQuery: string = '';
  statusFilter: string = 'all';
  dateFilter: string = 'all';

  // Expanded order
  expandedOrderId: string | null = null;

  // Order statuses for filter
  statuses = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'refunded', label: 'Refunded' }
  ];

  // Date ranges
  dateRanges = [
    { value: 'all', label: 'All Time' },
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: '90days', label: 'Last 90 Days' },
    { value: '1year', label: 'Last Year' }
  ];

  getFilteredOrders(): Order[] {
    return this.orders.filter(order => {
      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        const matchesSearch = 
          order.orderNumber.toLowerCase().includes(query) ||
          order.items.some(item => item.name.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Status filter
      if (this.statusFilter !== 'all' && order.status !== this.statusFilter) {
        return false;
      }

      // Date filter
      if (this.dateFilter !== 'all') {
        const now = new Date();
        const orderDate = new Date(order.date);
        let daysAgo = 0;
        
        switch (this.dateFilter) {
          case '7days': daysAgo = 7; break;
          case '30days': daysAgo = 30; break;
          case '90days': daysAgo = 90; break;
          case '1year': daysAgo = 365; break;
        }

        const cutoffDate = new Date(now.setDate(now.getDate() - daysAgo));
        if (orderDate < cutoffDate) return false;
      }

      return true;
    });
  }

  toggleOrderDetails(orderId: string): void {
    this.expandedOrderId = this.expandedOrderId === orderId ? null : orderId;
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'pending': 'status--pending',
      'processing': 'status--processing',
      'shipped': 'status--shipped',
      'delivered': 'status--delivered',
      'cancelled': 'status--cancelled',
      'refunded': 'status--refunded'
    };
    return classes[status] || '';
  }

  getStatusIcon(status: string): string {
    const icons: Record<string, string> = {
      'pending': 'bi-clock',
      'processing': 'bi-gear',
      'shipped': 'bi-truck',
      'delivered': 'bi-check-circle',
      'cancelled': 'bi-x-circle',
      'refunded': 'bi-arrow-return-left'
    };
    return icons[status] || 'bi-circle';
  }

  getProgressSteps(status: string): { step: string; completed: boolean; current: boolean }[] {
    const steps = ['pending', 'processing', 'shipped', 'delivered'];
    const currentIndex = steps.indexOf(status);
    
    return steps.map((step, index) => ({
      step,
      completed: index < currentIndex,
      current: index === currentIndex
    }));
  }

  trackOrder(trackingNumber: string): void {
    console.log('Tracking order:', trackingNumber);
  }

  reorder(order: Order): void {
    console.log('Reordering:', order.orderNumber);
  }

  downloadInvoice(order: Order): void {
    console.log('Downloading invoice for:', order.orderNumber);
  }

  cancelOrder(order: Order): void {
    console.log('Cancelling order:', order.orderNumber);
  }

  requestReturn(order: Order): void {
    console.log('Requesting return for:', order.orderNumber);
  }

  writeReview(item: OrderItem): void {
    console.log('Writing review for:', item.name);
  }

  getDeliveredCount(): number {
    return this.orders.filter(o => o.status === 'delivered').length;
  }

  getInProgressCount(): number {
    return this.orders.filter(o => o.status === 'shipped' || o.status === 'processing').length;
  }

  getCompletedStepsCount(status: string): number {
    return this.getProgressSteps(status).filter(s => s.completed).length;
  }
}
