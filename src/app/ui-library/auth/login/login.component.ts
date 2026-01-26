import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  isLoading = false;
  error = '';

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  async login(): Promise<void> {
    if (!this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs';
      return;
    }
    
    this.isLoading = true;
    this.error = '';
    
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    this.isLoading = false;
    console.log('Login:', { email: this.email, password: this.password, rememberMe: this.rememberMe });
  }

  loginWithGoogle(): void {
    console.log('Login with Google');
  }

  loginWithGithub(): void {
    console.log('Login with GitHub');
  }
}