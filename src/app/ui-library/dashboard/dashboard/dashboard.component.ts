
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// INTERFACES
export interface DashboardKPI {
  id: string;
  label: string;
  value: number | string;
  previousValue?: number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: string;
  iconBg: string;
  format?: 'number' | 'currency' | 'percentage';
}

export interface DashboardActivity {
  id: number;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
  type: 'create' | 'update' | 'delete' | 'comment' | 'complete';
}

export interface DashboardTask {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignee: string;
}

export interface ChartData {
  labels: string[];
  values: number[];
  previousValues?: number[];
}

@Component({
  selector: 'ui-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

  // KPIs

  kpis: DashboardKPI[] = [
    {
      id: 'revenue',
      label: 'Revenus',
      value: 124500,
      previousValue: 98000,
      change: 27.04,
      changeType: 'increase',
      icon: 'bi-currency-euro',
      iconBg: 'primary',
      format: 'currency'
    },
    {
      id: 'orders',
      label: 'Commandes',
      value: 1284,
      previousValue: 1156,
      change: 11.07,
      changeType: 'increase',
      icon: 'bi-bag-check',
      iconBg: 'success',
      format: 'number'
    },
    {
      id: 'customers',
      label: 'Clients',
      value: 5632,
      previousValue: 5890,
      change: -4.38,
      changeType: 'decrease',
      icon: 'bi-people',
      iconBg: 'warning',
      format: 'number'
    },
    {
      id: 'conversion',
      label: 'Taux de conversion',
      value: 3.42,
      previousValue: 3.15,
      change: 8.57,
      changeType: 'increase',
      icon: 'bi-graph-up-arrow',
      iconBg: 'info',
      format: 'percentage'
    }
  ];


  // CHART DATA

  revenueChart: ChartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    values: [12500, 18200, 15800, 22400, 19600, 24500],
    previousValues: [10200, 14800, 13200, 18600, 16400, 20100]
  };

  categoryData = [
    { name: 'Électronique', value: 45, color: '#4f46e5' },
    { name: 'Vêtements', value: 28, color: '#10b981' },
    { name: 'Maison', value: 15, color: '#f59e0b' },
    { name: 'Sports', value: 12, color: '#ef4444' }
  ];


  // ACTIVITIES

  activities: DashboardActivity[] = [
    { id: 1, user: 'Marie Martin', avatar: 'MM', action: 'a créé', target: 'une nouvelle commande #1234', time: 'Il y a 5 min', type: 'create' },
    { id: 2, user: 'Jean Dupont', avatar: 'JD', action: 'a modifié', target: 'le produit "iPhone 15"', time: 'Il y a 15 min', type: 'update' },
    { id: 3, user: 'Sophie Bernard', avatar: 'SB', action: 'a commenté', target: 'sur le ticket #456', time: 'Il y a 30 min', type: 'comment' },
    { id: 4, user: 'Lucas Moreau', avatar: 'LM', action: 'a terminé', target: 'la tâche "Mise à jour stock"', time: 'Il y a 1h', type: 'complete' },
    { id: 5, user: 'Emma Petit', avatar: 'EP', action: 'a supprimé', target: 'le client inactif #789', time: 'Il y a 2h', type: 'delete' }
  ];


  // TASKS

  tasks: DashboardTask[] = [
    { id: 1, title: 'Finaliser la présentation Q2', status: 'in-progress', priority: 'high', dueDate: '2024-05-10', assignee: 'JD' },
    { id: 2, title: 'Réviser les stocks produits', status: 'todo', priority: 'medium', dueDate: '2024-05-12', assignee: 'MM' },
    { id: 3, title: 'Contacter fournisseur X', status: 'done', priority: 'low', dueDate: '2024-05-08', assignee: 'SB' },
    { id: 4, title: 'Mise à jour documentation', status: 'in-progress', priority: 'medium', dueDate: '2024-05-15', assignee: 'LM' }
  ];


  // TIME RANGE

  selectedTimeRange: string = '30days';
  timeRanges = [
    { value: '7days', label: '7 jours' },
    { value: '30days', label: '30 jours' },
    { value: '90days', label: '90 jours' },
    { value: 'year', label: '1 an' }
  ];


  // HELPERS

  formatKPIValue(kpi: DashboardKPI): string {
    if (kpi.format === 'currency') {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(kpi.value as number);
    }
    if (kpi.format === 'percentage') {
      return `${kpi.value}%`;
    }
    return new Intl.NumberFormat('fr-FR').format(kpi.value as number);
  }

  getChangeClass(changeType: string | undefined): string {
    if (changeType === 'increase') return 'change--up';
    if (changeType === 'decrease') return 'change--down';
    return 'change--neutral';
  }

  getChangeIcon(changeType: string | undefined): string {
    if (changeType === 'increase') return 'bi-arrow-up-short';
    if (changeType === 'decrease') return 'bi-arrow-down-short';
    return 'bi-dash';
  }

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'create': 'bi-plus-circle',
      'update': 'bi-pencil',
      'delete': 'bi-trash',
      'comment': 'bi-chat-dots',
      'complete': 'bi-check-circle'
    };
    return icons[type] || 'bi-circle';
  }

  getActivityIconClass(type: string): string {
    const classes: { [key: string]: string } = {
      'create': 'activity-icon--success',
      'update': 'activity-icon--primary',
      'delete': 'activity-icon--danger',
      'comment': 'activity-icon--info',
      'complete': 'activity-icon--success'
    };
    return classes[type] || '';
  }

  getPriorityClass(priority: string): string {
    return `priority--${priority}`;
  }

  getStatusClass(status: string): string {
    return `status--${status}`;
  }

  getChartBarHeight(value: number): number {
    const max = Math.max(...this.revenueChart.values);
    return (value / max) * 100;
  }

  onTimeRangeChange(): void {
    console.log('Time range changed:', this.selectedTimeRange);
  }
}
