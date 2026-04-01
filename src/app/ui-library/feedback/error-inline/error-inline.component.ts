import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-error-inline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-inline.component.html',
  styleUrl: './error-inline.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ErrorInlineComponent {}
