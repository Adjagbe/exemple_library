import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-2.html',
  styleUrl: './accordion-2.scss'
})
export class Accordion2 {
  categories = [
    {
      label: 'Compte & Sécurité', icon: 'bi-shield-lock', open: true,
      items: [
        { q: 'Comment activer l\'authentification à deux facteurs ?', a: 'Allez dans Paramètres > Sécurité et activez la 2FA via votre application d\'authentification préférée.' },
        { q: 'Puis-je avoir plusieurs comptes ?', a: 'Un seul compte par email est autorisé. Cependant, vous pouvez créer des espaces de travail distincts.' }
      ]
    },
    {
      label: 'Facturation', icon: 'bi-credit-card', open: false,
      items: [
        { q: 'Où trouver mes factures ?', a: 'Dans Paramètres > Facturation, vous trouvez l\'historique complet de vos factures téléchargeables en PDF.' },
        { q: 'Les prix incluent-ils la TVA ?', a: 'Non, les prix affichés sont HT. La TVA applicable est ajoutée au moment du paiement.' }
      ]
    },
    {
      label: 'Support technique', icon: 'bi-tools', open: false,
      items: [
        { q: 'Quel est le délai de réponse du support ?', a: 'Notre équipe répond en moins de 4h en jours ouvrés pour les plans Pro et Enterprise.' }
      ]
    }
  ];
  openItem: { [key: string]: boolean } = {};
  toggleCat(i: number) { this.categories[i].open = !this.categories[i].open; }
  toggleItem(cat: number, item: number) {
    const key = `${cat}-${item}`;
    this.openItem[key] = !this.openItem[key];
  }
  isItemOpen(cat: number, item: number) { return !!this.openItem[`${cat}-${item}`]; }
}
