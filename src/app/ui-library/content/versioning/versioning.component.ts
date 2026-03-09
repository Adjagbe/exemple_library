
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Version {
  id: string;
  version: string;
  date: Date;
  author: {
    name: string;
    avatar?: string;
    initials: string;
  };
  type: 'major' | 'minor' | 'patch' | 'draft';
  status: 'current' | 'published' | 'archived' | 'draft';
  changes: VersionChange[];
  notes?: string;
  size?: string;
}

interface VersionChange {
  type: 'added' | 'changed' | 'fixed' | 'removed' | 'security';
  description: string;
}

@Component({
  selector: 'ui-versioning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './versioning.component.html',
  styleUrls: ['./versioning.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VersioningComponent {
  // Filter
  filterType: string = 'all';
  searchQuery: string = '';

  // Expanded version
  expandedVersion: string | null = 'v1';

  // Versions
  versions: Version[] = [
    {
      id: 'v1',
      version: '2.4.0',
      date: new Date('2024-01-15'),
      author: { name: 'Marie Lambert', initials: 'ML' },
      type: 'minor',
      status: 'current',
      size: '24.5 MB',
      notes: 'Mise à jour majeure avec nouvelles fonctionnalités',
      changes: [
        { type: 'added', description: 'Nouveau système de notifications en temps réel' },
        { type: 'added', description: 'Support du mode sombre automatique' },
        { type: 'changed', description: 'Amélioration des performances du dashboard' },
        { type: 'fixed', description: 'Correction du bug d\'authentification OAuth' },
        { type: 'security', description: 'Mise à jour des dépendances de sécurité' }
      ]
    },
    {
      id: 'v2',
      version: '2.3.2',
      date: new Date('2024-01-08'),
      author: { name: 'Pierre Durand', initials: 'PD' },
      type: 'patch',
      status: 'published',
      size: '24.2 MB',
      changes: [
        { type: 'fixed', description: 'Correction de l\'export CSV' },
        { type: 'fixed', description: 'Résolution du problème de pagination' }
      ]
    },
    {
      id: 'v3',
      version: '2.3.1',
      date: new Date('2024-01-05'),
      author: { name: 'Sophie Martin', initials: 'SM' },
      type: 'patch',
      status: 'published',
      size: '24.1 MB',
      changes: [
        { type: 'fixed', description: 'Hotfix pour le crash au démarrage' }
      ]
    },
    {
      id: 'v4',
      version: '2.3.0',
      date: new Date('2024-01-01'),
      author: { name: 'Jean Dupont', initials: 'JD' },
      type: 'minor',
      status: 'published',
      size: '24.0 MB',
      notes: 'Première release de l\'année',
      changes: [
        { type: 'added', description: 'Nouveau module de reporting' },
        { type: 'added', description: 'Intégration Slack' },
        { type: 'changed', description: 'Refactoring du système de cache' },
        { type: 'removed', description: 'Suppression du support IE11' }
      ]
    },
    {
      id: 'v5',
      version: '2.2.0',
      date: new Date('2023-12-15'),
      author: { name: 'Marie Lambert', initials: 'ML' },
      type: 'minor',
      status: 'archived',
      size: '23.5 MB',
      changes: [
        { type: 'added', description: 'API GraphQL' },
        { type: 'changed', description: 'Migration vers Angular 17' },
        { type: 'security', description: 'Audit de sécurité complet' }
      ]
    },
    {
      id: 'v6',
      version: '2.5.0-beta',
      date: new Date('2024-01-20'),
      author: { name: 'Pierre Durand', initials: 'PD' },
      type: 'draft',
      status: 'draft',
      size: '25.0 MB',
      notes: 'Version beta - En cours de test',
      changes: [
        { type: 'added', description: 'Nouvelle interface utilisateur' },
        { type: 'added', description: 'Support multi-tenant' }
      ]
    }
  ];

  // Toggle version expansion
  toggleVersion(versionId: string): void {
    this.expandedVersion = this.expandedVersion === versionId ? null : versionId;
  }

  // Get filtered versions
  get filteredVersions(): Version[] {
    let filtered = this.versions;

    if (this.filterType !== 'all') {
      filtered = filtered.filter(v => v.type === this.filterType || v.status === this.filterType);
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(v =>
        v.version.toLowerCase().includes(query) ||
        v.notes?.toLowerCase().includes(query) ||
        v.changes.some(c => c.description.toLowerCase().includes(query))
      );
    }

    return filtered;
  }

  // Get change icon
  getChangeIcon(type: string): string {
    const icons: Record<string, string> = {
      added: 'bi-plus-circle',
      changed: 'bi-pencil',
      fixed: 'bi-bug',
      removed: 'bi-trash',
      security: 'bi-shield-check'
    };
    return icons[type] || 'bi-circle';
  }

  // Get change color
  getChangeColor(type: string): string {
    const colors: Record<string, string> = {
      added: '#10b981',
      changed: '#3b82f6',
      fixed: '#f59e0b',
      removed: '#ef4444',
      security: '#8b5cf6'
    };
    return colors[type] || '#6b7280';
  }

  // Get version badge
  getVersionBadge(type: string): { label: string; class: string } {
    const badges: Record<string, { label: string; class: string }> = {
      major: { label: 'Majeur', class: 'badge--major' },
      minor: { label: 'Mineur', class: 'badge--minor' },
      patch: { label: 'Patch', class: 'badge--patch' },
      draft: { label: 'Brouillon', class: 'badge--draft' }
    };
    return badges[type] || { label: type, class: '' };
  }

  // Get status badge
  getStatusBadge(status: string): { label: string; class: string } {
    const badges: Record<string, { label: string; class: string }> = {
      current: { label: 'Actuelle', class: 'status--current' },
      published: { label: 'Publiée', class: 'status--published' },
      archived: { label: 'Archivée', class: 'status--archived' },
      draft: { label: 'Brouillon', class: 'status--draft' }
    };
    return badges[status] || { label: status, class: '' };
  }

  // Format date
  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
}
