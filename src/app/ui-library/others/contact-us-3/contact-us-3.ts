import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-contact-us-3', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './contact-us-3.html', styleUrl: './contact-us-3.scss' })
export class ContactUs3 {
  channels = [
    { icon: 'bi-chat-dots', bg: 'lightblue', color: 'blue', link: '#', cta: 'Ouvrir le chat', label: 'Chat en direct', desc: 'Obtenez une réponse instantanée de notre équipe support disponible 7j/7' },
    { icon: 'bi-envelope', bg: 'lightgreen', color: 'green', link: '#', cta: 'Envoyer un email', label: 'Email', desc: 'Envoyez-nous un message détaillé. Nous répondons sous 24 heures ouvrées.' },
    { icon: 'bi-telephone', bg: 'lightcoral', color: 'red', link: '#', cta: 'Appeler maintenant', label: 'Téléphone', desc: 'Appelez-nous directement pour une assistance personnalisée et rapide.' }
  ];
}
