import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserCardData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
  location: string;
  phone: string;
  status: 'online' | 'offline' | 'busy' | 'away';
  coverImage?: string;
  bio?: string;
  stats?: { projects: number; tasks: number; reviews: number };
  skills?: string[];
  social?: { linkedin?: string; twitter?: string; github?: string };
}

@Component({
  selector: 'ui-user-card-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card-horizontal.component.html',
  styleUrl: './user-card-horizontal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UserCardHorizontalComponent {

  // Horizontal card user
  horizontalUser: UserCardData = {
    id: '4',
    firstName: 'Lucas',
    lastName: 'Bernard',
    email: 'lucas.bernard@email.com',
    avatar: 'LB',
    role: 'Data Analyst',
    department: 'Analytics',
    location: 'Toulouse, France',
    phone: '+33 6 55 44 33 22',
    status: 'offline',
    stats: { projects: 28, tasks: 134, reviews: 67 }
  };

  // Team member card user
  teamUser: UserCardData = {
    id: '5',
    firstName: 'Emma',
    lastName: 'Petit',
    email: 'emma.petit@email.com',
    avatar: 'EP',
    role: 'Lead UX Designer',
    department: 'Design',
    location: 'Marseille, France',
    phone: '+33 6 00 00 00 00',
    status: 'online'
  };

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      online: 'status--online', offline: 'status--offline',
      busy: 'status--busy', away: 'status--away'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      online: 'En ligne', offline: 'Hors ligne',
      busy: 'Occupé', away: 'Absent'
    };
    return labels[status] || status;
  }

  onMessage(user: UserCardData): void { console.log('Message user:', user); }
  onCall(user: UserCardData): void { console.log('Call user:', user); }
  onViewProfile(user: UserCardData): void { console.log('View profile:', user); }
}
