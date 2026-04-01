import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-resume-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-resume-2.html',
  styleUrls: ['./cv-resume-2.scss']
})
export class CvResume2Component {
  cv = {
    name: 'Chloé Leblanc',
    title: 'UX / UI Designer',
    email: 'chloe@example.com',
    site: 'chloedesign.io',
    location: 'Lyon, France',
    bio: 'Designer créative spécialisée en UX Research et Design System. 6 ans d\'expérience chez des start-ups et grandes entreprises.',
    skills: [
      { name: 'Figma', pct: 95 }, { name: 'Adobe XD', pct: 85 }, { name: 'Illustrator', pct: 80 },
      { name: 'Recherche UX', pct: 90 }, { name: 'Prototypage', pct: 88 }
    ],
    experience: [
      { company: 'DesignHub', role: 'Lead UX Designer', period: '2022 – Présent', desc: 'Design System complet, tests utilisateurs et itérations.' },
      { company: 'AgenceDigitale', role: 'UX/UI Designer', period: '2019 – 2022', desc: 'Conception d\'interfaces pour 30+ applications mobiles et web.' }
    ],
    languages: ['Français (natif)', 'Anglais (courant)', 'Espagnol (intermédiaire)']
  };

   getInitials(name: string | undefined): string {
    if (!name) return '';
    return name
        .split(' ')
        .map(n => n.charAt(0))
        .join('');
    }
}
