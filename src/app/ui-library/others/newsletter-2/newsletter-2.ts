import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter-2.html',
  styleUrls: ['./newsletter-2.scss']
})
export class Newsletter2Component {
  email = '';
  name = '';
  subscribed = false;
  subscribe() { if (this.email && this.name) this.subscribed = true; }
}
