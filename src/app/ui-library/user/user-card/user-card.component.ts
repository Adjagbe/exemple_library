// ═══════════════════════════════════════════════════════════════
// USER CARD COMPONENT - Premium UI Library
// Reusable user card with various display modes
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─────────────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────────────
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
  stats?: {
    projects: number;
    tasks: number;
    reviews: number;
  };
  skills?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

@Component({
  selector: 'ui-user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UserCardComponent {
  // ─────────────────────────────────────────────────────────────────
  // SAMPLE USER DATA - Different Card Styles
  // ─────────────────────────────────────────────────────────────────
  user: UserCardData = {
    id: '1',
    firstName: 'Marie',
    lastName: 'Laurent',
    email: 'marie.laurent@email.com',
    avatar: 'ML',
    role: 'Product Designer',
    department: 'Design',
    location: 'Paris, France',
    phone: '+33 6 12 34 56 78',
    status: 'online',
    bio: 'Passionnée par le design UX/UI et l\'expérience utilisateur. J\'aime créer des interfaces intuitives et esthétiques.',
    stats: {
      projects: 42,
      tasks: 186,
      reviews: 94
    },
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping', 'User Research'],
    social: {
      linkedin: 'marie-laurent',
      twitter: '@marielaurent',
      github: 'marielaurent'
    }
  };

  // Simple card variant
  simpleUser: UserCardData = {
    id: '2',
    firstName: 'Thomas',
    lastName: 'Martin',
    email: 'thomas.martin@email.com',
    avatar: 'TM',
    role: 'Senior Developer',
    department: 'Engineering',
    location: 'Lyon, France',
    phone: '+33 6 98 76 54 32',
    status: 'busy'
  };

  // Minimal card variant
  minimalUser: UserCardData = {
    id: '3',
    firstName: 'Sophie',
    lastName: 'Dubois',
    email: 'sophie.dubois@email.com',
    avatar: 'SD',
    role: 'Marketing Manager',
    department: 'Marketing',
    location: 'Bordeaux, France',
    phone: '+33 6 11 22 33 44',
    status: 'away'
  };

  // Horizontal card variant
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
    stats: {
      projects: 28,
      tasks: 134,
      reviews: 67
    }
  };

  // ─────────────────────────────────────────────────────────────────
  // METHODS
  // ─────────────────────────────────────────────────────────────────
  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      online: 'status--online',
      offline: 'status--offline',
      busy: 'status--busy',
      away: 'status--away'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      online: 'En ligne',
      offline: 'Hors ligne',
      busy: 'Occupé',
      away: 'Absent'
    };
    return labels[status] || status;
  }

  onMessage(user: UserCardData): void {
    console.log('Message user:', user);
  }

  onCall(user: UserCardData): void {
    console.log('Call user:', user);
  }

  onViewProfile(user: UserCardData): void {
    console.log('View profile:', user);
  }

  onFollow(user: UserCardData): void {
    console.log('Follow user:', user);
  }
}
