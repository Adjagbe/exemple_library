import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  error = '';
  success = false;

  /** Force du mot de passe */
  get passwordStrength(): { level: number; text: string; color: string } {
    const password = this.password;
    if (!password) return { level: 0, text: '', color: '' };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    const levels = [
      { level: 1, text: 'Faible', color: '#ef4444' },
      { level: 2, text: 'Moyen', color: '#f59e0b' },
      { level: 3, text: 'Bon', color: '#10b981' },
      { level: 4, text: 'Excellent', color: '#059669' }
    ];

    return levels[strength - 1] || { level: 0, text: '', color: '' };
  }

  /** Critères de validation */
  get passwordCriteria() {
    return [
      { met: this.password.length >= 8, text: 'Au moins 8 caractères' },
      { met: /[A-Z]/.test(this.password), text: 'Une lettre majuscule' },
      { met: /[a-z]/.test(this.password), text: 'Une lettre minuscule' },
      { met: /\d/.test(this.password), text: 'Un chiffre' },
      { met: /[^a-zA-Z0-9]/.test(this.password), text: 'Un caractère spécial' }
    ];
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async resetPassword(): Promise<void> {
    this.error = '';

    if (!this.password || !this.confirmPassword) {
      this.error = 'Veuillez remplir tous les champs';
      return;
    }

    if (this.password.length < 8) {
      this.error = 'Le mot de passe doit contenir au moins 8 caractères';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.isLoading = true;

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.isLoading = false;
    this.success = true;
    console.log('Password reset successfully');
  }
}
