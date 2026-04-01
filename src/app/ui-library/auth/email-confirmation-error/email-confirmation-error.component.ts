import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-email-confirmation-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-confirmation-error.component.html',
  styleUrl: './email-confirmation-error.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EmailConfirmationErrorComponent {
  isRetrying = false;

  async retry(): Promise<void> {
    this.isRetrying = true;

    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 2000));

    this.isRetrying = false;
  }
}
