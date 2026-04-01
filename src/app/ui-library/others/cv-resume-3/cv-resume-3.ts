import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-resume-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-resume-3.html',
  styleUrls: ['./cv-resume-3.scss']
})
export class CvResume3Component {
  cv = {
    initials: 'TB',
    name: 'Thomas Bernard',
    role: 'Product Manager · Lyon',
    email: 'thomas@example.com',
    phone: '+33 6 45 67 89 01',
    linkedin: '/in/thomas-bernard',
    metrics: [
      { val: '12', lbl: 'Produits lancés' },
      { val: '7+', lbl: 'Années d\'exp.' },
      { val: '4',  lbl: 'Équipes dirigées' },
      { val: '72', lbl: 'Score NPS' }
    ],
    experience: [
      {
        role: 'Head of Product',
        meta: 'Contentsquare · 2021 — présent',
        desc: 'Direction de la roadmap produit, gestion d\'une équipe de 12 personnes (PM, UX, Data). Lancement de 4 fonctionnalités clés avec +40% d\'adoption.',
        tags: ['Roadmap', 'OKR', 'A/B Testing', 'Analytics']
      },
      {
        role: 'Senior Product Manager',
        meta: 'BlaBlaCar · 2018 — 2021',
        desc: 'Ownership du module de paiement et de confiance. Réduction du taux de fraude de 35%.',
        tags: ['Paiement', 'Trust & Safety', 'Mobile']
      },
      {
        role: 'Product Manager',
        meta: 'Criteo · 2017 — 2018',
        desc: 'Lancement du dashboard analytics self-serve. Onboarding de 200+ clients enterprise.',
        tags: ['AdTech', 'B2B', 'Self-serve']
      }
    ],
    skills: [
      { name: 'Product Strategy', level: 'Expert' },
      { name: 'Data Analysis',    level: 'Expert' },
      { name: 'User Research',    level: 'Avancé' },
      { name: 'SQL / Looker',     level: 'Avancé' },
      { name: 'Agile / Scrum',    level: 'Expert' }
    ],
    formation: [
      {
        degree: 'Master Management & Innovation',
        meta: 'HEC Paris · 2015 — 2017',
        desc: 'Spécialisation en entrepreneuriat et gestion de produits digitaux.'
      },
      {
        degree: 'Licence Informatique',
        meta: 'INSA Lyon · 2012 — 2015',
        desc: 'Bases solides en développement et architecture logicielle.'
      }
    ]
  };
}
