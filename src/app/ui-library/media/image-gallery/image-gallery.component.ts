// ═══════════════════════════════════════════════════════════════
// IMAGE GALLERY COMPONENT - Premium UI Library
// Image gallery with lightbox
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  title: string;
  description?: string;
  category: string;
  date: Date;
  likes: number;
  views: number;
}

@Component({
  selector: 'ui-image-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent {
  // View mode
  viewMode: 'grid' | 'masonry' | 'list' = 'grid';

  // Active category
  activeCategory: string = 'all';

  // Lightbox
  lightboxOpen: boolean = false;
  currentImageIndex: number = 0;

  // Categories
  categories: string[] = ['all', 'Nature', 'Architecture', 'Portrait', 'Abstract'];

  // Sample images (using placeholder colors)
  images: GalleryImage[] = [
    {
      id: '1',
      src: '#10b981',
      thumbnail: '#10b981',
      title: 'Forêt tropicale',
      description: 'Une vue magnifique de la forêt amazonienne',
      category: 'Nature',
      date: new Date('2024-01-15'),
      likes: 245,
      views: 1250
    },
    {
      id: '2',
      src: '#3b82f6',
      thumbnail: '#3b82f6',
      title: 'Skyline moderne',
      description: 'Architecture contemporaine de la ville',
      category: 'Architecture',
      date: new Date('2024-01-14'),
      likes: 189,
      views: 980
    },
    {
      id: '3',
      src: '#f97316',
      thumbnail: '#f97316',
      title: 'Portrait artistique',
      description: 'Étude de lumière et d\'ombre',
      category: 'Portrait',
      date: new Date('2024-01-13'),
      likes: 312,
      views: 1560
    },
    {
      id: '4',
      src: '#8b5cf6',
      thumbnail: '#8b5cf6',
      title: 'Composition abstraite',
      description: 'Formes géométriques en mouvement',
      category: 'Abstract',
      date: new Date('2024-01-12'),
      likes: 156,
      views: 720
    },
    {
      id: '5',
      src: '#ec4899',
      thumbnail: '#ec4899',
      title: 'Coucher de soleil',
      description: 'Couleurs chaudes sur l\'océan',
      category: 'Nature',
      date: new Date('2024-01-11'),
      likes: 428,
      views: 2100
    },
    {
      id: '6',
      src: '#06b6d4',
      thumbnail: '#06b6d4',
      title: 'Pont historique',
      description: 'Architecture du 19ème siècle',
      category: 'Architecture',
      date: new Date('2024-01-10'),
      likes: 167,
      views: 890
    },
    {
      id: '7',
      src: '#f59e0b',
      thumbnail: '#f59e0b',
      title: 'Expression spontanée',
      description: 'Capture d\'un moment authentique',
      category: 'Portrait',
      date: new Date('2024-01-09'),
      likes: 234,
      views: 1120
    },
    {
      id: '8',
      src: '#ef4444',
      thumbnail: '#ef4444',
      title: 'Textures urbaines',
      description: 'Patterns de la ville moderne',
      category: 'Abstract',
      date: new Date('2024-01-08'),
      likes: 145,
      views: 650
    }
  ];

  // Get filtered images
  get filteredImages(): GalleryImage[] {
    if (this.activeCategory === 'all') return this.images;
    return this.images.filter(img => img.category === this.activeCategory);
  }

  // Set view mode
  setViewMode(mode: 'grid' | 'masonry' | 'list'): void {
    this.viewMode = mode;
  }

  // Set category
  setCategory(category: string): void {
    this.activeCategory = category;
  }

  // Open lightbox
  openLightbox(index: number): void {
    this.currentImageIndex = index;
    this.lightboxOpen = true;
  }

  // Close lightbox
  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  // Previous image
  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.filteredImages.length - 1;
    }
  }

  // Next image
  nextImage(): void {
    if (this.currentImageIndex < this.filteredImages.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  // Get current image
  get currentImage(): GalleryImage | null {
    return this.filteredImages[this.currentImageIndex] || null;
  }

  // Like image
  likeImage(image: GalleryImage): void {
    image.likes++;
  }

  // Format date
  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // Format number
  formatNumber(num: number): string {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  }
}
