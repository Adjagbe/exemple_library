import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
export interface AboutStat {
  value: string;
  label: string;
}
 
export interface AboutValue {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
 @Input() description = 'We are a creative studio at the intersection of design and technology, crafting digital products that push boundaries and resonate with people.';
  @Input() mission = 'To transform complex problems into elegant, human-centered digital solutions that empower businesses and delight users in equal measure.';
  @Input() heroImage = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80';
  @Input() heroImageAlt = 'Our team at work';
  @Input() ctaLabel = 'Meet the team →';
  @Input() ctaLink = '/team';
 
  @Input() stats: AboutStat[] = [
    { value: '8+', label: 'Years of craft' },
    { value: '200+', label: 'Projects shipped' },
    { value: '98%', label: 'Client satisfaction' },
  ];
 
  @Input() values: AboutValue[] = [
    { icon: '✦', title: 'Intentional Design', description: 'Every pixel, every interaction is deliberate. We sweat the details so you never have to.' },
    { icon: '✦', title: 'Velocity', description: 'Speed without compromise. We move fast, ship quality, and iterate with purpose.' },
    { icon: '✦', title: 'Long-term Vision', description: 'We build foundations that scale, not just solutions for today, but platforms for the future.' },
    { icon: '✦', title: 'True Partnership', description: 'We embed with your team, align with your goals, and celebrate your wins as our own.' },
  ];
}
