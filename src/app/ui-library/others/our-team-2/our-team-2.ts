import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team-2.html',
  styleUrls: ['./our-team-2.scss']
})
export class OurTeam2Component {
  departments = [
    {
      name: 'Leadership', members: [
        { name: 'Sophie Morel', role: 'CEO', initials: 'SM', color: '#4f46e5' },
        { name: 'Antoine Faure', role: 'COO', initials: 'AF', color: '#7c3aed' }
      ]
    },
    {
      name: 'Ingénierie', members: [
        { name: 'Julien Roy', role: 'Lead Dev', initials: 'JR', color: '#0ea5e9' },
        { name: 'Marie Blanc', role: 'Backend Dev', initials: 'MB', color: '#06b6d4' },
        { name: 'Paul Simon', role: 'Frontend Dev', initials: 'PS', color: '#3b82f6' }
      ]
    },
    {
      name: 'Design & Produit', members: [
        { name: 'Léa Martin', role: 'Product Designer', initials: 'LM', color: '#ec4899' },
        { name: 'Tom Leclerc', role: 'UX Researcher', initials: 'TL', color: '#f43f5e' }
      ]
    }
  ];
}
