import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ConfirmationConfig {
  id: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  icon?: string;
  confirmLabel: string;
  cancelLabel: string;
  requireInput?: boolean;
  inputPlaceholder?: string;
}

@Component({
  selector: 'ui-confirmation-types',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmation-types.component.html',
  styleUrl: './confirmation-types.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationTypesComponent {
  activeDialog: string | null = null;
  inputValue = '';

  dialogs: ConfirmationConfig[] = [
    { id: 'delete', type: 'danger', title: 'Supprimer cet élément ?', message: 'Cette action est irréversible. Toutes les données associées seront définitivement supprimées.', icon: 'bi-trash3', confirmLabel: 'Supprimer', cancelLabel: 'Annuler' },
    { id: 'logout', type: 'warning', title: 'Se déconnecter ?', message: 'Vous allez être déconnecté de votre compte. Les modifications non enregistrées seront perdues.', icon: 'bi-box-arrow-right', confirmLabel: 'Se déconnecter', cancelLabel: 'Rester connecté' },
    { id: 'save', type: 'info', title: 'Enregistrer les modifications ?', message: 'Vous avez des modifications non enregistrées. Voulez-vous les sauvegarder avant de continuer ?', icon: 'bi-floppy', confirmLabel: 'Enregistrer', cancelLabel: 'Ne pas enregistrer' },
    { id: 'publish', type: 'success', title: 'Publier ce contenu ?', message: 'Une fois publié, ce contenu sera visible par tous les utilisateurs.', icon: 'bi-send', confirmLabel: 'Publier', cancelLabel: 'Annuler' },
    { id: 'delete-account', type: 'danger', title: 'Supprimer votre compte ?', message: 'Pour confirmer la suppression définitive de votre compte, tapez "SUPPRIMER" ci-dessous.', icon: 'bi-person-x', confirmLabel: 'Supprimer mon compte', cancelLabel: 'Annuler', requireInput: true, inputPlaceholder: 'Tapez SUPPRIMER' }
  ];

  openDialog(id: string): void { this.activeDialog = id; this.inputValue = ''; }
  closeDialog(): void { this.activeDialog = null; this.inputValue = ''; }
  getActiveDialog(): ConfirmationConfig | undefined { return this.dialogs.find(d => d.id === this.activeDialog); }
  canConfirm(): boolean { const d = this.getActiveDialog(); return d?.requireInput ? this.inputValue.toUpperCase() === 'SUPPRIMER' : true; }
  onConfirm(): void { if (this.canConfirm()) { this.closeDialog(); } }
  onCancel(): void { this.closeDialog(); }
}
