// ═══════════════════════════════════════════════════════════════
// KPI CARDS COMPONENT - Premium UI Library
// Reusable KPI card components with various styles
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

// ─────────────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────────────
export interface KPICard {
  id: string;
  title: string;
  value: number | string;
  subtitle?: string;
  change?: {
    value: number;
    type: 'increase' | 'decrease' | 'neutral';
    period: string;
  };
  icon?: string;
  iconColor?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  sparkline?: number[];
  progress?: {
    value: number;
    max: number;
    label?: string;
  };
  format?: 'number' | 'currency' | 'percentage' | 'duration';
}

@Component({
  selector: 'ui-kpi-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-cards.component.html',
  styleUrl: './kpi-cards.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class KpiCardsComponent {
  // ─────────────────────────────────────────────────────────────────
  // BASIC KPIs
  // ─────────────────────────────────────────────────────────────────
  basicKPIs: KPICard[] = [
    {
      id: 'revenue',
      title: 'Chiffre d\'affaires',
      value: 284750,
      format: 'currency',
      change: { value: 12.5, type: 'increase', period: 'vs mois dernier' },
      icon: 'bi-currency-euro',
      iconColor: 'primary'
    },
    {
      id: 'orders',
      title: 'Commandes',
      value: 2845,
      format: 'number',
      change: { value: 8.2, type: 'increase', period: 'vs mois dernier' },
      icon: 'bi-bag-check',
      iconColor: 'success'
    },
    {
      id: 'customers',
      title: 'Nouveaux clients',
      value: 456,
      format: 'number',
      change: { value: -3.1, type: 'decrease', period: 'vs mois dernier' },
      icon: 'bi-people',
      iconColor: 'warning'
    },
    {
      id: 'conversion',
      title: 'Taux de conversion',
      value: 4.28,
      format: 'percentage',
      change: { value: 0.5, type: 'increase', period: 'vs mois dernier' },
      icon: 'bi-graph-up-arrow',
      iconColor: 'info'
    }
  ];

  // ─────────────────────────────────────────────────────────────────
  // SPARKLINE KPIs
  // ─────────────────────────────────────────────────────────────────
  sparklineKPIs: KPICard[] = [
    {
      id: 'visitors',
      title: 'Visiteurs',
      value: 45280,
      format: 'number',
      change: { value: 15.3, type: 'increase', period: '7 derniers jours' },
      sparkline: [25, 35, 28, 45, 38, 52, 65]
    },
    {
      id: 'pageviews',
      title: 'Pages vues',
      value: 128450,
      format: 'number',
      change: { value: 7.8, type: 'increase', period: '7 derniers jours' },
      sparkline: [40, 55, 48, 62, 58, 72, 85]
    },
    {
      id: 'bounce',
      title: 'Taux de rebond',
      value: 32.5,
      format: 'percentage',
      change: { value: -5.2, type: 'decrease', period: '7 derniers jours' },
      sparkline: [45, 42, 38, 35, 38, 34, 32]
    },
    {
      id: 'duration',
      title: 'Durée moyenne',
      value: '3:42',
      format: 'duration',
      change: { value: 12, type: 'increase', period: '7 derniers jours' },
      sparkline: [180, 195, 210, 205, 218, 225, 222]
    }
  ];

  // ─────────────────────────────────────────────────────────────────
  // PROGRESS KPIs
  // ─────────────────────────────────────────────────────────────────
  progressKPIs: KPICard[] = [
    {
      id: 'goal-revenue',
      title: 'Objectif revenus',
      value: 284750,
      format: 'currency',
      progress: { value: 284750, max: 350000, label: '81% atteint' },
      icon: 'bi-bullseye',
      iconColor: 'primary'
    },
    {
      id: 'goal-customers',
      title: 'Objectif clients',
      value: 456,
      format: 'number',
      progress: { value: 456, max: 500, label: '91% atteint' },
      icon: 'bi-person-check',
      iconColor: 'success'
    },
    {
      id: 'tickets',
      title: 'Tickets résolus',
      value: 89,
      format: 'number',
      progress: { value: 89, max: 120, label: '74% terminé' },
      icon: 'bi-ticket-perforated',
      iconColor: 'warning'
    },
    {
      id: 'tasks',
      title: 'Tâches complétées',
      value: 42,
      format: 'number',
      progress: { value: 42, max: 50, label: '84% fait' },
      icon: 'bi-check2-square',
      iconColor: 'info'
    }
  ];

  // ─────────────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────────────
  formatValue(kpi: KPICard): string {
    if (typeof kpi.value === 'string') return kpi.value;
    
    switch (kpi.format) {
      case 'currency':
        return new Intl.NumberFormat('fr-FR', { 
          style: 'currency', 
          currency: 'EUR',
          maximumFractionDigits: 0 
        }).format(kpi.value);
      case 'percentage':
        return `${kpi.value}%`;
      default:
        return new Intl.NumberFormat('fr-FR').format(kpi.value);
    }
  }

  getChangeClass(type: string): string {
    return `change--${type}`;
  }

  getChangeIcon(type: string): string {
    if (type === 'increase') return 'bi-arrow-up-short';
    if (type === 'decrease') return 'bi-arrow-down-short';
    return 'bi-dash';
  }

  getProgressPercentage(progress: { value: number; max: number }): number {
    return (progress.value / progress.max) * 100;
  }

  getSparklinePoints(values: number[]): string {
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;
    const width = 100;
    const height = 40;
    
    return values.map((val, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${x},${y}`;
    }).join(' ');
  }

  getSparklineColor(kpi: KPICard): string {
    if (kpi.change?.type === 'decrease') {
      return kpi.id === 'bounce' ? '#10b981' : '#ef4444';
    }
    return '#4f46e5';
  }
}
