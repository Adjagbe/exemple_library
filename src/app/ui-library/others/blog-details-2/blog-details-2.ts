import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details-2.html',
  styleUrl: './blog-details-2.scss'
})
export class BlogDetails2 {
  tags = ['React', 'Performance', 'Bundling', 'CI/CD'];
}
