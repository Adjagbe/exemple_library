// ═══════════════════════════════════════════════════════════════
// CUSTOMER REVIEWS COMPONENT - Premium UI Library
// Review form and display with ratings
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  date: Date;
  helpful: number;
  notHelpful: number;
  verified: boolean;
  images?: string[];
  response?: {
    author: string;
    content: string;
    date: Date;
  };
}

interface RatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

@Component({
  selector: 'ui-customer-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CustomerReviewsComponent {
  // Product info
  productName: string = 'Premium Wireless Headphones';
  productImage: string = 'https://placehold.co/120x120/e5e7eb/64748b?text=Product';

  // Overall rating
  averageRating: number = 4.6;
  totalReviews: number = 1284;

  // Rating breakdown
  ratingBreakdown: RatingBreakdown[] = [
    { stars: 5, count: 856, percentage: 67 },
    { stars: 4, count: 257, percentage: 20 },
    { stars: 3, count: 103, percentage: 8 },
    { stars: 2, count: 45, percentage: 3 },
    { stars: 1, count: 23, percentage: 2 }
  ];

  // Reviews
  reviews: Review[] = [
    {
      id: '1',
      author: 'Sarah Johnson',
      avatar: 'https://placehold.co/48x48/4f46e5/ffffff?text=SJ',
      rating: 5,
      title: 'Best headphones I\'ve ever owned!',
      content: 'The sound quality is incredible, and the noise cancellation is top-notch. I use these for work calls and listening to music, and they excel at both. Battery life is amazing - I only charge them once a week with daily use. Highly recommend!',
      date: new Date('2024-01-12'),
      helpful: 42,
      notHelpful: 3,
      verified: true,
      images: [
        'https://placehold.co/100x100/e5e7eb/64748b?text=Photo+1',
        'https://placehold.co/100x100/e5e7eb/64748b?text=Photo+2'
      ]
    },
    {
      id: '2',
      author: 'Michael Chen',
      avatar: 'https://placehold.co/48x48/16a34a/ffffff?text=MC',
      rating: 4,
      title: 'Great quality, minor comfort issues',
      content: 'Sound quality is excellent and the build feels premium. My only complaint is that after about 3 hours of continuous use, my ears start to feel a bit warm. That said, for shorter sessions they\'re perfect. Would still recommend.',
      date: new Date('2024-01-08'),
      helpful: 28,
      notHelpful: 5,
      verified: true,
      response: {
        author: 'TechCorp Support',
        content: 'Thank you for your feedback, Michael! We appreciate you sharing your experience. Our ear cushions are designed for breathability, but we understand comfort can vary. Feel free to contact us for tips on adjusting the fit.',
        date: new Date('2024-01-09')
      }
    },
    {
      id: '3',
      author: 'Emily Rodriguez',
      avatar: 'https://placehold.co/48x48/dc2626/ffffff?text=ER',
      rating: 5,
      title: 'Perfect for remote work',
      content: 'I bought these specifically for video calls and they\'ve exceeded my expectations. Colleagues say my voice is crystal clear, and the noise cancellation blocks out all the background noise in my apartment. The multipoint connection is a game changer!',
      date: new Date('2024-01-05'),
      helpful: 35,
      notHelpful: 2,
      verified: true
    },
    {
      id: '4',
      author: 'David Kim',
      avatar: 'https://placehold.co/48x48/f59e0b/ffffff?text=DK',
      rating: 3,
      title: 'Good but not great',
      content: 'Decent headphones for the price. Sound quality is good but not audiophile level. ANC works well in most situations. My main issue is the app - it\'s buggy and crashes frequently. Hope they fix this in future updates.',
      date: new Date('2024-01-02'),
      helpful: 15,
      notHelpful: 8,
      verified: false
    },
    {
      id: '5',
      author: 'Lisa Thompson',
      avatar: 'https://placehold.co/48x48/7c3aed/ffffff?text=LT',
      rating: 5,
      title: 'Worth every penny!',
      content: 'After months of research, I finally pulled the trigger on these headphones and couldn\'t be happier. The sound stage is wide, bass is punchy but not overwhelming, and mids are clear. Perfect for all genres of music.',
      date: new Date('2023-12-28'),
      helpful: 52,
      notHelpful: 1,
      verified: true
    }
  ];

  // Filter & Sort
  sortBy: string = 'recent';
  filterByRating: number = 0;

  // Write review form
  showReviewForm: boolean = false;
  newReview = {
    rating: 0,
    title: '',
    content: '',
    images: [] as string[]
  };
  hoverRating: number = 0;
  isSubmitting: boolean = false;

  // Voted reviews tracking
  votedReviews: Set<string> = new Set();

  toggleReviewForm(): void {
    this.showReviewForm = !this.showReviewForm;
    if (!this.showReviewForm) {
      this.resetForm();
    }
  }

  setRating(rating: number): void {
    this.newReview.rating = rating;
  }

  setHoverRating(rating: number): void {
    this.hoverRating = rating;
  }

  resetForm(): void {
    this.newReview = {
      rating: 0,
      title: '',
      content: '',
      images: []
    };
    this.hoverRating = 0;
  }

  submitReview(): void {
    if (!this.isReviewValid()) return;

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      const review: Review = {
        id: Date.now().toString(),
        author: 'You',
        avatar: 'https://placehold.co/48x48/374151/ffffff?text=You',
        rating: this.newReview.rating,
        title: this.newReview.title,
        content: this.newReview.content,
        date: new Date(),
        helpful: 0,
        notHelpful: 0,
        verified: true,
        images: this.newReview.images.length > 0 ? this.newReview.images : undefined
      };

      this.reviews.unshift(review);
      this.totalReviews++;
      this.showReviewForm = false;
      this.resetForm();
      this.isSubmitting = false;
    }, 1500);
  }

  isReviewValid(): boolean {
    return this.newReview.rating > 0 && 
           this.newReview.title.trim().length > 0 && 
           this.newReview.content.trim().length >= 20;
  }

  voteHelpful(review: Review, helpful: boolean): void {
    if (this.votedReviews.has(review.id)) return;

    if (helpful) {
      review.helpful++;
    } else {
      review.notHelpful++;
    }
    this.votedReviews.add(review.id);
  }

  hasVoted(reviewId: string): boolean {
    return this.votedReviews.has(reviewId);
  }

  getFilteredReviews(): Review[] {
    let filtered = [...this.reviews];

    // Filter by rating
    if (this.filterByRating > 0) {
      filtered = filtered.filter(r => r.rating === this.filterByRating);
    }

    // Sort
    switch (this.sortBy) {
      case 'recent':
        filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case 'helpful':
        filtered.sort((a, b) => b.helpful - a.helpful);
        break;
    }

    return filtered;
  }

  getRatingText(rating: number): string {
    const texts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    return texts[rating] || '';
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;
    if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
