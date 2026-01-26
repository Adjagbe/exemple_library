// ═══════════════════════════════════════════════════════════════
// STATISTICS COMPONENT - Premium UI Library
// Statistical displays with charts and data visualizations
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─────────────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────────────
export interface StatItem {
  label: string;
  value: number;
  color: string;
  percentage?: number;
}

export interface TrendData {
  period: string;
  value: number;
}

export interface ComparisonData {
  label: string;
  current: number;
  previous: number;
  change: number;
}

@Component({
  selector: 'ui-statistics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent {
  // ─────────────────────────────────────────────────────────────────
  // DONUT CHART DATA
  // ─────────────────────────────────────────────────────────────────
  revenueBySource: StatItem[] = [
    { label: 'Direct', value: 42500, color: '#4f46e5', percentage: 45 },
    { label: 'Affiliés', value: 28300, color: '#10b981', percentage: 30 },
    { label: 'Publicité', value: 14200, color: '#f59e0b', percentage: 15 },
    { label: 'Autres', value: 9450, color: '#6b7280', percentage: 10 }
  ];

  // ─────────────────────────────────────────────────────────────────
  // BAR CHART DATA
  // ─────────────────────────────────────────────────────────────────
  monthlyTrend: TrendData[] = [
    { period: 'Jan', value: 12500 },
    { period: 'Fév', value: 18200 },
    { period: 'Mar', value: 15800 },
    { period: 'Avr', value: 22400 },
    { period: 'Mai', value: 19600 },
    { period: 'Jun', value: 28500 }
  ];

  // ─────────────────────────────────────────────────────────────────
  // COMPARISON DATA
  // ─────────────────────────────────────────────────────────────────
  comparisons: ComparisonData[] = [
    { label: 'Visiteurs uniques', current: 45280, previous: 38450, change: 17.76 },
    { label: 'Pages vues', current: 128450, previous: 115200, change: 11.50 },
    { label: 'Temps moyen', current: 3.42, previous: 3.15, change: 8.57 },
    { label: 'Taux de rebond', current: 32.5, previous: 38.2, change: -14.92 }
  ];

  // ─────────────────────────────────────────────────────────────────
  // TOP PRODUCTS
  // ─────────────────────────────────────────────────────────────────
  topProducts = [
    { name: 'MacBook Pro 16"', sales: 245, revenue: 612255, growth: 12.5 },
    { name: 'iPhone 15 Pro', sales: 432, revenue: 518400, growth: 8.2 },
    { name: 'iPad Pro 12.9"', sales: 189, revenue: 207711, growth: -3.4 },
    { name: 'AirPods Pro', sales: 567, revenue: 158760, growth: 24.8 },
    { name: 'Apple Watch', sales: 298, revenue: 119200, growth: 5.7 }
  ];

  // ─────────────────────────────────────────────────────────────────
  // GEOGRAPHIC DATA
  // ─────────────────────────────────────────────────────────────────
  regionData = [
    { name: 'France', value: 42, color: '#4f46e5' },
    { name: 'Belgique', value: 18, color: '#10b981' },
    { name: 'Suisse', value: 15, color: '#f59e0b' },
    { name: 'Canada', value: 12, color: '#0ea5e9' },
    { name: 'Autres', value: 13, color: '#6b7280' }
  ];

  // ─────────────────────────────────────────────────────────────────
  // TIME RANGE
  // ─────────────────────────────────────────────────────────────────
  selectedPeriod: string = '30days';
  periods = [
    { value: '7days', label: '7 jours' },
    { value: '30days', label: '30 jours' },
    { value: '90days', label: '90 jours' },
    { value: 'year', label: '1 an' }
  ];

  // ─────────────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────────────
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR',
      maximumFractionDigits: 0 
    }).format(value);
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('fr-FR').format(value);
  }

  getBarHeight(value: number): number {
    const max = Math.max(...this.monthlyTrend.map(t => t.value));
    return (value / max) * 100;
  }

  getDonutSegments(): string {
    let offset = 0;
    return this.revenueBySource.map(item => {
      const segment = `${item.color} ${offset}% ${offset + (item.percentage || 0)}%`;
      offset += item.percentage || 0;
      return segment;
    }).join(', ');
  }

  getTotalRevenue(): number {
    return this.revenueBySource.reduce((sum, item) => sum + item.value, 0);
  }

  getComparisonClass(change: number): string {
    if (change > 0) return 'positive';
    if (change < 0) return 'negative';
    return 'neutral';
  }

  getComparisonIcon(change: number): string {
    if (change > 0) return 'bi-arrow-up-short';
    if (change < 0) return 'bi-arrow-down-short';
    return 'bi-dash';
  }

  onPeriodChange(): void {
    console.log('Period changed:', this.selectedPeriod);
  }
}
