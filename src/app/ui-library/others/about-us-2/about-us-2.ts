import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-2.html',
  styleUrl: './about-us-2.scss'
})
export class AboutUs2 {
  team = [
    { name: 'Sophie Martin', role: 'CEO & Fondatrice', initials: 'SM' },
    { name: 'Lucas Bernard', role: 'CTO', initials: 'LB' },
    { name: 'Emma Dubois', role: 'Lead Designer', initials: 'ED' },
    { name: 'Noah Lambert', role: 'Head of Growth', initials: 'NL' }
  ];
  timeline = [
    { year: '2012', label: 'Fondation de l\'entreprise à Paris' },
    { year: '2015', label: 'Premier client international, expansion en Europe' },
    { year: '2018', label: 'Lancement de notre produit SaaS phare' },
    { year: '2023', label: '300+ clients actifs dans 25 pays' }
  ];
}
