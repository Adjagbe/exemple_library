import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FaqCategory {
  id: string;
  name: string;
  icon: string;
  items: FaqItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  helpful?: { yes: number; no: number };
}

@Component({
  selector: 'ui-faq-accordion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FaqAccordionComponent {

  searchQuery: string = '';
  activeCategory: string = 'general';


  categories: FaqCategory[] = [
    {
      id: 'general',
      name: 'Général',
      icon: 'bi-info-circle',
      items: [
        {
          id: 'g1',
          question: 'Qu\'est-ce que notre plateforme SaaS ?',
          answer: 'Notre plateforme SaaS est une solution complète de gestion d\'entreprise qui vous permet de centraliser vos données, automatiser vos processus et collaborer efficacement avec votre équipe. Elle inclut des modules de CRM, de gestion de projets, de facturation et bien plus encore.',
          isOpen: true,
          helpful: { yes: 42, no: 3 }
        },
        {
          id: 'g2',
          question: 'Comment puis-je créer un compte ?',
          answer: 'Pour créer un compte, cliquez sur le bouton "S\'inscrire" en haut de la page. Vous devrez fournir votre adresse email professionnelle, choisir un mot de passe sécurisé, puis vérifier votre email. Une fois vérifié, vous aurez accès à un essai gratuit de 14 jours.',
          isOpen: false,
          helpful: { yes: 89, no: 7 }
        },
        {
          id: 'g3',
          question: 'Quels navigateurs sont supportés ?',
          answer: 'Notre application est optimisée pour les versions récentes de Chrome, Firefox, Safari et Edge. Nous recommandons de toujours utiliser la dernière version de votre navigateur pour une expérience optimale et une sécurité maximale.',
          isOpen: false,
          helpful: { yes: 28, no: 2 }
        }
      ]
    },
    {
      id: 'billing',
      name: 'Facturation',
      icon: 'bi-credit-card',
      items: [
        {
          id: 'b1',
          question: 'Quels modes de paiement acceptez-vous ?',
          answer: 'Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), les virements bancaires SEPA et PayPal. Pour les entreprises, nous proposons également la facturation sur devis avec des conditions de paiement adaptées.',
          isOpen: false,
          helpful: { yes: 56, no: 4 }
        },
        {
          id: 'b2',
          question: 'Puis-je changer de forfait à tout moment ?',
          answer: 'Oui, vous pouvez upgrader ou downgrader votre forfait à tout moment depuis votre espace de gestion. Le changement prend effet immédiatement pour les upgrades, et à la fin de la période de facturation en cours pour les downgrades.',
          isOpen: false,
          helpful: { yes: 71, no: 8 }
        },
        {
          id: 'b3',
          question: 'Comment annuler mon abonnement ?',
          answer: 'Vous pouvez annuler votre abonnement depuis les paramètres de votre compte, section "Abonnement". L\'annulation prendra effet à la fin de votre période de facturation en cours. Vos données seront conservées pendant 30 jours après l\'annulation.',
          isOpen: false,
          helpful: { yes: 34, no: 12 }
        }
      ]
    },
    {
      id: 'security',
      name: 'Sécurité',
      icon: 'bi-shield-check',
      items: [
        {
          id: 's1',
          question: 'Mes données sont-elles sécurisées ?',
          answer: 'Absolument. Nous utilisons un chiffrement AES-256 pour toutes les données stockées et TLS 1.3 pour les données en transit. Nos serveurs sont hébergés dans des datacenters certifiés ISO 27001 en Europe, et nous effectuons des audits de sécurité réguliers.',
          isOpen: false,
          helpful: { yes: 98, no: 2 }
        },
        {
          id: 's2',
          question: 'Proposez-vous l\'authentification à deux facteurs ?',
          answer: 'Oui, nous proposons plusieurs méthodes d\'authentification à deux facteurs : application d\'authentification (Google Authenticator, Authy), SMS, et clés de sécurité physiques (FIDO2/WebAuthn). L\'activation de la 2FA est fortement recommandée pour tous les utilisateurs.',
          isOpen: false,
          helpful: { yes: 67, no: 3 }
        }
      ]
    },
    {
      id: 'support',
      name: 'Support',
      icon: 'bi-headset',
      items: [
        {
          id: 'sp1',
          question: 'Comment contacter le support ?',
          answer: 'Notre support est disponible via plusieurs canaux : chat en direct (24/7 pour les plans Business et Enterprise), email (support@example.com), téléphone (pour les plans Enterprise), et notre centre d\'aide en ligne avec des tutoriels vidéo.',
          isOpen: false,
          helpful: { yes: 112, no: 9 }
        },
        {
          id: 'sp2',
          question: 'Quel est le délai de réponse du support ?',
          answer: 'Notre temps de réponse moyen est de 2 heures pour les demandes critiques, 4 heures pour les demandes normales, et 24 heures pour les questions générales. Les clients Enterprise bénéficient d\'un support prioritaire avec un temps de réponse garanti de 1 heure.',
          isOpen: false,
          helpful: { yes: 45, no: 6 }
        }
      ]
    }
  ];


  toggleItem(category: FaqCategory, item: FaqItem): void {
    item.isOpen = !item.isOpen;
  }

  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  getFilteredCategories(): FaqCategory[] {
    if (!this.searchQuery.trim()) {
      return this.categories;
    }

    const query = this.searchQuery.toLowerCase();
    return this.categories
      .map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
        )
      }))
      .filter(category => category.items.length > 0);
  }

  getActiveCategory(): FaqCategory | undefined {
    if (this.searchQuery.trim()) {
      return undefined;
    }
    return this.categories.find(c => c.id === this.activeCategory);
  }

  getTotalQuestions(): number {
    return this.categories.reduce((total, cat) => total + cat.items.length, 0);
  }

  markHelpful(item: FaqItem, isHelpful: boolean): void {
    if (!item.helpful) {
      item.helpful = { yes: 0, no: 0 };
    }
    if (isHelpful) {
      item.helpful.yes++;
    } else {
      item.helpful.no++;
    }
    console.log('Feedback:', item.question, isHelpful ? 'Helpful' : 'Not helpful');
  }

  expandAll(): void {
    this.categories.forEach(cat => cat.items.forEach(item => item.isOpen = true));
  }

  collapseAll(): void {
    this.categories.forEach(cat => cat.items.forEach(item => item.isOpen = false));
  }
}
