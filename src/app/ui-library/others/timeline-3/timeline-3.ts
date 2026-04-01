import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-3.html',
  styleUrls: ['./timeline-3.scss']
})
export class Timeline3Component {
  active = 2;
  steps = [
    { title: 'Inscription', desc: 'Créez votre compte en 2 minutes. Aucune carte requise.', icon: 'bi-person-plus' },
    { title: 'Configuration', desc: 'Configurez votre espace de travail et invitez votre équipe.', icon: 'bi-gear' },
    { title: 'Import des données', desc: 'Importez vos projets existants depuis Trello, Jira ou CSV.', icon: 'bi-cloud-upload' },
    { title: 'Lancement', desc: 'Commencez à collaborer en temps réel avec vos collègues.', icon: 'bi-rocket-takeoff' }
  ];
  select(i: number) { this.active = i; }
}
