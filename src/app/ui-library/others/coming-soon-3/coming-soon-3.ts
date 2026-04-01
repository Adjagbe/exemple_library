import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-coming-soon-3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coming-soon-3.html',
  styleUrl: './coming-soon-3.scss',
})
export class ComingSoon3 {
  email: string = '';
  subscribed: boolean = false;
  subscribe() {
    if (this.email) this.subscribed = true;
  }
}
