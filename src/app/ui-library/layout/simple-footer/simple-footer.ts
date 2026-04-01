import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface SocialLink {
  icon: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

@Component({
  selector: 'app-simple-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-footer.html',
  styleUrl: './simple-footer.scss',
})
export class SimpleFooter {

  brandLetter = 'P';
  brandName = 'Platform';
  description = 'La solution SaaS complète pour gérer votre entreprise. Simplifiez vos processus et boostez votre productivité.';

  socialLinks: SocialLink[] = [
    { icon: 'bi-twitter-x', href: '#' },
    { icon: 'bi-linkedin', href: '#' },
    { icon: 'bi-github', href: '#' },
    { icon: 'bi-youtube', href: '#' }
  ];

   simpleLinks: FooterLink[] = [
      { label: 'Produit', href: '#' },
      { label: 'Fonctionnalités', href: '#' },
      { label: 'Tarifs', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Contact', href: '#' }
    ];

}
