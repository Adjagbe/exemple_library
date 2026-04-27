import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-banner-3', standalone: true, imports: [CommonModule], templateUrl: './banner-3.html', styleUrls: ['./banner-3.scss'] })
export class Banner3 {
  features = ['No-code builder', 'AI integrations', 'Real-time sync', 'One-click deploy'];
}
