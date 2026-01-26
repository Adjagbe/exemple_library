// ═══════════════════════════════════════════════════════════════
// INVOICE COMPONENT - Premium UI Library
// Printable invoice layout with company details
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  total: number;
}

interface Invoice {
  id: string;
  number: string;
  date: Date;
  dueDate: Date;
  status: 'draft' | 'pending' | 'paid' | 'overdue' | 'cancelled';
  
  // Company details
  company: {
    name: string;
    address: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    logo: string;
    taxId: string;
  };
  
  // Customer details
  customer: {
    name: string;
    company?: string;
    address: string;
    city: string;
    country: string;
    email: string;
    phone?: string;
  };
  
  // Items
  items: InvoiceItem[];
  
  // Totals
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  discount: number;
  discountType: 'percentage' | 'fixed';
  shipping: number;
  total: number;
  
  // Payment
  paymentMethod: string;
  paymentTerms: string;
  notes?: string;
}

@Component({
  selector: 'ui-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class InvoiceComponent {
  // Expose Math to template
  Math = Math;

  invoice: Invoice = {
    id: '1',
    number: 'INV-2024-0042',
    date: new Date('2024-01-15'),
    dueDate: new Date('2024-02-15'),
    status: 'pending',
    
    company: {
      name: 'TechCorp Solutions',
      address: '123 Business Avenue, Suite 500',
      city: 'San Francisco, CA 94102',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      email: 'billing@techcorp.com',
      website: 'www.techcorp.com',
      logo: 'https://placehold.co/150x50/4f46e5/ffffff?text=TechCorp',
      taxId: 'US123456789'
    },
    
    customer: {
      name: 'John Smith',
      company: 'Acme Industries',
      address: '456 Client Street, Floor 10',
      city: 'New York, NY 10001',
      country: 'United States',
      email: 'john.smith@acme.com',
      phone: '+1 (555) 987-6543'
    },
    
    items: [
      { id: '1', description: 'Premium Software License - Annual', quantity: 2, unitPrice: 299.99, tax: 48.00, total: 647.98 },
      { id: '2', description: 'Technical Support Package', quantity: 1, unitPrice: 149.99, tax: 12.00, total: 161.99 },
      { id: '3', description: 'Cloud Storage (500GB) - Monthly', quantity: 12, unitPrice: 9.99, tax: 9.59, total: 129.47 },
      { id: '4', description: 'Custom Integration Service', quantity: 5, unitPrice: 75.00, tax: 30.00, total: 405.00 },
      { id: '5', description: 'Training Session (2 hours)', quantity: 3, unitPrice: 120.00, tax: 28.80, total: 388.80 }
    ],
    
    subtotal: 1604.44,
    taxRate: 8,
    taxAmount: 128.39,
    discount: 100,
    discountType: 'fixed',
    shipping: 0,
    total: 1632.83,
    
    paymentMethod: 'Bank Transfer',
    paymentTerms: 'Net 30',
    notes: 'Thank you for your business! Please include the invoice number in your payment reference.'
  };

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'draft': 'status--draft',
      'pending': 'status--pending',
      'paid': 'status--paid',
      'overdue': 'status--overdue',
      'cancelled': 'status--cancelled'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'draft': 'Draft',
      'pending': 'Pending',
      'paid': 'Paid',
      'overdue': 'Overdue',
      'cancelled': 'Cancelled'
    };
    return labels[status] || status;
  }

  getDaysUntilDue(): number {
    const today = new Date();
    const due = new Date(this.invoice.dueDate);
    const diff = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  }

  printInvoice(): void {
    window.print();
  }

  downloadPDF(): void {
    // In a real app, this would generate a PDF
    console.log('Downloading PDF...');
  }

  sendInvoice(): void {
    // In a real app, this would send the invoice via email
    console.log('Sending invoice to:', this.invoice.customer.email);
  }

  duplicateInvoice(): void {
    console.log('Duplicating invoice...');
  }
}
