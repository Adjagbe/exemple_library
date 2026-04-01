import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MegaMenuItem {
  id: string;
  title: string;
  items: { label: string; link: string; icon?: string; badge?: string }[];
}

interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

@Component({
  selector: 'ui-mega-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MegaMenuComponent {
  isOpen: boolean = false;
  activeCategory: string = 'products';

  categories: MegaMenuItem[] = [
    {
      id: 'products',
      title: 'Products',
      items: [
        { label: 'All Products', link: '/products', icon: 'bi-grid' },
        { label: 'New Arrivals', link: '/products/new', icon: 'bi-stars', badge: 'New' },
        { label: 'Best Sellers', link: '/products/best', icon: 'bi-trophy' },
        { label: 'On Sale', link: '/products/sale', icon: 'bi-tag', badge: '-30%' },
        { label: 'Collections', link: '/collections', icon: 'bi-collection' }
      ]
    },
    {
      id: 'categories',
      title: 'Categories',
      items: [
        { label: 'Electronics', link: '/category/electronics', icon: 'bi-cpu' },
        { label: 'Clothing', link: '/category/clothing', icon: 'bi-handbag' },
        { label: 'Home & Garden', link: '/category/home', icon: 'bi-house' },
        { label: 'Sports', link: '/category/sports', icon: 'bi-bicycle' },
        { label: 'Books', link: '/category/books', icon: 'bi-book' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        { label: 'Documentation', link: '/docs', icon: 'bi-file-text' },
        { label: 'API Reference', link: '/api', icon: 'bi-code-slash' },
        { label: 'Tutorials', link: '/tutorials', icon: 'bi-play-circle' },
        { label: 'Blog', link: '/blog', icon: 'bi-journal-text' },
        { label: 'Community', link: '/community', icon: 'bi-people' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      items: [
        { label: 'About Us', link: '/about', icon: 'bi-building' },
        { label: 'Careers', link: '/careers', icon: 'bi-briefcase', badge: 'Hiring' },
        { label: 'Press', link: '/press', icon: 'bi-newspaper' },
        { label: 'Contact', link: '/contact', icon: 'bi-envelope' },
        { label: 'Partners', link: '/partners', icon: 'bi-handshake' }
      ]
    }
  ];

  featuredItems: FeaturedItem[] = [
    {
      title: 'Summer Collection 2024',
      description: 'Discover our latest arrivals for the season',
      image: 'https://placehold.co/300x200/4f46e5/ffffff?text=Summer',
      link: '/collections/summer',
      badge: 'Featured'
    },
    {
      title: 'Flash Sale - 50% Off',
      description: 'Limited time offer on selected items',
      image: 'https://placehold.co/300x200/dc2626/ffffff?text=Sale',
      link: '/sale',
      badge: 'Limited'
    }
  ];

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  openMenu(): void {
    this.isOpen = true;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  setActiveCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  getActiveCategory(): MegaMenuItem | undefined {
    return this.categories.find(c => c.id === this.activeCategory);
  }
}
