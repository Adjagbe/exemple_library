import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-3.html',
  styleUrl: './about-us-3.scss'
})
export class AboutUs3 {
  pillars = [
    { icon: 'bi-rocket-takeoff', title: 'Mission', text: 'Démocratiser l\'accès aux outils digitaux de qualité pour toutes les entreprises, quelle que soit leur taille.' },
    { icon: 'bi-eye', title: 'Vision', text: 'Devenir la référence mondiale en matière d\'expérience utilisateur et d\'innovation produit.' },
    { icon: 'bi-gem', title: 'Valeurs', text: 'Excellence, intégrité, créativité et un profond respect pour nos clients et partenaires.' }
  ];
  partners = ['Google', 'Microsoft', 'Stripe', 'Vercel', 'Figma', 'Notion'];
}
