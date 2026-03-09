import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-captcha-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './captcha-slider.component.html',
  styleUrl: './captcha-slider.component.scss'
})
export class CaptchaSliderComponent {
  sliderPosition = 0;
  targetPosition = 0;
  isDragging = false;

  isLoading = false;
  isVerified = false;
  error = '';

  constructor() {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    this.isVerified = false;
    this.error = '';
    this.targetPosition = 50 + Math.floor(Math.random() * 150);
    this.sliderPosition = 0;
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

    if (Math.abs(this.sliderPosition - this.targetPosition) <= 10) {
      this.verifySlider();
    }
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  onDocumentUp(): void {
    if (this.isDragging) {
      this.onSliderEnd();
    }
  }

  async verifySlider(): Promise<void> {
    this.isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 500));
    this.isLoading = false;
    this.isVerified = true;
  }
}
