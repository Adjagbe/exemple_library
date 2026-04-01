import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface KPICard {
  id: string;
  title: string;
  value: number | string;
  change?: { value: number; type: 'increase' | 'decrease' | 'neutral'; period: string };
  icon?: string;
  iconColor?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  format?: 'number' | 'currency' | 'percentage' | 'duration';
}

@Component({
  selector: 'ui-kpi-cards-compact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-cards-compact.component.html',
  styleUrl: './kpi-cards-compact.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class KpiCardsCompactComponent {
  compactKPIs: KPICard[] = [
    {
      id: 'revenue',
      title: "Chiffre d'affaires",
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

  formatValue(kpi: KPICard): string {
    if (typeof kpi.value === 'string') return kpi.value;
    switch (kpi.format) {
      case 'currency':
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(kpi.value);
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
}
