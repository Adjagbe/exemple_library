import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details-3.html',
  styleUrl: './blog-details-3.scss'
})
export class BlogDetails3 {
  comments = [
    { initials: 'MR', name: 'Marie R.', date: 'Il y a 2h', text: 'Excellent article, très bien documenté ! J\'ai pu appliquer ces conseils immédiatement.' },
    { initials: 'PD', name: 'Pierre D.', date: 'Il y a 5h', text: 'Point 3 particulièrement utile. Merci pour ce partage de qualité.' }
  ];
}
