import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-1.html',
  styleUrl: './pricing-1.scss'
})
export class Pricing1 {
  plans = [
    { name: 'Starter', price: '0', period: '/mois', desc: 'Parfait pour débuter', cta: 'Commencer gratuitement', highlight: false, features: ['5 projets', '2 membres', '1 GB stockage', 'Support communauté'] },
    { name: 'Pro', price: '29', period: '/mois', desc: 'Pour les équipes en croissance', cta: 'Essai gratuit 14 jours', highlight: true, features: ['Projets illimités', '15 membres', '50 GB stockage', 'Support prioritaire', 'API Access', 'Analytics avancés'] },
    { name: 'Enterprise', price: '99', period: '/mois', desc: 'Pour les grandes organisations', cta: 'Contacter les ventes', highlight: false, features: ['Tout en Pro', 'Membres illimités', '500 GB stockage', 'Support dédié 24/7', 'SSO & SAML', 'SLA garanti'] }
  ];
}
