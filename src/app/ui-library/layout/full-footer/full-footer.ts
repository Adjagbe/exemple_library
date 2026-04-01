import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-full-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './full-footer.html',
  styleUrl: './full-footer.scss',
})
export class FullFooter {
  brandLetter = 'P';
  brandName = 'Platform';
  description = 'La solution SaaS complète pour gérer votre entreprise. Simplifiez vos processus et boostez votre productivité.';

  socialLinks: SocialLink[] = [
    { icon: 'bi-twitter-x', href: '#' },
    { icon: 'bi-linkedin', href: '#' },
    { icon: 'bi-github', href: '#' },
    { icon: 'bi-youtube', href: '#' }
  ];

  columns: FooterColumn[] = [
    {
      title: 'Produit',
      links: [
        { label: 'Fonctionnalités', href: '#' },
        { label: 'Tarifs', href: '#' },
        { label: 'Intégrations', href: '#', badge: 'New' },
        { label: 'Changelog', href: '#' },
        { label: 'Roadmap', href: '#' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Carrières', href: '#', badge: '3 postes' },
        { label: 'Presse', href: '#' },
        { label: 'Partenaires', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: "Centre d'aide", href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Communauté', href: '#' },
        { label: 'Contact', href: '#' }
      ]
    }
  ];

   bottomLinks: FooterLink[] = [
      { label: 'Confidentialité', href: '#' },
      { label: 'CGU', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Mentions légales', href: '#' }
    ];

  newsletterEmail = '';

  onSubscribe(): void {
    if (this.newsletterEmail) {
      alert('Inscrit !');
      this.newsletterEmail = '';
    }
  }

}
