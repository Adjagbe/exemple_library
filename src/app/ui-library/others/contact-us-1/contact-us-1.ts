import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-contact-us-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-1.html',
  styleUrl: './contact-us-1.scss',
})
export class ContactUs1 {
  form = { firstName: '', lastName: '', email: '', subject: '', message: '' };
  sent = false;
  submit() {
    this.sent = true;
  }
}
