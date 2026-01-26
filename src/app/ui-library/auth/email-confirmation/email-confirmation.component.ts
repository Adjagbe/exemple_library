import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-email-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-confirmation.component.html',
  styleUrl: './email-confirmation.component.scss'
})
export class EmailConfirmationComponent implements OnInit {
  status: 'loading' | 'success' | 'error' | 'expired' = 'loading';
  email = 'utilisateur@exemple.com';
  isResending = false;
  resendSuccess = false;

  ngOnInit(): void {
    this.verifyEmail();
  }

  async verifyEmail(): Promise<void> {
    this.status = 'loading';
    
    // Simulation de la vérification du token
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    // Simulation: succès aléatoire pour démo
    const random = Math.random();
    if (random > 0.3) {
      this.status = 'success';
    } else if (random > 0.15) {
      this.status = 'expired';
    } else {
      this.status = 'error';
    }
  }

  async resendEmail(): Promise<void> {
    this.isResending = true;
    this.resendSuccess = false;
    
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    this.isResending = false;
    this.resendSuccess = true;
  }

  retry(): void {
    this.verifyEmail();
  }
}
