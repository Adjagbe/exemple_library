import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroContent {
  title: string;
  highlightedText?: string;
  subtitle: string;
  primaryCta: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  image?: string;
  stats?: { value: string; label: string }[];
}

@Component({
  selector: 'ui-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  hero: HeroContent = {
    title: 'Build Amazing Products',
    highlightedText: 'Faster Than Ever',
    subtitle: 'The most powerful UI library for modern web applications. Create stunning interfaces with our premium components.',
    primaryCta: { text: 'Get Started Free', link: '/signup' },
    secondaryCta: { text: 'View Demo', link: '/demo' },
    image: 'https://placehold.co/600x400/4f46e5/ffffff?text=Hero+Image',
    stats: [
      { value: '10K+', label: 'Happy Users' },
      { value: '500+', label: 'Components' },
      { value: '99.9%', label: 'Uptime' },
      { value: '24/7', label: 'Support' }
    ]
  };
}
