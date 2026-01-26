// ═══════════════════════════════════════════════════════════════
// PROFILE COMPONENT - Premium UI Library
// User profile page with settings and info
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─────────────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────────────
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  role: string;
  department: string;
  location: string;
  bio: string;
  joinDate: string;
  lastActive: string;
  socialLinks: { platform: string; url: string; icon: string }[];
  stats: { label: string; value: number }[];
}

@Component({
  selector: 'ui-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  // ─────────────────────────────────────────────────────────────────
  // USER DATA
  // ─────────────────────────────────────────────────────────────────
  user: UserProfile = {
    id: 'usr-001',
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    phone: '+33 6 12 34 56 78',
    avatar: 'JD',
    role: 'Administrateur',
    department: 'Développement',
    location: 'Paris, France',
    bio: 'Développeur Full Stack passionné avec plus de 8 ans d\'expérience dans la création d\'applications web modernes.',
    joinDate: '2022-03-15',
    lastActive: '2024-05-10T14:30:00',
    socialLinks: [
      { platform: 'LinkedIn', url: '#', icon: 'bi-linkedin' },
      { platform: 'Twitter', url: '#', icon: 'bi-twitter-x' },
      { platform: 'GitHub', url: '#', icon: 'bi-github' }
    ],
    stats: [
      { label: 'Projets', value: 24 },
      { label: 'Tâches', value: 156 },
      { label: 'Équipes', value: 3 }
    ]
  };

  // ─────────────────────────────────────────────────────────────────
  // TABS
  // ─────────────────────────────────────────────────────────────────
  activeTab: 'overview' | 'settings' | 'security' | 'notifications' = 'overview';

  tabs = [
    { id: 'overview', label: 'Aperçu', icon: 'bi-person' },
    { id: 'settings', label: 'Paramètres', icon: 'bi-gear' },
    { id: 'security', label: 'Sécurité', icon: 'bi-shield-lock' },
    { id: 'notifications', label: 'Notifications', icon: 'bi-bell' }
  ];

  // ─────────────────────────────────────────────────────────────────
  // FORM DATA
  // ─────────────────────────────────────────────────────────────────
  editMode: boolean = false;
  editedUser: UserProfile = { ...this.user };

  // Notification settings
  notifications = {
    email: true,
    push: true,
    sms: false,
    newsletter: true,
    updates: true,
    marketing: false
  };

  // ─────────────────────────────────────────────────────────────────
  // METHODS
  // ─────────────────────────────────────────────────────────────────
  setActiveTab(tab: any): void {
    this.activeTab = tab.id;
  }

  toggleEditMode(): void {
    if (this.editMode) {
      this.editedUser = { ...this.user };
    }
    this.editMode = !this.editMode;
  }

  saveProfile(): void {
    this.user = { ...this.editedUser };
    this.editMode = false;
    console.log('Profile saved:', this.user);
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  formatDateTime(dateStr: string): string {
    return new Date(dateStr).toLocaleString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  uploadAvatar(): void {
    console.log('Upload avatar');
  }

  changePassword(): void {
    console.log('Change password');
  }

  enable2FA(): void {
    console.log('Enable 2FA');
  }
}
