import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-3.html',
  styleUrls: ['./widget-3.scss']
})
export class Widget3Component {
  weather = { city: 'Paris', temp: 18, feels: 16, condition: 'Partiellement nuageux', icon: 'bi-cloud-sun', humidity: 64, wind: 22, uv: 4 };
  forecast = [
    { day: 'Mar', icon: 'bi-sun', high: 21, low: 13 },
    { day: 'Mer', icon: 'bi-cloud-rain', high: 15, low: 10 },
    { day: 'Jeu', icon: 'bi-cloud', high: 17, low: 12 },
    { day: 'Ven', icon: 'bi-sun', high: 22, low: 14 },
    { day: 'Sam', icon: 'bi-cloud-sun', high: 20, low: 13 }
  ];
}
