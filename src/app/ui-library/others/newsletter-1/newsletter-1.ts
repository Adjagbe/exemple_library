import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter-1.html',
  styleUrls: ['./newsletter-1.scss']
})
export class Newsletter1Component {
  email = '';
  subscribed = false;
  subscribe() { if (this.email) this.subscribed = true; }
}
