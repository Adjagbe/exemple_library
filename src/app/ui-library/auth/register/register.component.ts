import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  error = '';
  success = '';

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

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async register(): Promise<void> {
    this.error = '';
    this.success = '';

    if (!this.firstName || !this.lastName || !this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs obligatoires';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas';
      return;
    }

    if (this.password.length < 8) {
      this.error = 'Le mot de passe doit contenir au moins 8 caractères';
      return;
    }

    if (!this.acceptTerms) {
      this.error = 'Vous devez accepter les conditions d\'utilisation';
      return;
    }

    this.isLoading = true;

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 2000));

    this.isLoading = false;
    this.success = 'Compte créé avec succès ! Vérifiez votre email.';
    console.log('Register:', { 
      firstName: this.firstName, 
      lastName: this.lastName, 
      email: this.email 
    });
  }

  registerWithGoogle(): void {
    console.log('Register with Google');
  }

  registerWithGithub(): void {
    console.log('Register with GitHub');
  }
}
