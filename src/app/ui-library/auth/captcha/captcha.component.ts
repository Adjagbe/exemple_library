import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CaptchaImage {
  id: number;
  src: string;
  isCorrect: boolean;
  selected: boolean;
}

@Component({
  selector: 'ui-captcha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.scss'
})
export class CaptchaComponent {
  // Mode CAPTCHA
  captchaMode: 'image' | 'text' | 'slider' = 'image';
  
  // Image CAPTCHA
  targetObject = 'feux de circulation';
  images: CaptchaImage[] = [];
  
  // Text CAPTCHA
  captchaText = '';
  userInput = '';
  
  // Slider CAPTCHA
  sliderPosition = 0;
  targetPosition = 0;
  isDragging = false;
  
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
    
    if (this.captchaMode === 'image') {
      this.generateImageCaptcha();
    } else if (this.captchaMode === 'text') {
      this.generateTextCaptcha();
    } else {
      this.generateSliderCaptcha();
    }
  }

  generateImageCaptcha(): void {
    const targets = ['feux de circulation', 'passages piétons', 'voitures', 'bus', 'vélos'];
    this.targetObject = targets[Math.floor(Math.random() * targets.length)];
    
    // Simuler des images (dans un vrai cas, ce serait des URLs)
    this.images = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      src: `https://picsum.photos/150/150?random=${i + Date.now()}`,
      isCorrect: Math.random() > 0.6, // ~40% de chances d'être correcte
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

  generateTextCaptcha(): void {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    this.captchaText = Array.from({ length: 6 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
    this.userInput = '';
  }

  generateSliderCaptcha(): void {
    this.targetPosition = 50 + Math.floor(Math.random() * 150); // Entre 50 et 200
    this.sliderPosition = 0;
  }

  toggleImageSelection(image: CaptchaImage): void {
    if (this.isVerified) return;
    image.selected = !image.selected;
  }

  onSliderStart(event: MouseEvent | TouchEvent): void {
    if (this.isVerified) return;
    this.isDragging = true;
    event.preventDefault();
  }

  onSliderMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging || this.isVerified) return;
    
    const container = (event.target as HTMLElement).closest('.slider-track') as HTMLElement;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const x = clientX - rect.left;
    
    this.sliderPosition = Math.max(0, Math.min(x - 25, rect.width - 50));
  }

  onSliderEnd(): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    // Vérifier si le slider est dans la zone cible (±10px)
    if (Math.abs(this.sliderPosition - this.targetPosition) <= 10) {
      this.verifySliderCaptcha();
    }
  }

  async verify(): Promise<void> {
    if (this.isVerified) return;
    
    this.isLoading = true;
    this.error = '';
    
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let isValid = false;
    
    if (this.captchaMode === 'image') {
      isValid = this.verifyImageCaptcha();
    } else if (this.captchaMode === 'text') {
      isValid = this.verifyTextCaptcha();
    }
    
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

  verifyTextCaptcha(): boolean {
    return this.userInput.toLowerCase() === this.captchaText.toLowerCase();
  }

  async verifySliderCaptcha(): Promise<void> {
    this.isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 500));
    this.isLoading = false;
    this.isVerified = true;
  }

  setMode(mode: 'image' | 'text' | 'slider'): void {
    this.captchaMode = mode;
    this.generateCaptcha();
  }

  get selectedCount(): number {
    return this.images.filter(img => img.selected).length;
  }
}
