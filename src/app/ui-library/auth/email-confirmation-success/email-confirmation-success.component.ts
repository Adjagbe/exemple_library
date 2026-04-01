import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-email-confirmation-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-confirmation-success.component.html',
  styleUrl: './email-confirmation-success.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EmailConfirmationSuccessComponent {
  email = 'utilisateur@exemple.com';
}
