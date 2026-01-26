// ═══════════════════════════════════════════════════════════════
// ONBOARDING COMPONENT - Premium UI Library
// User onboarding and tutorial wizard
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  image?: string;
  features?: string[];
}

@Component({
  selector: 'ui-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnboardingComponent {
  currentStep: number = 0;
  userName: string = '';
  selectedPlan: string = '';
  selectedInterests: string[] = [];

  steps: OnboardingStep[] = [
    {
      id: 1,
      title: 'Bienvenue !',
      description: 'Nous sommes ravis de vous accueillir. Découvrez comment tirer le meilleur parti de notre plateforme.',
      icon: 'bi-hand-wave',
      features: [
        'Interface intuitive et moderne',
        'Fonctionnalités puissantes',
        'Support 24/7'
      ]
    },
    {
      id: 2,
      title: 'Personnalisez votre profil',
      description: 'Dites-nous en plus sur vous pour personnaliser votre expérience.',
      icon: 'bi-person-circle'
    },
    {
      id: 3,
      title: 'Choisissez vos centres d\'intérêt',
      description: 'Sélectionnez les sujets qui vous intéressent pour recevoir du contenu pertinent.',
      icon: 'bi-heart'
    },
    {
      id: 4,
      title: 'Sélectionnez votre plan',
      description: 'Choisissez le plan qui correspond le mieux à vos besoins.',
      icon: 'bi-credit-card'
    },
    {
      id: 5,
      title: 'Vous êtes prêt !',
      description: 'Votre compte est configuré. Commencez à explorer dès maintenant.',
      icon: 'bi-rocket-takeoff'
    }
  ];

  interests = [
    { id: 'design', label: 'Design', icon: 'bi-palette' },
    { id: 'development', label: 'Développement', icon: 'bi-code-slash' },
    { id: 'marketing', label: 'Marketing', icon: 'bi-megaphone' },
    { id: 'business', label: 'Business', icon: 'bi-briefcase' },
    { id: 'analytics', label: 'Analytics', icon: 'bi-graph-up' },
    { id: 'ai', label: 'IA & ML', icon: 'bi-robot' }
  ];

  plans = [
    { id: 'free', name: 'Gratuit', price: '0€', features: ['5 projets', '1 Go stockage', 'Support email'] },
    { id: 'pro', name: 'Pro', price: '19€', features: ['Projets illimités', '100 Go stockage', 'Support prioritaire', 'API accès'], popular: true },
    { id: 'enterprise', name: 'Enterprise', price: '99€', features: ['Tout de Pro', 'Stockage illimité', 'Support dédié', 'SSO', 'SLA'] }
  ];

  get progress(): number {
    return ((this.currentStep + 1) / this.steps.length) * 100;
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number): void {
    this.currentStep = index;
  }

  toggleInterest(interestId: string): void {
    const index = this.selectedInterests.indexOf(interestId);
    if (index === -1) {
      this.selectedInterests.push(interestId);
    } else {
      this.selectedInterests.splice(index, 1);
    }
  }

  isInterestSelected(interestId: string): boolean {
    return this.selectedInterests.includes(interestId);
  }

  selectPlan(planId: string): void {
    this.selectedPlan = planId;
  }

  skip(): void {
    console.log('Onboarding skipped');
  }

  complete(): void {
    console.log('Onboarding completed', {
      userName: this.userName,
      interests: this.selectedInterests,
      plan: this.selectedPlan
    });
  }
}
