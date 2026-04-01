import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-1.html',
  styleUrl: './accordion-1.scss'
})
export class Accordion1 {
  items = [
    { q: 'Comment créer un compte ?', a: 'Cliquez sur "S\'inscrire" en haut à droite, renseignez votre email et mot de passe, puis confirmez votre adresse email.', open: true },
    { q: 'Est-ce que le service est gratuit ?', a: 'Nous proposons un plan gratuit avec les fonctionnalités essentielles, et des plans premium pour les besoins avancés.', open: false },
    { q: 'Comment réinitialiser mon mot de passe ?', a: 'Rendez-vous sur la page de connexion et cliquez sur "Mot de passe oublié". Un email vous sera envoyé.', open: false },
    { q: 'Puis-je annuler mon abonnement à tout moment ?', a: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord, sans frais.', open: false },
    { q: 'Quels modes de paiement acceptez-vous ?', a: 'Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et les virements SEPA.', open: false }
  ];
  toggle(i: number) { this.items[i].open = !this.items[i].open; }
}
