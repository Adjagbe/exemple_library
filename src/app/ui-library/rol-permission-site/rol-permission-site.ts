import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface pour une permission (noeud du tree)
 */
export interface PermissionNode {
  id: string;
  name: string;
  description?: string;
  children?: PermissionNode[];
  expanded?: boolean;
}

/**
 * Interface pour un rôle
 */
export interface Role {
  id: string;
  name: string;
  code: string;
  permissions: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  usersCount: number;
}

@Component({
  selector: 'app-rol-permission-site',
  imports: [CommonModule, FormsModule],
  templateUrl: './rol-permission-site.html',
  styleUrl: './rol-permission-site.scss',
})
export class RolPermissionSite {
  /** Recherche */
  searchQuery = signal('');

  /** Pagination */
  currentPage = signal(1);
  itemsPerPage = signal(5);
  itemsPerPageOptions = [5, 10, 20, 50];

  /** Modal */
  isModalOpen = signal(false);
  modalMode = signal<'create' | 'edit'>('create');

  /** Rôle en cours d'édition */
  currentRole: Partial<Role> = {};
  selectedPermissions = signal<string[]>([]);

  /** Arbre des permissions */
  permissionsTree: PermissionNode[] = [
    {
      id: 'users',
      name: 'Gestion des utilisateurs',
      expanded: true,
      children: [
        { id: 'users.view', name: 'Consulter les utilisateurs', description: 'Voir la liste et les détails' },
        { id: 'users.create', name: 'Créer un utilisateur', description: 'Ajouter de nouveaux utilisateurs' },
        { id: 'users.edit', name: 'Modifier un utilisateur', description: 'Éditer les informations' },
        { id: 'users.delete', name: 'Supprimer un utilisateur', description: 'Retirer du système' },
        { id: 'users.export', name: 'Exporter les utilisateurs', description: 'Télécharger en CSV/Excel' },
      ]
    },
    {
      id: 'content',
      name: 'Gestion du contenu',
      expanded: false,
      children: [
        { id: 'content.view', name: 'Consulter le contenu', description: 'Voir les articles et pages' },
        { id: 'content.create', name: 'Créer du contenu', description: 'Rédiger des articles' },
        { id: 'content.edit', name: 'Modifier le contenu', description: 'Éditer les publications' },
        { id: 'content.delete', name: 'Supprimer le contenu', description: 'Retirer des publications' },
        { id: 'content.publish', name: 'Publier le contenu', description: 'Mettre en ligne' },
      ]
    },
    {
      id: 'orders',
      name: 'Gestion des commandes',
      expanded: false,
      children: [
        { id: 'orders.view', name: 'Consulter les commandes', description: 'Voir toutes les commandes' },
        { id: 'orders.process', name: 'Traiter les commandes', description: 'Valider et expédier' },
        { id: 'orders.cancel', name: 'Annuler les commandes', description: 'Annuler une commande' },
        { id: 'orders.refund', name: 'Rembourser', description: 'Effectuer des remboursements' },
      ]
    },
    {
      id: 'reports',
      name: 'Rapports & Statistiques',
      expanded: false,
      children: [
        { id: 'reports.view', name: 'Consulter les rapports', description: 'Accéder aux tableaux de bord' },
        { id: 'reports.create', name: 'Créer des rapports', description: 'Générer des rapports personnalisés' },
        { id: 'reports.export', name: 'Exporter les rapports', description: 'Télécharger en PDF/Excel' },
      ]
    },
    {
      id: 'settings',
      name: 'Paramètres système',
      expanded: false,
      children: [
        { id: 'settings.general', name: 'Paramètres généraux', description: 'Configuration de base' },
        { id: 'settings.security', name: 'Sécurité', description: 'Options de sécurité' },
        { id: 'settings.email', name: 'Emails', description: 'Configuration des emails' },
        { id: 'settings.api', name: 'API & Intégrations', description: 'Clés API et webhooks' },
      ]
    }
  ];

  /** Liste des rôles */
  roles = signal<Role[]>([
    {
      id: '1',
      name: 'Super Administrateur',
      code: 'SUPER_ADMIN',
      permissions: ['users.view', 'users.create', 'users.edit', 'users.delete', 'users.export', 'content.view', 'content.create', 'content.edit', 'content.delete', 'content.publish', 'orders.view', 'orders.process', 'orders.cancel', 'orders.refund', 'reports.view', 'reports.create', 'reports.export', 'settings.general', 'settings.security', 'settings.email', 'settings.api'],
      status: 'active',
      createdAt: '2024-01-15',
      usersCount: 2
    },
    {
      id: '2',
      name: 'Gestionnaire',
      code: 'MANAGER',
      permissions: ['users.view', 'users.create', 'users.edit', 'content.view', 'content.create', 'content.edit', 'content.publish', 'reports.view'],
      status: 'active',
      createdAt: '2024-02-20',
      usersCount: 5
    },
    {
      id: '3',
      name: 'Éditeur',
      code: 'EDITOR',
      permissions: ['content.view', 'content.create', 'content.edit', 'content.publish'],
      status: 'active',
      createdAt: '2024-03-10',
      usersCount: 12
    },
    {
      id: '4',
      name: 'Commercial',
      code: 'SALES',
      permissions: ['orders.view', 'orders.process', 'reports.view', 'reports.export'],
      status: 'active',
      createdAt: '2024-03-15',
      usersCount: 8
    },
    {
      id: '5',
      name: 'Support Client',
      code: 'SUPPORT',
      permissions: ['users.view', 'orders.view', 'orders.process'],
      status: 'inactive',
      createdAt: '2024-04-01',
      usersCount: 3
    },
    {
      id: '6',
      name: 'Comptable',
      code: 'ACCOUNTANT',
      permissions: ['orders.view', 'reports.view', 'reports.create', 'reports.export'],
      status: 'active',
      createdAt: '2024-04-10',
      usersCount: 4
    },
    {
      id: '7',
      name: 'Marketing',
      code: 'MARKETING',
      permissions: ['content.view', 'content.create', 'reports.view'],
      status: 'active',
      createdAt: '2024-05-01',
      usersCount: 6
    },
    {
      id: '8',
      name: 'Visiteur',
      code: 'VISITOR',
      permissions: ['content.view'],
      status: 'active',
      createdAt: '2024-05-15',
      usersCount: 45
    }
  ]);

  /** Rôles filtrés */
  filteredRoles = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.roles();
    return this.roles().filter(role =>
      role.name.toLowerCase().includes(query) ||
      role.code.toLowerCase().includes(query)
    );
  });

  /** Nombre total de pages */
  totalPages = computed(() => {
    return Math.ceil(this.filteredRoles().length / this.itemsPerPage());
  });

  /** Rôles paginés */
  paginatedRoles = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.filteredRoles().slice(start, end);
  });

  /** Numéros de pages à afficher */
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];
    
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, 4, -1, total);
      } else if (current >= total - 2) {
        pages.push(1, -1, total - 3, total - 2, total - 1, total);
      } else {
        pages.push(1, -1, current - 1, current, current + 1, -1, total);
      }
    }
    return pages;
  });

  /** Aller à une page */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  /** Page précédente */
  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  /** Page suivante */
  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  /** Changer le nombre d'éléments par page */
  changeItemsPerPage(value: number): void {
    this.itemsPerPage.set(value);
    this.currentPage.set(1);
  }

  /** Infos de pagination */
  paginationInfo = computed(() => {
    const total = this.filteredRoles().length;
    const start = (this.currentPage() - 1) * this.itemsPerPage() + 1;
    const end = Math.min(this.currentPage() * this.itemsPerPage(), total);
    return { start, end, total };
  });

  /** Ouvrir modal création */
  openCreateModal(): void {
    this.modalMode.set('create');
    this.currentRole = {
      name: '',
      code: '',
      status: 'active'
    };
    this.selectedPermissions.set([]);
    this.isModalOpen.set(true);
  }

  /** Ouvrir modal édition */
  openEditModal(role: Role): void {
    this.modalMode.set('edit');
    this.currentRole = { ...role };
    this.selectedPermissions.set([...role.permissions]);
    this.isModalOpen.set(true);
  }

  /** Fermer modal */
  closeModal(): void {
    this.isModalOpen.set(false);
  }

  /** Sauvegarder le rôle */
  saveRole(): void {
    if (!this.currentRole.name || !this.currentRole.code) return;

    if (this.modalMode() === 'create') {
      const newRole: Role = {
        id: Date.now().toString(),
        name: this.currentRole.name,
        code: this.currentRole.code.toUpperCase().replace(/\s+/g, '_'),
        permissions: this.selectedPermissions(),
        status: this.currentRole.status || 'active',
        createdAt: new Date().toISOString().split('T')[0],
        usersCount: 0
      };
      this.roles.update(roles => [...roles, newRole]);
    } else {
      this.roles.update(roles =>
        roles.map(r => r.id === this.currentRole.id ? {
          ...r,
          name: this.currentRole.name!,
          code: this.currentRole.code!,
          permissions: this.selectedPermissions(),
          status: this.currentRole.status || 'active'
        } : r)
      );
    }
    this.closeModal();
  }

  /** Supprimer un rôle */
  deleteRole(role: Role): void {
    if (role.usersCount > 0) {
      alert(`Impossible de supprimer ce rôle car ${role.usersCount} utilisateur(s) y sont assignés.`);
      return;
    }
    if (confirm(`Êtes-vous sûr de vouloir supprimer le rôle "${role.name}" ?`)) {
      this.roles.update(roles => roles.filter(r => r.id !== role.id));
    }
  }

  /** Toggle état d'un rôle */
  toggleRoleStatus(role: Role): void {
    this.roles.update(roles =>
      roles.map(r => r.id === role.id ? {
        ...r,
        status: r.status === 'active' ? 'inactive' : 'active'
      } : r)
    );
  }

  /** Toggle expansion d'un noeud */
  toggleNode(node: PermissionNode): void {
    node.expanded = !node.expanded;
  }

  /** Toggle permission */
  togglePermission(permId: string): void {
    this.selectedPermissions.update(perms => {
      if (perms.includes(permId)) {
        return perms.filter(p => p !== permId);
      } else {
        return [...perms, permId];
      }
    });
  }

  /** Toggle toutes les permissions d'un parent */
  toggleParentPermissions(node: PermissionNode): void {
    if (!node.children) return;

    const childIds = node.children.map(c => c.id);
    const allSelected = childIds.every(id => this.selectedPermissions().includes(id));

    if (allSelected) {
      // Désélectionner tous les enfants
      this.selectedPermissions.update(perms => perms.filter(p => !childIds.includes(p)));
    } else {
      // Sélectionner tous les enfants
      this.selectedPermissions.update(perms => {
        const newPerms = [...perms];
        childIds.forEach(id => {
          if (!newPerms.includes(id)) {
            newPerms.push(id);
          }
        });
        return newPerms;
      });
    }
  }

  /** Vérifie si une permission est sélectionnée */
  isPermissionSelected(permId: string): boolean {
    return this.selectedPermissions().includes(permId);
  }

  /** Vérifie si toutes les permissions d'un parent sont sélectionnées */
  isParentFullySelected(node: PermissionNode): boolean {
    if (!node.children) return false;
    return node.children.every(c => this.selectedPermissions().includes(c.id));
  }

  /** Vérifie si certaines permissions d'un parent sont sélectionnées */
  isParentPartiallySelected(node: PermissionNode): boolean {
    if (!node.children) return false;
    const selectedCount = node.children.filter(c => this.selectedPermissions().includes(c.id)).length;
    return selectedCount > 0 && selectedCount < node.children.length;
  }

  /** Obtenir le nombre de permissions d'un rôle par catégorie */
  getPermissionsSummary(role: Role): string {
    const count = role.permissions.length;
    return `${count} permission${count > 1 ? 's' : ''}`;
  }

  /** Formater la date */
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
