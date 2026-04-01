import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team-1.html',
  styleUrls: ['./our-team-1.scss']
})
export class OurTeam1Component {
  members = [
    { name: 'Emma Rousseau', role: 'CEO & Co-fondatrice', color: '#6366f1', initials: 'ER', twitter: '#', linkedin: '#' },
    { name: 'Lucas Petit', role: 'CTO', color: '#0ea5e9', initials: 'LP', twitter: '#', linkedin: '#' },
    { name: 'Camille Dupont', role: 'Design Lead', color: '#ec4899', initials: 'CD', twitter: '#', linkedin: '#' },
    { name: 'Noah Laurent', role: 'Head of Product', color: '#10b981', initials: 'NL', twitter: '#', linkedin: '#' },
    { name: 'Inès Garcia', role: 'Engineering Manager', color: '#f59e0b', initials: 'IG', twitter: '#', linkedin: '#' },
    { name: 'Hugo Bernard', role: 'Marketing Director', color: '#8b5cf6', initials: 'HB', twitter: '#', linkedin: '#' }
  ];
}
