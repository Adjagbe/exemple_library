import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email = '';
  isLoading = false;
  error = '';
  success = false;

  async sendResetLink(): Promise<void> {
    this.error = '';

    if (!this.email) {
      this.error = 'Veuillez entrer votre adresse email';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.error = 'Veuillez entrer une adresse email valide';
      return;
    }

    this.isLoading = true;

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.isLoading = false;
    this.success = true;
    console.log('Reset link sent to:', this.email);
  }

  resetForm(): void {
    this.success = false;
    this.email = '';
    this.error = '';
  }
}
