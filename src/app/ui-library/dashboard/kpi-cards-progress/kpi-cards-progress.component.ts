import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface KPICard {
  id: string;
  title: string;
  value: number | string;
  icon?: string;
  iconColor?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  progress?: { value: number; max: number; label?: string };
  format?: 'number' | 'currency' | 'percentage' | 'duration';
}

@Component({
  selector: 'ui-kpi-cards-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-cards-progress.component.html',
  styleUrl: './kpi-cards-progress.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class KpiCardsProgressComponent {
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

  getProgressPercentage(progress: { value: number; max: number }): number {
    return (progress.value / progress.max) * 100;
  }
}
