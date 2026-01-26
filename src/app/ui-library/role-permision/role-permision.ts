import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface pour une permission
 */
export interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
}

/**
 * Interface pour un rôle
 */
export interface Role {
  id: string;
  name: string;
  description: string;
  color: string;
  permissions: string[];
  usersCount: number;
  isSystem?: boolean;
}

@Component({
  selector: 'app-role-permision',
  imports: [CommonModule, FormsModule],
  templateUrl: './role-permision.html',
  styleUrl: './role-permision.scss',
})
export class RolePermision {
  /** Onglet actif */
  activeTab = signal<'roles' | 'permissions'>('roles');

  /** Rôle sélectionné pour édition */
  selectedRole = signal<Role | null>(null);

  /** Modal ouverte */
  isModalOpen = signal(false);
  modalMode = signal<'create' | 'edit'>('create');

  /** Recherche */
  searchQuery = signal('');

  /** Catégories de permissions */
  permissionCategories = ['Utilisateurs', 'Contenu', 'Système', 'Rapports', 'Paramètres'];

  /** Liste des permissions */
  permissions = signal<Permission[]>([
    // Utilisateurs
    { id: 'users.view', name: 'Voir les utilisateurs', description: 'Accéder à la liste des utilisateurs', category: 'Utilisateurs' },
    { id: 'users.create', name: 'Créer des utilisateurs', description: 'Ajouter de nouveaux utilisateurs', category: 'Utilisateurs' },
    { id: 'users.edit', name: 'Modifier les utilisateurs', description: 'Éditer les informations des utilisateurs', category: 'Utilisateurs' },
    { id: 'users.delete', name: 'Supprimer les utilisateurs', description: 'Retirer des utilisateurs du système', category: 'Utilisateurs' },
    // Contenu
    { id: 'content.view', name: 'Voir le contenu', description: 'Accéder au contenu publié', category: 'Contenu' },
    { id: 'content.create', name: 'Créer du contenu', description: 'Publier du nouveau contenu', category: 'Contenu' },
    { id: 'content.edit', name: 'Modifier le contenu', description: 'Éditer le contenu existant', category: 'Contenu' },
    { id: 'content.delete', name: 'Supprimer le contenu', description: 'Retirer du contenu', category: 'Contenu' },
    { id: 'content.publish', name: 'Publier le contenu', description: 'Mettre en ligne le contenu', category: 'Contenu' },
    // Système
    { id: 'system.settings', name: 'Paramètres système', description: 'Accéder aux paramètres système', category: 'Système' },
    { id: 'system.logs', name: 'Voir les logs', description: 'Consulter les journaux système', category: 'Système' },
    { id: 'system.backup', name: 'Sauvegardes', description: 'Gérer les sauvegardes', category: 'Système' },
    // Rapports
    { id: 'reports.view', name: 'Voir les rapports', description: 'Accéder aux rapports', category: 'Rapports' },
    { id: 'reports.export', name: 'Exporter les rapports', description: 'Télécharger les rapports', category: 'Rapports' },
    { id: 'reports.create', name: 'Créer des rapports', description: 'Générer de nouveaux rapports', category: 'Rapports' },
    // Paramètres
    { id: 'settings.general', name: 'Paramètres généraux', description: 'Modifier les paramètres généraux', category: 'Paramètres' },
    { id: 'settings.security', name: 'Paramètres de sécurité', description: 'Configurer la sécurité', category: 'Paramètres' },
    { id: 'settings.notifications', name: 'Notifications', description: 'Gérer les notifications', category: 'Paramètres' },
  ]);

  /** Liste des rôles */
  roles = signal<Role[]>([
    {
      id: 'admin',
      name: 'Administrateur',
      description: 'Accès complet à toutes les fonctionnalités',
      color: '#6366f1',
      permissions: ['users.view', 'users.create', 'users.edit', 'users.delete', 'content.view', 'content.create', 'content.edit', 'content.delete', 'content.publish', 'system.settings', 'system.logs', 'system.backup', 'reports.view', 'reports.export', 'reports.create', 'settings.general', 'settings.security', 'settings.notifications'],
      usersCount: 3,
      isSystem: true
    },
    {
      id: 'editor',
      name: 'Éditeur',
      description: 'Gestion du contenu et des publications',
      color: '#8b5cf6',
      permissions: ['content.view', 'content.create', 'content.edit', 'content.publish', 'reports.view'],
      usersCount: 8
    },
    {
      id: 'moderator',
      name: 'Modérateur',
      description: 'Modération du contenu et des utilisateurs',
      color: '#06b6d4',
      permissions: ['users.view', 'content.view', 'content.edit', 'content.delete', 'reports.view'],
      usersCount: 5
    },
    {
      id: 'viewer',
      name: 'Lecteur',
      description: 'Accès en lecture seule',
      color: '#10b981',
      permissions: ['users.view', 'content.view', 'reports.view'],
      usersCount: 24
    }
  ]);

  /** Nouveau rôle (formulaire) */
  newRole: Partial<Role> = {
    name: '',
    description: '',
    color: '#6366f1',
    permissions: []
  };

  /** Rôles filtrés */
  filteredRoles = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.roles();
    return this.roles().filter(role => 
      role.name.toLowerCase().includes(query) ||
      role.description.toLowerCase().includes(query)
    );
  });

  /** Permissions filtrées */
  filteredPermissions = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.permissions();
    return this.permissions().filter(perm => 
      perm.name.toLowerCase().includes(query) ||
      perm.description.toLowerCase().includes(query) ||
      perm.category.toLowerCase().includes(query)
    );
  });

  /** Permissions groupées par catégorie */
  groupedPermissions = computed(() => {
    const perms = this.filteredPermissions();
    const groups: { [key: string]: Permission[] } = {};
    
    this.permissionCategories.forEach(cat => {
      const catPerms = perms.filter(p => p.category === cat);
      if (catPerms.length > 0) {
        groups[cat] = catPerms;
      }
    });
    
    return groups;
  });

  /** Changer d'onglet */
  setActiveTab(tab: 'roles' | 'permissions'): void {
    this.activeTab.set(tab);
    this.searchQuery.set('');
  }

  /** Ouvrir modal création */
  openCreateModal(): void {
    this.modalMode.set('create');
    this.newRole = {
      name: '',
      description: '',
      color: '#6366f1',
      permissions: []
    };
    this.isModalOpen.set(true);
  }

  /** Ouvrir modal édition */
  openEditModal(role: Role): void {
    this.modalMode.set('edit');
    this.selectedRole.set(role);
    this.newRole = { ...role, permissions: [...role.permissions] };
    this.isModalOpen.set(true);
  }

  /** Fermer modal */
  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedRole.set(null);
  }

  /** Sauvegarder le rôle */
  saveRole(): void {
    if (!this.newRole.name) return;

    if (this.modalMode() === 'create') {
      const role: Role = {
        id: this.newRole.name!.toLowerCase().replace(/\s+/g, '-'),
        name: this.newRole.name!,
        description: this.newRole.description || '',
        color: this.newRole.color || '#6366f1',
        permissions: this.newRole.permissions || [],
        usersCount: 0
      };
      this.roles.update(roles => [...roles, role]);
    } else {
      const selected = this.selectedRole();
      if (selected) {
        this.roles.update(roles => 
          roles.map(r => r.id === selected.id ? {
            ...r,
            name: this.newRole.name!,
            description: this.newRole.description || '',
            color: this.newRole.color || '#6366f1',
            permissions: this.newRole.permissions || []
          } : r)
        );
      }
    }
    this.closeModal();
  }

  /** Supprimer un rôle */
  deleteRole(role: Role): void {
    if (role.isSystem) return;
    if (confirm(`Êtes-vous sûr de vouloir supprimer le rôle "${role.name}" ?`)) {
      this.roles.update(roles => roles.filter(r => r.id !== role.id));
    }
  }

  /** Toggle permission dans le formulaire */
  togglePermission(permId: string): void {
    if (!this.newRole.permissions) {
      this.newRole.permissions = [];
    }
    
    const index = this.newRole.permissions.indexOf(permId);
    if (index === -1) {
      this.newRole.permissions.push(permId);
    } else {
      this.newRole.permissions.splice(index, 1);
    }
  }

  /** Vérifie si une permission est sélectionnée */
  hasPermission(permId: string): boolean {
    return this.newRole.permissions?.includes(permId) || false;
  }

  /** Toggle toutes les permissions d'une catégorie */
  toggleCategory(category: string): void {
    const categoryPerms = this.permissions().filter(p => p.category === category);
    const allSelected = categoryPerms.every(p => this.hasPermission(p.id));
    
    if (allSelected) {
      // Retirer toutes les permissions de cette catégorie
      this.newRole.permissions = this.newRole.permissions?.filter(
        pid => !categoryPerms.some(p => p.id === pid)
      ) || [];
    } else {
      // Ajouter toutes les permissions de cette catégorie
      categoryPerms.forEach(p => {
        if (!this.hasPermission(p.id)) {
          this.newRole.permissions?.push(p.id);
        }
      });
    }
  }

  /** Vérifie si toutes les permissions d'une catégorie sont sélectionnées */
  isCategoryFullySelected(category: string): boolean {
    const categoryPerms = this.permissions().filter(p => p.category === category);
    return categoryPerms.every(p => this.hasPermission(p.id));
  }

  /** Vérifie si certaines permissions d'une catégorie sont sélectionnées */
  isCategoryPartiallySelected(category: string): boolean {
    const categoryPerms = this.permissions().filter(p => p.category === category);
    const selectedCount = categoryPerms.filter(p => this.hasPermission(p.id)).length;
    return selectedCount > 0 && selectedCount < categoryPerms.length;
  }

  /** Obtenir le nombre de permissions d'un rôle */
  getPermissionCount(role: Role): number {
    return role.permissions.length;
  }

  /** Obtenir l'icône de catégorie */
  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Utilisateurs': 'bi-people-fill',
      'Contenu': 'bi-file-earmark-text-fill',
      'Système': 'bi-gear-fill',
      'Rapports': 'bi-bar-chart-fill',
      'Paramètres': 'bi-sliders'
    };
    return icons[category] || 'bi-folder-fill';
  }

  /** Obtenir une permission par son ID */
  getPermissionById(permId: string): Permission | undefined {
    return this.permissions().find(p => p.id === permId);
  }

  /** Obtenir les permissions d'une catégorie */
  getPermissionsByCategory(category: string): Permission[] {
    return this.permissions().filter(p => p.category === category);
  }
}
