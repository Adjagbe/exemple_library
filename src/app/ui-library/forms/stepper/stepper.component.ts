import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Step {
  id: number;
  title: string;
  subtitle?: string;
  icon: string;
  completed: boolean;
  active: boolean;
}

@Component({
  selector: 'ui-stepper',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent {
  currentStep: number = 1;
  
  steps: Step[] = [
    { id: 1, title: 'Account', subtitle: 'Create your account', icon: 'bi-person', completed: false, active: true },
    { id: 2, title: 'Personal Info', subtitle: 'Your personal details', icon: 'bi-card-text', completed: false, active: false },
    { id: 3, title: 'Preferences', subtitle: 'Customize settings', icon: 'bi-gear', completed: false, active: false },
    { id: 4, title: 'Confirmation', subtitle: 'Review and submit', icon: 'bi-check-circle', completed: false, active: false }
  ];

  // Form data for each step
  accountData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  personalData = {
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: ''
  };

  preferencesData = {
    newsletter: true,
    notifications: true,
    theme: 'light',
    language: 'en'
  };

  isProcessing: boolean = false;
  isCompleted: boolean = false;

  nextStep(): void {
    if (this.currentStep < this.steps.length) {
      this.steps[this.currentStep - 1].completed = true;
      this.steps[this.currentStep - 1].active = false;
      this.currentStep++;
      this.steps[this.currentStep - 1].active = true;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.steps[this.currentStep - 1].active = false;
      this.currentStep--;
      this.steps[this.currentStep - 1].active = true;
      this.steps[this.currentStep - 1].completed = false;
    }
  }

  goToStep(stepId: number): void {
    if (stepId <= this.currentStep) {
      this.steps[this.currentStep - 1].active = false;
      this.currentStep = stepId;
      this.steps[this.currentStep - 1].active = true;
    }
  }

  submit(): void {
    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.isCompleted = true;
      this.steps[this.currentStep - 1].completed = true;
    }, 2000);
  }

  getProgress(): number {
    return ((this.currentStep - 1) / (this.steps.length - 1)) * 100;
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!(this.accountData.email && this.accountData.password && 
                  this.accountData.password === this.accountData.confirmPassword);
      case 2:
        return !!(this.personalData.firstName && this.personalData.lastName);
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  }
}
