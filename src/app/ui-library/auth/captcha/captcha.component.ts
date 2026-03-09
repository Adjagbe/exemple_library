import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaptchaImage {
  id: number;
  src: string;
  isCorrect: boolean;
  selected: boolean;
}

@Component({
  selector: 'ui-captcha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.scss'
})
export class CaptchaComponent {
  // Image CAPTCHA
  targetObject = 'feux de circulation';
  images: CaptchaImage[] = [];

  // États
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
    this.generateImageCaptcha();
  }

  generateImageCaptcha(): void {
    const targets = ['feux de circulation', 'passages piétons', 'voitures', 'bus', 'vélos'];
    this.targetObject = targets[Math.floor(Math.random() * targets.length)];

    this.images = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      src: `https://picsum.photos/150/150?random=${i + Date.now()}`,
      isCorrect: Math.random() > 0.6,
      selected: false
    }));

    // S'assurer qu'il y a au moins 2 images correctes
    const correctCount = this.images.filter(img => img.isCorrect).length;
    if (correctCount < 2) {
      for (let i = 0; i < 2 - correctCount; i++) {
        const randomIdx = Math.floor(Math.random() * 9);
        this.images[randomIdx].isCorrect = true;
      }
    }
  }

  toggleImageSelection(image: CaptchaImage): void {
    if (this.isVerified) return;
    image.selected = !image.selected;
  }

  async verify(): Promise<void> {
    if (this.isVerified) return;

    this.isLoading = true;
    this.error = '';

    await new Promise(resolve => setTimeout(resolve, 1000));

    const isValid = this.verifyImageCaptcha();

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

  verifyImageCaptcha(): boolean {
    const selectedCorrect = this.images.filter(img => img.selected && img.isCorrect).length;
    const selectedWrong = this.images.filter(img => img.selected && !img.isCorrect).length;
    const totalCorrect = this.images.filter(img => img.isCorrect).length;

    return selectedCorrect === totalCorrect && selectedWrong === 0;
  }

  get selectedCount(): number {
    return this.images.filter(img => img.selected).length;
  }
}
