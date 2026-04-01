import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { trigger, state, style, transition, animate } from '@angular/animations';
 
export interface AccordionItem {
  question: string;
  answer: string;
  link?: { label: string; url: string };
}

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  // animations: [
  //   trigger('expandCollapse', [
  //     state('closed', style({ height: '0px', opacity: 0 })),
  //     state('open',   style({ height: '*',  opacity: 1 })),
  //     transition('closed <=> open', animate('320ms cubic-bezier(0.4, 0, 0.2, 1)')),
  //   ])
  // ]
})
export class Accordion {

    @Input() heading = 'Frequently Asked Questions';
    @Input() variant: 'default' | 'minimal' | 'card' = 'default';
    @Input() allowMultiple = false;
  
    @Input() items: AccordionItem[] = [
      { question: 'What services do you offer?',        answer: 'We provide end-to-end digital product design and development — from UX research and brand identity to full-stack engineering and DevOps.' },
      { question: 'How long does a typical project take?', answer: 'Timelines vary by scope. A focused MVP typically takes 6–10 weeks; larger platforms can span 4–6 months. We align on milestones at kick-off.' },
      { question: 'Do you work with early-stage startups?', answer: 'Absolutely. Some of our favourite projects have been zero-to-one builds with founding teams. We love shaping products from day one.' },
      { question: 'What is your pricing model?',        answer: 'We offer fixed-scope project pricing and retainer-based ongoing partnerships. Contact us for a tailored quote.' },
    ];
  
    openIndex: number | null = 0;
  
    toggle(index: number): void {
      if (this.allowMultiple) return; // extend for multi-open if needed
      this.openIndex = this.openIndex === index ? null : index;
    }
}
