import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feature-section-dark',
  standalone: true,
  imports: [CommonModule],
   templateUrl: './feature-section-dark.html',
  styleUrls: ['./feature-section-dark.scss'],
})
export class FeatureSectionDark {

 featuresDark: Feature[] = [
    { icon: 'bi-speedometer2', title: 'Rapidité', description: 'Déploiement en 5 minutes, sans configuration complexe.' },
    { icon: 'bi-arrows-fullscreen', title: 'Scalabilité', description: 'Architecture cloud qui s\'adapte à votre croissance.' },
    { icon: 'bi-palette', title: 'Personnalisation', description: 'Interface entièrement personnalisable selon vos besoins.' }
  ];


}