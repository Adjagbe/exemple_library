
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'mention' | 'task' | 'message';
  title: string;
  message: string;
  time: Date;
  read: boolean;
  avatar?: {
    initials: string;
    color: string;
  };
  action?: {
    label: string;
    url?: string;
  };
}

@Component({
  selector: 'ui-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent {
  // Filter
  activeFilter: string = 'all';

  // Notifications
  notifications: Notification[] = [
    {
      id: '1',
      type: 'mention',
      title: 'Marie Lambert vous a mentionné',
      message: 'dans le projet "Refonte UI Dashboard"',
      time: new Date(Date.now() - 5 * 60000),
      read: false,
      avatar: { initials: 'ML', color: '#4f46e5' },
      action: { label: 'Voir', url: '#' }
    },
    {
      id: '2',
      type: 'task',
      title: 'Nouvelle tâche assignée',
      message: 'Implémenter le système d\'authentification OAuth2',
      time: new Date(Date.now() - 15 * 60000),
      read: false,
      action: { label: 'Voir la tâche', url: '#' }
    },
    {
      id: '3',
      type: 'success',
      title: 'Déploiement réussi',
      message: 'La version 2.4.0 a été déployée en production',
      time: new Date(Date.now() - 30 * 60000),
      read: false
    },
    {
      id: '4',
      type: 'message',
      title: 'Nouveau message de Pierre Durand',
      message: '"Hey ! Tu as vu les dernières maquettes ?"',
      time: new Date(Date.now() - 45 * 60000),
      read: true,
      avatar: { initials: 'PD', color: '#10b981' },
      action: { label: 'Répondre', url: '#' }
    },
    {
      id: '5',
      type: 'warning',
      title: 'Quota de stockage presque atteint',
      message: '85% de votre espace de stockage est utilisé',
      time: new Date(Date.now() - 2 * 3600000),
      read: true,
      action: { label: 'Gérer', url: '#' }
    },
    {
      id: '6',
      type: 'info',
      title: 'Mise à jour disponible',
      message: 'Une nouvelle version de l\'application est disponible',
      time: new Date(Date.now() - 3 * 3600000),
      read: true,
      action: { label: 'Mettre à jour', url: '#' }
    },
    {
      id: '7',
      type: 'error',
      title: 'Échec de la synchronisation',
      message: 'La synchronisation avec le serveur a échoué',
      time: new Date(Date.now() - 5 * 3600000),
      read: true,
      action: { label: 'Réessayer', url: '#' }
    },
    {
      id: '8',
      type: 'task',
      title: 'Rappel : Deadline demain',
      message: 'La tâche "Documentation API" doit être terminée demain',
      time: new Date(Date.now() - 24 * 3600000),
      read: true
    }
  ];

  // Get filtered notifications
  get filteredNotifications(): Notification[] {
    if (this.activeFilter === 'all') return this.notifications;
    if (this.activeFilter === 'unread') return this.notifications.filter(n => !n.read);
    return this.notifications.filter(n => n.type === this.activeFilter);
  }

  // Get unread count
  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  // Mark as read
  markAsRead(notification: Notification): void {
    notification.read = true;
  }

  // Mark all as read
  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  // Delete notification
  deleteNotification(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  // Clear all
  clearAll(): void {
    this.notifications = [];
  }

  // Get notification icon
  getNotificationIcon(type: string): string {
    const icons: Record<string, string> = {
      info: 'bi-info-circle-fill',
      success: 'bi-check-circle-fill',
      warning: 'bi-exclamation-triangle-fill',
      error: 'bi-x-circle-fill',
      mention: 'bi-at',
      task: 'bi-check2-square',
      message: 'bi-chat-dots-fill'
    };
    return icons[type] || 'bi-bell-fill';
  }

  // Get notification color
  getNotificationColor(type: string): string {
    const colors: Record<string, string> = {
      info: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      mention: '#8b5cf6',
      task: '#06b6d4',
      message: '#4f46e5'
    };
    return colors[type] || '#6b7280';
  }

  // Format time
  formatTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'À l\'instant';
    if (minutes < 60) return `Il y a ${minutes} min`;
    if (hours < 24) return `Il y a ${hours}h`;
    if (days === 1) return 'Hier';
    if (days < 7) return `Il y a ${days} jours`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  // Set filter
  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
