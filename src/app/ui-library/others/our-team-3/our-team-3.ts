import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team-3.html',
  styleUrls: ['./our-team-3.scss']
})
export class OurTeam3Component {
  featured = { name: 'Clara Dubois', role: 'Fondatrice & CEO', color: '#4f46e5', initials: 'CD', bio: 'Ancienne ingénieure chez Google, Clara a fondé l\'entreprise en 2018 avec la mission de démocratiser l\'accès aux outils de productivité.', twitter: '#', linkedin: '#', github: '#' };
  team = [
    { name: 'Romain Lefort', role: 'CTO', initials: 'RL', color: '#0ea5e9' },
    { name: 'Manon Giard', role: 'Design Lead', initials: 'MG', color: '#ec4899' },
    { name: 'Kevin Assou', role: 'Head of Growth', initials: 'KA', color: '#10b981' },
    { name: 'Jade Perrin', role: 'Dev Senior', initials: 'JP', color: '#f59e0b' },
    { name: 'Baptiste Collin', role: 'Data Engineer', initials: 'BC', color: '#8b5cf6' }
  ];
}
