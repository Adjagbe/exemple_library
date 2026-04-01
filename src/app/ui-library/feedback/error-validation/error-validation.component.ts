import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-error-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-validation.component.html',
  styleUrl: './error-validation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ErrorValidationComponent {}
