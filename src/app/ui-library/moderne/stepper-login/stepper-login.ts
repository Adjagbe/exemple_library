import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepper-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stepper-login.html',
  styleUrls: ['./stepper-login.scss']
})
export class StepperLogin {
  currentStep = 1;

  steps = [
    { id: 1, label: 'Sign In' },
    { id: 2, label: 'Verification' },
    { id: 3, label: 'Access' },
  ];

  // Step 1
  username = '';
  password = '';

  // Step 2
  otpCode = '';

  nextStep() {
    if (this.currentStep < this.steps.length) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  loginWithGoogle()  { console.log('Login with Google'); }
  loginWithGithub()  { console.log('Login with GitHub'); }
  loginWithApple()   { console.log('Login with Apple'); }

  submit() {
    console.log('Login complete:', this.username);
  }
}
