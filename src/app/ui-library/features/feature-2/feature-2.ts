import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-feature-2', standalone: true, imports: [CommonModule], templateUrl: './feature-2.html', styleUrls: ['./feature-2.scss'] })
export class Feature2 {
  items = ['No-code visual builder', 'One-click deployments', 'Auto-scaling infrastructure', 'Built-in CI/CD pipeline', 'Real-time collaboration', 'Version control integration'];
}
