import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
}

@Component({
  selector: 'ui-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  viewMode: 'grid' | 'list' = 'grid';
  searchQuery = '';
  selectedCategory = '';
  sortBy = 'featured';
  priceRange = { min: 0, max: 1000 };
  showFilters = false;

  categories = [
    { id: '', name: 'Toutes les catégories' },
    { id: 'electronics', name: 'Électronique' },
    { id: 'clothing', name: 'Vêtements' },
    { id: 'home', name: 'Maison' },
    { id: 'sports', name: 'Sports' }
  ];

  sortOptions = [
    { value: 'featured', label: 'En vedette' },
    { value: 'newest', label: 'Plus récents' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'rating', label: 'Mieux notés' }
  ];

  products: Product[] = [
    {
      id: '1',
      name: 'MacBook Pro 16"',
      description: 'Puce M3 Pro, 18 Go RAM, 512 Go SSD',
      price: 2799,
      originalPrice: 2999,
      image: 'https://picsum.photos/400/400?random=1',
      category: 'electronics',
      rating: 4.9,
      reviewsCount: 234,
      inStock: true,
      isNew: true,
      discount: 7
    },
    {
      id: '2',
      name: 'iPhone 15 Pro Max',
      description: '256 Go, Titane naturel',
      price: 1479,
      image: 'https://picsum.photos/400/400?random=2',
      category: 'electronics',
      rating: 4.8,
      reviewsCount: 567,
      inStock: true,
      isBestSeller: true
    },
    {
      id: '3',
      name: 'Nike Air Max 270',
      description: 'Chaussures de running, Noir/Blanc',
      price: 159,
      originalPrice: 189,
      image: 'https://picsum.photos/400/400?random=3',
      category: 'sports',
      rating: 4.6,
      reviewsCount: 892,
      inStock: true,
      discount: 16
    },
    {
      id: '4',
      name: 'Sony WH-1000XM5',
      description: 'Casque sans fil à réduction de bruit',
      price: 379,
      image: 'https://picsum.photos/400/400?random=4',
      category: 'electronics',
      rating: 4.7,
      reviewsCount: 1203,
      inStock: true,
      isBestSeller: true
    },
    {
      id: '5',
      name: 'Canapé 3 places Milano',
      description: 'Tissu bouclette, Gris clair',
      price: 899,
      originalPrice: 1099,
      image: 'https://picsum.photos/400/400?random=5',
      category: 'home',
      rating: 4.5,
      reviewsCount: 78,
      inStock: true,
      discount: 18
    },
    {
      id: '6',
      name: 'Veste en cuir Premium',
      description: 'Cuir véritable, Noir',
      price: 299,
      image: 'https://picsum.photos/400/400?random=6',
      category: 'clothing',
      rating: 4.4,
      reviewsCount: 156,
      inStock: false
    },
    {
      id: '7',
      name: 'Apple Watch Ultra 2',
      description: 'GPS + Cellular, 49mm, Titane',
      price: 899,
      image: 'https://picsum.photos/400/400?random=7',
      category: 'electronics',
      rating: 4.8,
      reviewsCount: 345,
      inStock: true,
      isNew: true
    },
    {
      id: '8',
      name: 'Lampe de bureau LED',
      description: 'Réglable, USB, Blanc',
      price: 49,
      originalPrice: 69,
      image: 'https://picsum.photos/400/400?random=8',
      category: 'home',
      rating: 4.3,
      reviewsCount: 423,
      inStock: true,
      discount: 29
    }
  ];

  get filteredProducts(): Product[] {
    return this.products
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             p.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = !this.selectedCategory || p.category === this.selectedCategory;
        const matchesPrice = p.price >= this.priceRange.min && p.price <= this.priceRange.max;
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        switch (this.sortBy) {
          case 'price-asc': return a.price - b.price;
          case 'price-desc': return b.price - a.price;
          case 'rating': return b.rating - a.rating;
          case 'newest': return (a.isNew ? -1 : 1);
          default: return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        }
      });
  }

  toggleView(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
  }

  addToWishlist(product: Product): void {
    console.log('Added to wishlist:', product);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0));
  }
}
