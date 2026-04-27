import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner implements OnInit, OnDestroy {
isLoaded = false;
  cardGlow = 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)';
 
  stats = [
    { value: '98%', label: 'Satisfaction' },
    { value: '10x', label: 'Faster' },
    { value: '500+', label: 'Components' },
  ];
 
  metrics = [
    { value: '99ms', name: 'Latency' },
    { value: '4.9★', name: 'Rating' },
    { value: '∞', name: 'Scale' },
  ];
 
  dots = new Array(12);
 
  logos = ['Figma', 'Framer', 'Vercel', 'Linear', 'Notion'];
 
  private loadTimeout!: ReturnType<typeof setTimeout>;
 
  ngOnInit(): void {
    this.loadTimeout = setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
 
  ngOnDestroy(): void {
    clearTimeout(this.loadTimeout);
  }
 
  onMouseMove(event: MouseEvent): void {
    const card = (event.currentTarget as HTMLElement);
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.cardGlow = `radial-gradient(circle at ${x}% ${y}%, rgba(99,102,241,0.25) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)`;
  }
 
  onMouseLeave(): void {
    this.cardGlow = 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)';
  }
 
  onPrimary(): void {
    console.log('Primary CTA clicked');
  }
 
  onSecondary(): void {
    console.log('Secondary CTA clicked');
  }
}
