

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface ActivityItem {
  id: string;
  type: 'login' | 'logout' | 'update' | 'create' | 'delete' | 'comment' | 'share' | 'download' | 'upload' | 'payment';
  title: string;
  description: string;
  timestamp: string;
  user?: {
    name: string;
    avatar: string;
  };
  metadata?: {
    ip?: string;
    device?: string;
    location?: string;
    file?: string;
    amount?: number;
  };
}

@Component({
  selector: 'ui-activity-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activity-history.component.html',
  styleUrls: ['./activity-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityHistoryComponent {

  selectedFilter: string = 'all';
  searchQuery: string = '';

  filters = [
    { value: 'all', label: 'Toutes les activités' },
    { value: 'login', label: 'Connexions' },
    { value: 'update', label: 'Modifications' },
    { value: 'create', label: 'Créations' },
    { value: 'delete', label: 'Suppressions' },
    { value: 'payment', label: 'Paiements' }
  ];


  activities: ActivityItem[] = [
    {
      id: '1',
      type: 'login',
      title: 'Connexion réussie',
      description: 'Vous vous êtes connecté depuis un nouvel appareil',
      timestamp: '2024-05-10T14:32:00',
      metadata: {
        ip: '192.168.1.42',
        device: 'Chrome sur Windows 11',
        location: 'Paris, France'
      }
    },
    {
      id: '2',
      type: 'update',
      title: 'Profil mis à jour',
      description: 'Photo de profil et informations de contact modifiées',
      timestamp: '2024-05-10T11:15:00'
    },
    {
      id: '3',
      type: 'create',
      title: 'Nouveau projet créé',
      description: 'Projet "Refonte Site Web" ajouté à votre espace',
      timestamp: '2024-05-10T09:45:00',
      user: {
        name: 'Marie Laurent',
        avatar: 'ML'
      }
    },
    {
      id: '4',
      type: 'share',
      title: 'Document partagé',
      description: 'Rapport Q1 2024 partagé avec l\'équipe Marketing',
      timestamp: '2024-05-09T16:20:00',
      metadata: {
        file: 'rapport-q1-2024.pdf'
      }
    },
    {
      id: '5',
      type: 'payment',
      title: 'Paiement effectué',
      description: 'Abonnement mensuel Plan Business',
      timestamp: '2024-05-09T10:00:00',
      metadata: {
        amount: 99.00
      }
    },
    {
      id: '6',
      type: 'comment',
      title: 'Nouveau commentaire',
      description: 'Commentaire ajouté sur la tâche "Design Homepage"',
      timestamp: '2024-05-08T15:30:00',
      user: {
        name: 'Thomas Martin',
        avatar: 'TM'
      }
    },
    {
      id: '7',
      type: 'download',
      title: 'Téléchargement',
      description: 'Export des données utilisateurs téléchargé',
      timestamp: '2024-05-08T11:00:00',
      metadata: {
        file: 'users-export-20240508.csv'
      }
    },
    {
      id: '8',
      type: 'delete',
      title: 'Élément supprimé',
      description: 'Projet "Test Archive" supprimé définitivement',
      timestamp: '2024-05-07T09:15:00'
    },
    {
      id: '9',
      type: 'logout',
      title: 'Déconnexion',
      description: 'Session terminée manuellement',
      timestamp: '2024-05-06T18:45:00',
      metadata: {
        device: 'Safari sur macOS'
      }
    },
    {
      id: '10',
      type: 'upload',
      title: 'Fichier uploadé',
      description: 'Nouvelle ressource ajoutée au projet',
      timestamp: '2024-05-06T14:20:00',
      metadata: {
        file: 'maquette-v2.fig'
      }
    }
  ];


  getFilteredActivities(): ActivityItem[] {
    return this.activities.filter(activity => {
      const matchesFilter = this.selectedFilter === 'all' || activity.type === this.selectedFilter;
      const matchesSearch = !this.searchQuery || 
        activity.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        activity.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      login: 'bi-box-arrow-in-right',
      logout: 'bi-box-arrow-left',
      update: 'bi-pencil-square',
      create: 'bi-plus-circle',
      delete: 'bi-trash',
      comment: 'bi-chat-dots',
      share: 'bi-share',
      download: 'bi-download',
      upload: 'bi-upload',
      payment: 'bi-credit-card'
    };
    return icons[type] || 'bi-activity';
  }

  getActivityClass(type: string): string {
    const classes: { [key: string]: string } = {
      login: 'activity--success',
      logout: 'activity--neutral',
      update: 'activity--info',
      create: 'activity--success',
      delete: 'activity--danger',
      comment: 'activity--info',
      share: 'activity--primary',
      download: 'activity--neutral',
      upload: 'activity--success',
      payment: 'activity--warning'
    };
    return classes[type] || '';
  }

  formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getRelativeTime(timestamp: string): string {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `Il y a ${minutes} min`;
    if (hours < 24) return `Il y a ${hours}h`;
    if (days === 1) return 'Hier';
    if (days < 7) return `Il y a ${days} jours`;
    return this.formatTimestamp(timestamp);
  }

  groupByDate(activities: ActivityItem[]): { date: string; items: ActivityItem[] }[] {
    const groups: { [key: string]: ActivityItem[] } = {};
    
    activities.forEach(activity => {
      const date = new Date(activity.timestamp).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(activity);
    });

    return Object.entries(groups).map(([date, items]) => ({
      date: this.formatGroupDate(date),
      items
    }));
  }

  formatGroupDate(dateStr: string): string {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Aujourd\'hui';
    if (date.toDateString() === yesterday.toDateString()) return 'Hier';
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  clearFilters(): void {
    this.selectedFilter = 'all';
    this.searchQuery = '';
  }
}
