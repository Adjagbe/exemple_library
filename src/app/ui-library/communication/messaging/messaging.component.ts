
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  status: 'online' | 'offline' | 'away' | 'busy';
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
}

interface Attachment {
  type: 'image' | 'file' | 'link';
  name: string;
  url: string;
  size?: string;
}

@Component({
  selector: 'ui-messaging',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagingComponent {
  // Current user
  currentUserId: string = 'me';

  // Message input
  messageInput: string = '';

  // Search
  searchQuery: string = '';

  // Selected contact
  selectedContact: Contact | null = null;

  // Contacts
  contacts: Contact[] = [
    {
      id: '1',
      name: 'Marie Lambert',
      initials: 'ML',
      status: 'online',
      lastMessage: 'D\'accord, on se voit demain !',
      lastMessageTime: new Date(Date.now() - 5 * 60000),
      unreadCount: 2
    },
    {
      id: '2',
      name: 'Pierre Durand',
      initials: 'PD',
      status: 'online',
      lastMessage: 'Le projet avance bien 🚀',
      lastMessageTime: new Date(Date.now() - 30 * 60000)
    },
    {
      id: '3',
      name: 'Sophie Martin',
      initials: 'SM',
      status: 'away',
      lastMessage: 'J\'ai envoyé le rapport',
      lastMessageTime: new Date(Date.now() - 2 * 3600000),
      unreadCount: 1
    },
    {
      id: '4',
      name: 'Jean Dupont',
      initials: 'JD',
      status: 'busy',
      lastMessage: 'Parfait, merci !',
      lastMessageTime: new Date(Date.now() - 24 * 3600000)
    },
    {
      id: '5',
      name: 'Claire Bernard',
      initials: 'CB',
      status: 'offline',
      lastMessage: 'À bientôt',
      lastMessageTime: new Date(Date.now() - 48 * 3600000)
    }
  ];

  // Messages (for selected contact)
  messages: Message[] = [
    {
      id: 'm1',
      senderId: '1',
      content: 'Salut ! Comment ça va ?',
      timestamp: new Date(Date.now() - 60 * 60000),
      status: 'read'
    },
    {
      id: 'm2',
      senderId: 'me',
      content: 'Hey ! Ça va super bien, merci. Et toi ?',
      timestamp: new Date(Date.now() - 55 * 60000),
      status: 'read'
    },
    {
      id: 'm3',
      senderId: '1',
      content: 'Très bien ! Je voulais te parler du projet Angular. Tu as eu le temps de regarder les maquettes ?',
      timestamp: new Date(Date.now() - 50 * 60000),
      status: 'read'
    },
    {
      id: 'm4',
      senderId: 'me',
      content: 'Oui, j\'ai regardé ça hier soir. J\'ai quelques suggestions à faire.',
      timestamp: new Date(Date.now() - 45 * 60000),
      status: 'read'
    },
    {
      id: 'm5',
      senderId: '1',
      content: 'Super ! On peut en discuter demain si tu veux ?',
      timestamp: new Date(Date.now() - 40 * 60000),
      status: 'read'
    },
    {
      id: 'm6',
      senderId: 'me',
      content: 'Oui, ça me va. On se retrouve à 14h ?',
      timestamp: new Date(Date.now() - 35 * 60000),
      status: 'read'
    },
    {
      id: 'm7',
      senderId: '1',
      content: 'Parfait ! Je réserve une salle de réunion.',
      timestamp: new Date(Date.now() - 10 * 60000),
      status: 'read'
    },
    {
      id: 'm8',
      senderId: '1',
      content: 'D\'accord, on se voit demain !',
      timestamp: new Date(Date.now() - 5 * 60000),
      status: 'delivered'
    }
  ];

  constructor() {
    this.selectedContact = this.contacts[0];
  }

  // Select contact
  selectContact(contact: Contact): void {
    this.selectedContact = contact;
    if (contact.unreadCount) {
      contact.unreadCount = 0;
    }
  }

  // Send message
  sendMessage(): void {
    if (this.messageInput.trim() && this.selectedContact) {
      const newMessage: Message = {
        id: 'm' + Date.now(),
        senderId: 'me',
        content: this.messageInput.trim(),
        timestamp: new Date(),
        status: 'sent'
      };
      this.messages.push(newMessage);
      this.messageInput = '';
    }
  }

  // Get filtered contacts
  get filteredContacts(): Contact[] {
    if (!this.searchQuery) return this.contacts;
    const query = this.searchQuery.toLowerCase();
    return this.contacts.filter(c => c.name.toLowerCase().includes(query));
  }

  // Format time
  formatTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'À l\'instant';
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}j`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  // Format message time
  formatMessageTime(date: Date): string {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  // Check if message is from me
  isOwnMessage(message: Message): boolean {
    return message.senderId === this.currentUserId;
  }

  // Get status color
  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      online: '#10b981',
      away: '#f59e0b',
      busy: '#ef4444',
      offline: '#9ca3af'
    };
    return colors[status] || '#9ca3af';
  }

  // Get message status icon
  getStatusIcon(status: string): string {
    const icons: Record<string, string> = {
      sent: 'bi-check',
      delivered: 'bi-check-all',
      read: 'bi-check-all'
    };
    return icons[status] || 'bi-check';
  }

  // Group messages by date
  shouldShowDateSeparator(message: Message, index: number): boolean {
    if (index === 0) return true;
    const prevMessage = this.messages[index - 1];
    const prevDate = new Date(prevMessage.timestamp).toDateString();
    const currDate = new Date(message.timestamp).toDateString();
    return prevDate !== currDate;
  }

  // Format date separator
  formatDateSeparator(date: Date): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Aujourd\'hui';
    if (date.toDateString() === yesterday.toDateString()) return 'Hier';
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  }
}
