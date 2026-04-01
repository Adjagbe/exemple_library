import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InlineMessage { id: string; title?: string; message: string; icon?: string; }

@Component({
  selector: 'ui-success-inline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-inline.component.html',
  styleUrl: './success-inline.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SuccessInlineComponent {
  inlineMessages: InlineMessage[] = [
    { id: 'i1', message: 'Profil mis à jour avec succès', icon: 'bi-check-lg' },
    { id: 'i2', title: 'Email vérifié', message: 'Votre adresse email a été confirmée.', icon: 'bi-envelope-check' }
  ];
}
