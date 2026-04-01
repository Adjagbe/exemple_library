import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-contact-us-2', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './contact-us-2.html', styleUrl: './contact-us-2.scss' })
export class ContactUs2 {
//   topics = ['Support technique', 'Facturation', 'Partenariat', 'Presse', 'Autre'];
  topics = [
    {label: 'Support technique', id:1, icon: 'bi bi-headset'},
    {label: 'Facturation', id:2, icon: 'bi bi-file-earmark-text'},
    {label: 'Partenariat', id:3, icon: 'bi bi-people'},
    {label: 'Presse', id:4, icon: 'bi bi-newspaper'},
    {label: 'Autre', id:5, icon: 'bi bi-question-circle'},
  ]
  selected = '';
  form = { name: '', email: '', message: '' };
  sent = false;
  submit() { if (this.selected && this.form.name && this.form.email) this.sent = true; }
}
