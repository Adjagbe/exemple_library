import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: 'admin' | 'manager' | 'user' | 'guest';
  department: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  selected?: boolean;
}

@Component({
  selector: 'ui-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent {

  users: User[] = [
    { id: '1', firstName: 'Jean', lastName: 'Dupont', email: 'jean.dupont@email.com', avatar: 'JD', role: 'admin', department: 'Direction', status: 'active', lastActive: '2024-05-10T14:30:00' },
    { id: '2', firstName: 'Marie', lastName: 'Martin', email: 'marie.martin@email.com', avatar: 'MM', role: 'manager', department: 'Marketing', status: 'active', lastActive: '2024-05-10T12:15:00' },
    { id: '3', firstName: 'Pierre', lastName: 'Bernard', email: 'pierre.bernard@email.com', avatar: 'PB', role: 'user', department: 'Développement', status: 'inactive', lastActive: '2024-05-08T09:45:00' },
    { id: '4', firstName: 'Sophie', lastName: 'Dubois', email: 'sophie.dubois@email.com', avatar: 'SD', role: 'user', department: 'Design', status: 'active', lastActive: '2024-05-10T11:00:00' },
    { id: '5', firstName: 'Lucas', lastName: 'Moreau', email: 'lucas.moreau@email.com', avatar: 'LM', role: 'guest', department: 'Externe', status: 'pending', lastActive: '2024-05-09T16:30:00' },
    { id: '6', firstName: 'Emma', lastName: 'Petit', email: 'emma.petit@email.com', avatar: 'EP', role: 'user', department: 'Support', status: 'active', lastActive: '2024-05-10T10:20:00' },
    { id: '7', firstName: 'Thomas', lastName: 'Robert', email: 'thomas.robert@email.com', avatar: 'TR', role: 'manager', department: 'Commercial', status: 'active', lastActive: '2024-05-10T08:45:00' },
    { id: '8', firstName: 'Léa', lastName: 'Richard', email: 'lea.richard@email.com', avatar: 'LR', role: 'user', department: 'RH', status: 'inactive', lastActive: '2024-05-05T14:00:00' }
  ];

  filteredUsers: User[] = [...this.users];

  searchQuery: string = '';
  selectedRole: string = '';
  selectedStatus: string = '';
  selectAll: boolean = false;

  roles = [
    { value: '', label: 'Tous les rôles' },
    { value: 'admin', label: 'Administrateur' },
    { value: 'manager', label: 'Manager' },
    { value: 'user', label: 'Utilisateur' },
    { value: 'guest', label: 'Invité' }
  ];

  statuses = [
    { value: '', label: 'Tous les statuts' },
    { value: 'active', label: 'Actif' },
    { value: 'inactive', label: 'Inactif' },
    { value: 'pending', label: 'En attente' }
  ];


  applyFilters(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = !this.searchQuery || 
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || user.status === this.selectedStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  toggleSelectAll(): void {
    this.filteredUsers.forEach(user => user.selected = this.selectAll);
  }

  onUserSelect(): void {
    this.selectAll = this.filteredUsers.length > 0 && this.filteredUsers.every(u => u.selected);
  }

  getSelectedCount(): number {
    return this.filteredUsers.filter(u => u.selected).length;
  }

  getRoleLabel(role: string): string {
    return this.roles.find(r => r.value === role)?.label || role;
  }

  getRoleClass(role: string): string {
    const classes: { [key: string]: string } = {
      admin: 'role--admin',
      manager: 'role--manager',
      user: 'role--user',
      guest: 'role--guest'
    };
    return classes[role] || '';
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      active: 'status--active',
      inactive: 'status--inactive',
      pending: 'status--pending'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      active: 'Actif',
      inactive: 'Inactif',
      pending: 'En attente'
    };
    return labels[status] || status;
  }

  formatLastActive(dateStr: string): string {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'À l\'instant';
    if (hours < 24) return `Il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    return `Il y a ${days}j`;
  }

  onView(user: User): void {
    console.log('View user:', user);
  }

  onEdit(user: User): void {
    console.log('Edit user:', user);
  }

  onDelete(user: User): void {
    console.log('Delete user:', user);
  }

  addUser(): void {
    console.log('Add new user');
  }
}
