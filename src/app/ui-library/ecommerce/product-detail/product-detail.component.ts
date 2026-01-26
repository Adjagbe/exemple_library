import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface ProductVariant {
  id: string;
  name: string;
  available: boolean;
}

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
}

@Component({
  selector: 'ui-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product = {
    id: '1',
    name: 'MacBook Pro 16"',
    brand: 'Apple',
    description: 'Le MacBook Pro 16 pouces avec puce M3 Pro offre des performances exceptionnelles pour les professionnels. Avec son écran Liquid Retina XDR, sa batterie longue durée et son système audio haute fidélité, c\'est l\'outil idéal pour la création.',
    price: 2799,
    originalPrice: 2999,
    discount: 7,
    rating: 4.9,
    reviewsCount: 234,
    sku: 'MBP16-M3PRO-512',
    inStock: true,
    stockCount: 12,
    features: [
      'Puce Apple M3 Pro avec CPU 12 cœurs',
      'GPU 18 cœurs',
      '18 Go de mémoire unifiée',
      'SSD de 512 Go',
      'Écran Liquid Retina XDR 16,2 pouces',
      'Autonomie jusqu\'à 22 heures'
    ]
  };

  images: ProductImage[] = [
    { id: '1', url: 'https://picsum.photos/800/800?random=1', alt: 'Vue principale' },
    { id: '2', url: 'https://picsum.photos/800/800?random=2', alt: 'Vue latérale' },
    { id: '3', url: 'https://picsum.photos/800/800?random=3', alt: 'Vue clavier' },
    { id: '4', url: 'https://picsum.photos/800/800?random=4', alt: 'Vue écran' }
  ];

  colors: ProductVariant[] = [
    { id: 'space-black', name: 'Noir sidéral', available: true },
    { id: 'silver', name: 'Argent', available: true }
  ];

  storage: ProductVariant[] = [
    { id: '512', name: '512 Go', available: true },
    { id: '1tb', name: '1 To', available: true },
    { id: '2tb', name: '2 To', available: false }
  ];

  reviews: Review[] = [
    {
      id: '1',
      author: 'Marie D.',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      date: '2024-01-10',
      title: 'Excellent produit !',
      content: 'Performances incroyables, l\'écran est magnifique et la batterie tient vraiment longtemps. Je recommande !',
      helpful: 23
    },
    {
      id: '2',
      author: 'Thomas B.',
      avatar: 'https://i.pravatar.cc/100?img=2',
      rating: 4,
      date: '2024-01-08',
      title: 'Très satisfait',
      content: 'Excellent MacBook, juste un peu cher mais la qualité est au rendez-vous.',
      helpful: 15
    }
  ];

  selectedImage = this.images[0];
  selectedColor = this.colors[0];
  selectedStorage = this.storage[0];
  quantity = 1;
  activeTab: 'description' | 'specs' | 'reviews' = 'description';
  isWishlisted = false;

  selectImage(image: ProductImage): void {
    this.selectedImage = image;
  }

  selectColor(color: ProductVariant): void {
    if (color.available) {
      this.selectedColor = color;
    }
  }

  selectStorage(storage: ProductVariant): void {
    if (storage.available) {
      this.selectedStorage = storage;
    }
  }

  incrementQuantity(): void {
    if (this.quantity < this.product.stockCount) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    console.log('Add to cart:', {
      product: this.product,
      color: this.selectedColor,
      storage: this.selectedStorage,
      quantity: this.quantity
    });
  }

  buyNow(): void {
    console.log('Buy now');
  }

  toggleWishlist(): void {
    this.isWishlisted = !this.isWishlisted;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0));
  }
}
