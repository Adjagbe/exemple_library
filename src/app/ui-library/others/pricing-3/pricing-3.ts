import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-3.html',
  styleUrl: './pricing-3.scss'
})
export class Pricing3 {
  rows = [
    { feature: 'Nombre de projets', free: '3', pro: 'Illimité', enterprise: 'Illimité' },
    { feature: 'Membres d\'équipe', free: '1', pro: '10', enterprise: 'Illimité' },
    { feature: 'Stockage', free: '500 MB', pro: '50 GB', enterprise: '1 TB' },
    { feature: 'API Access', free: '✗', pro: '✓', enterprise: '✓' },
    { feature: 'Analytics', free: '✗', pro: 'Basique', enterprise: 'Avancé' },
    { feature: 'SSO / SAML', free: '✗', pro: '✗', enterprise: '✓' },
    { feature: 'Support', free: 'Email', pro: 'Prioritaire', enterprise: 'Dédié 24/7' }
  ];
}
