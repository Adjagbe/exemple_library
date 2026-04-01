import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface KPICard {
  id: string;
  title: string;
  value: number | string;
  change?: { value: number; type: 'increase' | 'decrease' | 'neutral'; period: string };
  sparkline?: number[];
  format?: 'number' | 'currency' | 'percentage' | 'duration';
}

@Component({
  selector: 'ui-kpi-cards-sparkline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-cards-sparkline.component.html',
  styleUrl: './kpi-cards-sparkline.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class KpiCardsSparklineComponent {
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
