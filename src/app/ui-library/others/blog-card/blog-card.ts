import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
 
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
  author: { name: string; avatar: string };
}
 

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCard {
@Input() variant: 'default' | 'horizontal' = 'default';
  @Input() post: BlogPost = {
    slug: 'design-systems-2026',
    title: 'Building Design Systems That Scale in 2026',
    excerpt: 'Discover the patterns and principles behind design systems that survive rapid team growth, pivots, and technological change.',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80',
    category: 'Design',
    date: '2026-03-15',
    readTime: 7,
    author: { name: 'Léa Fontaine', avatar: 'https://i.pravatar.cc/80?img=47' }
  };
}
