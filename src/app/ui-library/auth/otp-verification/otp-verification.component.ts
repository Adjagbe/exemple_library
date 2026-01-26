import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-otp-verification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss'
})
export class OtpVerificationComponent implements AfterViewInit {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  otpValues: string[] = ['', '', '', '', '', ''];
  isLoading = false;
  error = '';
  success = false;
  resendTimer = 60;
  canResend = false;
  timerInterval: any;

  email = 'utilisateur@exemple.com'; // Simulé

  ngAfterViewInit(): void {
    this.startResendTimer();
    setTimeout(() => {
      this.focusInput(0);
    }, 100);
  }

  startResendTimer(): void {
    this.canResend = false;
    this.resendTimer = 60;
    
    this.timerInterval = setInterval(() => {
      this.resendTimer--;
      if (this.resendTimer <= 0) {
        clearInterval(this.timerInterval);
        this.canResend = true;
      }
    }, 1000);
  }

  focusInput(index: number): void {
    const inputs = this.otpInputs.toArray();
    if (inputs[index]) {
      inputs[index].nativeElement.focus();
    }
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Ne garder que le dernier caractère si plusieurs sont collés
    if (value.length > 1) {
      this.handlePaste(value);
      return;
    }

    // Accepter seulement les chiffres
    if (value && !/^\d$/.test(value)) {
      input.value = '';
      this.otpValues[index] = '';
      return;
    }

    this.otpValues[index] = value;

    // Passer au champ suivant
    if (value && index < 5) {
      this.focusInput(index + 1);
    }

    // Vérifier si tous les champs sont remplis
    if (this.otpValues.every(v => v !== '')) {
      this.verifyOtp();
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.otpValues[index] && index > 0) {
      this.focusInput(index - 1);
    }
    if (event.key === 'ArrowLeft' && index > 0) {
      this.focusInput(index - 1);
    }
    if (event.key === 'ArrowRight' && index < 5) {
      this.focusInput(index + 1);
    }
  }

  handlePaste(value: string): void {
    const digits = value.replace(/\D/g, '').slice(0, 6).split('');
    digits.forEach((digit, i) => {
      this.otpValues[i] = digit;
      const inputs = this.otpInputs.toArray();
      if (inputs[i]) {
        inputs[i].nativeElement.value = digit;
      }
    });
    this.focusInput(Math.min(digits.length, 5));

    if (digits.length === 6) {
      this.verifyOtp();
    }
  }

  async verifyOtp(): Promise<void> {
    const otp = this.otpValues.join('');
    
    if (otp.length !== 6) {
      this.error = 'Veuillez entrer le code complet';
      return;
    }

    this.isLoading = true;
    this.error = '';

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.isLoading = false;

    // Simulation: code valide si "123456"
    if (otp === '123456') {
      this.success = true;
    } else {
      this.error = 'Code incorrect. Veuillez réessayer.';
      this.clearOtp();
    }
  }

  clearOtp(): void {
    this.otpValues = ['', '', '', '', '', ''];
    const inputs = this.otpInputs.toArray();
    inputs.forEach(input => input.nativeElement.value = '');
    this.focusInput(0);
  }

  async resendCode(): Promise<void> {
    if (!this.canResend) return;

    this.isLoading = true;
    this.error = '';

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));

    this.isLoading = false;
    this.startResendTimer();
    console.log('Code resent');
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}
