import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-1.html',
  styleUrl: './about-us-1.scss'
})
export class AboutUs1 {
  stats = [
    { value: '12+', label: 'Années d\'expérience' },
    { value: '340', label: 'Projets livrés' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '45', label: 'Experts passionnés' }
  ];
  values = [
    { icon: 'bi-lightbulb', title: 'Innovation', description: 'Nous repoussons les limites de la technologie pour créer des solutions d\'avant-garde.' },
    { icon: 'bi-shield-check', title: 'Fiabilité', description: 'Chaque engagement est tenu. La confiance de nos clients est notre priorité absolue.' },
    { icon: 'bi-people', title: 'Collaboration', description: 'Nous croyons en la puissance du travail d\'équipe et des partenariats durables.' }
  ];
}
