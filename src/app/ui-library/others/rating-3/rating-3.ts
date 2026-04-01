import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating-3.html',
  styleUrls: ['./rating-3.scss']
})
export class Rating3Component {
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hover = 0;
  comment = '';
  submitted = false;
  labels: { [k: number]: string } = { 1: 'Très mauvais', 2: 'Mauvais', 3: 'Moyen', 4: 'Bien', 5: 'Excellent !' };
  set(n: number) { this.rating = n; }
  submit() { if (this.rating) this.submitted = true; }
}
