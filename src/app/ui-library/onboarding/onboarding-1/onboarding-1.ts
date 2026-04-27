import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-onboarding-1', standalone: true, imports: [CommonModule], templateUrl: './onboarding-1.html', styleUrls: ['./onboarding-1.scss'] })
export class Onboarding1 {
  step = 0;
  steps = [
    { icon:'👋', title:'Welcome aboard!', desc:'You\'re just a few steps away from setting up your workspace. Let\'s get started.', cta:'Get started' },
    { icon:'🎨', title:'Personalize your space', desc:'Choose a theme, set your language, and configure your notification preferences.', cta:'Continue' },
    { icon:'👥', title:'Invite your team', desc:'Great products are built by great teams. Invite colleagues to collaborate with you.', cta:'Invite teammates' },
    { icon:'🚀', title:'You\'re all set!', desc:'Your workspace is ready. Dive in and start building something amazing.', cta:'Go to dashboard' },
  ];
  get current() { return this.steps[this.step]; }
  get pct() { return ((this.step + 1) / this.steps.length) * 100; }
  next() { if (this.step < this.steps.length - 1) this.step++; }
  skip() { this.step = this.steps.length - 1; }
}
