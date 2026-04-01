import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-page-500',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-500.component.html',
  styleUrls: ['./page-500.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Page500Component {
  errorId: string = 'ERR-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  timestamp: string = new Date().toISOString();

  retry(): void {
    window.location.reload();
  }

  goHome(): void {
    console.log('Navigate to home');
  }

  reportIssue(): void {
    console.log('Report issue:', this.errorId);
  }
}
