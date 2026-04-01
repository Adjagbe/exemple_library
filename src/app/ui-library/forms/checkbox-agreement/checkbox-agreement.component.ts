import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-checkbox-agreement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-agreement.component.html',
  styleUrl: './checkbox-agreement.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxAgreementComponent {
  agreementChecked: boolean = false;
}
