import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-confirmation-inline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-inline.component.html',
  styleUrl: './confirmation-inline.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationInlineComponent {}
