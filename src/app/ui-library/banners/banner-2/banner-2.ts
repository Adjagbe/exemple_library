import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-2.html',
  styleUrls: ['./banner-2.scss']
})
export class Banner2 {
  badge = '🚀 Now in public beta';
  stats = [
    { v: '50K+', l: 'Developers' },
    { v: '99.9%', l: 'Uptime' },
    { v: '< 100ms', l: 'Response' },
  ];
}
