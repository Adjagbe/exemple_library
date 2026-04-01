import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter-3.html',
  styleUrls: ['./newsletter-3.scss']
})
export class Newsletter3Component {
  email = '';
  freq = 'weekly';
  subscribed = false;
  subscribe() { if (this.email) this.subscribed = true; }
}
