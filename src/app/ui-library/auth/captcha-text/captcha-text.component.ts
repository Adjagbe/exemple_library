import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-captcha-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './captcha-text.component.html',
  styleUrl: './captcha-text.component.scss'
})
export class CaptchaTextComponent {
  captchaText = '';
  userInput = '';

  isLoading = false;
  isVerified = false;
  error = '';
  attempts = 0;
  maxAttempts = 3;

  constructor() {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    this.isVerified = false;
    this.error = '';
    this.generateTextCaptcha();
  }

  generateTextCaptcha(): void {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    this.captchaText = Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
    this.userInput = '';
  }

  async verify(): Promise<void> {
    if (this.isVerified || !this.userInput) return;

    this.isLoading = true;
    this.error = '';

    await new Promise(resolve => setTimeout(resolve, 1000));

    const isValid = this.userInput.toLowerCase() === this.captchaText.toLowerCase();

    this.isLoading = false;

    if (isValid) {
      this.isVerified = true;
    } else {
      this.attempts++;
      if (this.attempts >= this.maxAttempts) {
        this.error = 'Trop de tentatives. Veuillez réessayer.';
        this.attempts = 0;
      } else {
        this.error = 'Vérification échouée. Réessayez.';
      }
      this.generateCaptcha();
    }
  }
}
