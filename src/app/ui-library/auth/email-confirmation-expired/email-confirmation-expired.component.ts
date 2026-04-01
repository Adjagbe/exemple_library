import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-email-confirmation-expired',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-confirmation-expired.component.html',
  styleUrl: './email-confirmation-expired.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EmailConfirmationExpiredComponent {
  email = 'utilisateur@exemple.com';
  isResending = false;
  resendSuccess = false;

  async resendEmail(): Promise<void> {
    this.isResending = true;
    this.resendSuccess = false;

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.isResending = false;
    this.resendSuccess = true;
  }
}
