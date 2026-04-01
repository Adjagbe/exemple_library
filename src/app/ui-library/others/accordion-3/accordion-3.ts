import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-3.html',
  styleUrl: './accordion-3.scss'
})
export class Accordion3 {
  items = [
    { icon: 'bi-box-seam', q: 'Quels sont les délais de livraison ?', a: 'Les commandes standard sont livrées en 3-5 jours ouvrés. L\'option express garantit une livraison en 24h.', open: true },
    { icon: 'bi-arrow-repeat', q: 'Quelle est la politique de retour ?', a: 'Retours acceptés sous 30 jours après réception, produit non ouvert dans son emballage d\'origine.', open: false },
    { icon: 'bi-truck', q: 'Livrez-vous à l\'international ?', a: 'Oui, nous livrons dans 50+ pays. Les frais et délais varient selon la destination.', open: false },
    { icon: 'bi-headset', q: 'Comment contacter le service client ?', a: 'Par chat en direct (9h-18h), par email ou par téléphone au 01 23 45 67 89.', open: false }
  ];
  toggle(i: number) {
    this.items = this.items.map((item, idx) => ({ ...item, open: idx === i ? !item.open : false }));
  }
}
