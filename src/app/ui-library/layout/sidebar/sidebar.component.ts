import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidebarItem {
  icon: string;
  label: string;
  badge?: string;
  badgeType?: 'default' | 'info' | 'success';
  active?: boolean;
  expanded?: boolean;
  children?: SidebarItem[];
}

export interface SidebarSection {
  label: string;
  items: SidebarItem[];
}

@Component({
  selector: 'ui-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  brandLetter = 'P';
  brandName = 'Platform';

  mainSections: SidebarSection[] = [
    {
      label: 'Principal',
      items: [
        { icon: 'bi-grid-1x2', label: 'Dashboard', active: true },
        { icon: 'bi-bar-chart', label: 'Analytics', badge: 'New', badgeType: 'info' },
        { icon: 'bi-folder2', label: 'Projets', expanded: true, children: [
          { icon: 'bi-circle', label: 'En cours', badge: '5', active: true },
          { icon: 'bi-circle', label: 'Terminés' },
          { icon: 'bi-circle', label: 'Archivés' }
        ]},
        { icon: 'bi-people', label: 'Équipe' },
        { icon: 'bi-chat-dots', label: 'Messages', badge: '3' }
      ]
    },
    {
      label: 'Autres',
      items: [
        { icon: 'bi-gear', label: 'Paramètres' },
        { icon: 'bi-question-circle', label: 'Aide' }
      ]
    }
  ];

  darkSections: SidebarSection[] = [
    {
      label: 'Principal',
      items: [
        { icon: 'bi-grid-1x2', label: 'Dashboard', active: true },
        { icon: 'bi-bar-chart', label: 'Analytics' },
        { icon: 'bi-folder2', label: 'Projets', badge: '12', badgeType: 'success' },
        { icon: 'bi-people', label: 'Équipe' },
        { icon: 'bi-chat-dots', label: 'Messages', badge: '7' },
        { icon: 'bi-calendar3', label: 'Calendrier' }
      ]
    },
    {
      label: 'Autres',
      items: [
        { icon: 'bi-gear', label: 'Paramètres' },
        { icon: 'bi-question-circle', label: 'Aide' }
      ]
    }
  ];

  collapsedItems: SidebarItem[] = [
    { icon: 'bi-grid-1x2', label: 'Dashboard', active: true },
    { icon: 'bi-bar-chart', label: 'Analytics' },
    { icon: 'bi-folder2', label: 'Projets' },
    { icon: 'bi-people', label: 'Équipe' },
    { icon: 'bi-chat-dots', label: 'Messages' }
  ];

  toggleExpanded(item: SidebarItem): void {
    item.expanded = !item.expanded;
  }
}
