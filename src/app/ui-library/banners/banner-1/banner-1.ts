import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-1.html',
  styleUrls: ['./banner-1.scss']
})
export class Banner1 {
  pills = ['New', 'v2.0 Released'];
  headline = ['Build faster.', 'Ship smarter.'];
  sub = 'The all-in-one design system for modern web applications. From prototype to production in record time.';
}
