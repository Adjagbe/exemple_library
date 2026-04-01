import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-confirmation-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-toast.component.html',
  styleUrl: './confirmation-toast.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationToastComponent {}
