import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-resume-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-resume-1.html',
  styleUrls: ['./cv-resume-1.scss']
})
export class CvResume1Component {
  cv = {
    name: 'Alexandre Martin',
    title: 'Développeur Full-Stack Senior',
    email: 'alexandre@example.com',
    phone: '+33 6 12 34 56 78',
    location: 'Paris, France',
    summary: 'Développeur passionné avec 8 ans d\'expérience dans la conception d\'applications web modernes. Expert React, Angular, Node.js.',
    skills: ['TypeScript', 'Angular', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Git'],
    experience: [
      { company: 'TechCorp', role: 'Lead Developer', period: '2021 – Présent', desc: 'Direction d\'une équipe de 5 développeurs, architecture micro-services.' },
      { company: 'WebAgency', role: 'Développeur Full-Stack', period: '2018 – 2021', desc: 'Développement de 20+ projets clients, React & Node.js.' },
      { company: 'StartupXYZ', role: 'Développeur Front-end', period: '2016 – 2018', desc: 'Création d\'interfaces utilisateur responsive et accessibles.' }
    ],
    education: [
      { school: 'École 42', degree: 'Ingénierie Logicielle', period: '2013 – 2016' },
      { school: 'Université Paris VI', degree: 'Licence Informatique', period: '2010 – 2013' }
    ]
  };

   getInitials(name: string | undefined): string {
    if (!name) return '';
    return name
        .split(' ')
        .map(n => n.charAt(0))
        .join('');
    }
}
