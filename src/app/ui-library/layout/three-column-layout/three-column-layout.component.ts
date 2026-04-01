import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  name: string;
  meta: string;
  priority: 'high' | 'medium' | 'low';
  done: boolean;
}

export interface ActivityItem {
  color: string;
  text: string;
  author: string;
  time: string;
}

export interface ProgressItem {
  name: string;
  pct: number;
  color: string;
}

export interface PricingCol {
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

@Component({
  selector: 'ui-three-column-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-column-layout.component.html',
  styleUrl: './three-column-layout.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ThreeColumnLayoutComponent {
  navItems = [
    { icon: 'bi-grid-1x2', label: 'Dashboard', active: true },
    { icon: 'bi-check2-square', label: 'Tâches', badge: '12' },
    { icon: 'bi-folder2', label: 'Projets' },
    { icon: 'bi-people', label: 'Équipe' },
    { icon: 'bi-chat-dots', label: 'Messages', badge: '3' }
  ];

  sysNavItems = [
    { icon: 'bi-gear', label: 'Paramètres' },
    { icon: 'bi-question-circle', label: 'Aide' }
  ];

  tasks: Task[] = [
    { name: 'Mettre à jour le design system', meta: 'Design · Terminé hier', priority: 'high', done: true },
    { name: 'Implémenter la page de facturation', meta: 'Frontend · Échéance dans 2 jours', priority: 'high', done: false },
    { name: 'Revoir les maquettes du dashboard', meta: 'Design · Échéance dans 3 jours', priority: 'medium', done: false },
    { name: 'Écrire les tests unitaires', meta: 'Backend · Échéance dans 5 jours', priority: 'medium', done: false },
    { name: 'Configurer le CI/CD', meta: 'DevOps · Terminé il y a 3 jours', priority: 'low', done: true },
    { name: 'Optimiser les requêtes API', meta: 'Backend · Échéance dans 1 semaine', priority: 'low', done: false }
  ];

  activities: ActivityItem[] = [
    { color: 'blue', author: 'Marie', text: 'a commenté la tâche "Design system"', time: 'Il y a 15 min' },
    { color: 'green', author: 'Thomas', text: 'a terminé "Config CI/CD"', time: 'Il y a 1h' },
    { color: 'yellow', author: 'Sophie', text: 'a créé un nouveau projet', time: 'Il y a 3h' },
    { color: 'red', author: 'Lucas', text: 'a signalé un bug critique', time: 'Il y a 5h' }
  ];

  progressItems: ProgressItem[] = [
    { name: 'Design', pct: 85, color: 'indigo' },
    { name: 'Frontend', pct: 62, color: 'green' },
    { name: 'Backend', pct: 40, color: 'yellow' }
  ];

  pricingCols: PricingCol[] = [
    {
      icon: 'bi-rocket-takeoff', title: 'Starter',
      description: 'Idéal pour les petites équipes qui démarrent leur aventure.',
      features: ['5 utilisateurs max', '10 Go de stockage', 'Support email', 'Analytics basiques']
    },
    {
      icon: 'bi-lightning-charge', title: 'Business', highlighted: true,
      description: 'Pour les équipes en croissance qui ont besoin de plus de puissance.',
      features: ['25 utilisateurs max', '100 Go de stockage', 'Support prioritaire', 'Analytics avancés', 'Intégrations API']
    },
    {
      icon: 'bi-building', title: 'Enterprise',
      description: 'Solution sur mesure pour les grandes organisations.',
      features: ['Utilisateurs illimités', 'Stockage illimité', 'Support dédié 24/7', 'SLA garanti 99.99%', 'SSO & SAML']
    }
  ];

  calendarDays = [
    { day: 23, other: true }, { day: 24, other: true }, { day: 25, other: true }, { day: 26, other: true }, { day: 27, other: true }, { day: 28, other: true }, { day: 1, other: false },
    { day: 2 }, { day: 3 }, { day: 4 }, { day: 5, event: true }, { day: 6 }, { day: 7 }, { day: 8 },
    { day: 9, today: true }, { day: 10 }, { day: 11, event: true }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15, event: true },
    { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 },
    { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 },
    { day: 30 }, { day: 31, event: true }, { day: 1, other: true }, { day: 2, other: true }, { day: 3, other: true }, { day: 4, other: true }, { day: 5, other: true }
  ];
}
