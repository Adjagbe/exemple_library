import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidebarNavItem {
  icon: string;
  label: string;
  active?: boolean;
}

export interface ContentCard {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  initials: string;
  name: string;
}

export interface Deadline {
  icon: string;
  label: string;
}

@Component({
  selector: 'ui-two-column-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-column-layout.component.html',
  styleUrl: './two-column-layout.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TwoColumnLayoutComponent {
  sidebarNav: SidebarNavItem[] = [
    { icon: 'bi-grid-1x2', label: 'Dashboard', active: true },
    { icon: 'bi-bar-chart', label: 'Analytics' },
    { icon: 'bi-folder2', label: 'Projets' },
    { icon: 'bi-people', label: 'Équipe' },
    { icon: 'bi-chat-dots', label: 'Messages' }
  ];
  sysNav: SidebarNavItem[] = [
    { icon: 'bi-gear', label: 'Paramètres' },
    { icon: 'bi-question-circle', label: 'Aide' }
  ];
  contentCards: ContentCard[] = [
    { icon: 'bi-lightning-charge', title: 'Performance', description: 'Temps de réponse moyen de 145ms sur les 24 dernières heures.' },
    { icon: 'bi-people', title: 'Utilisateurs', description: '2,847 utilisateurs actifs aujourd\'hui (+12% vs hier).' },
    { icon: 'bi-graph-up-arrow', title: 'Revenus', description: '€24,580 de revenus ce mois-ci, en hausse de 8%.' },
    { icon: 'bi-check-circle', title: 'Tâches', description: '48 tâches terminées cette semaine sur 56 planifiées.' }
  ];
  team: TeamMember[] = [
    { initials: 'JD', name: 'Jean Dupont' },
    { initials: 'ML', name: 'Marie Laurent' },
    { initials: 'TM', name: 'Thomas Martin' }
  ];
  deadlines: Deadline[] = [
    { icon: 'bi-calendar-event', label: 'Sprint Review — 15 mars' },
    { icon: 'bi-calendar-event', label: 'Release v2.0 — 31 mars' },
    { icon: 'bi-calendar-event', label: 'Rétro Q1 — 2 avril' }
  ];
  tags = ['Design', 'Frontend', 'UX', 'Components', 'Tokens'];
}
