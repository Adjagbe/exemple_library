import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepper-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stepper-register.html',
  styleUrls: ['./stepper-register.scss']
})
export class StepperRegister {
  currentStep = 1;

  steps = [
    { id: 1, label: 'Personal Details' },
    { id: 2, label: 'Account Details' },
    { id: 3, label: 'Tax Details' },
    { id: 4, label: 'Summary' },
    { id: 5, label: 'Receipt' },
  ];

  // Step 1 – Personal Details
  nationalId = '01010102302';
  firstName = '';
  lastName = '';
  streetAddress = '';
  streetAddress2 = '';
  postCode = '';
  city = '';
  country = '';
  phone = '';
  email = '';

  // Step 2 – Account Details
  username = '';
  accountType = '';

  // Step 3 – Tax Details
  taxNumber = '';
  taxCountry = '';

  nextStep() {
    if (this.currentStep < this.steps.length) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  submit() {
    console.log('Registration complete:', this.email);
  }
}
