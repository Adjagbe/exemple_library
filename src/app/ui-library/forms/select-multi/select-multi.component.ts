import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'ui-select-multi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-multi.component.html',
  styleUrl: './select-multi.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SelectMultiComponent {
  multiValue: string[] = ['react', 'typescript'];
  multiOpen: boolean = false;
  technologies: SelectOption[] = [
    { value: 'angular', label: 'Angular', icon: 'bi-code-slash' },
    { value: 'react', label: 'React', icon: 'bi-code-slash' },
    { value: 'vue', label: 'Vue.js', icon: 'bi-code-slash' },
    { value: 'typescript', label: 'TypeScript', icon: 'bi-braces' },
    { value: 'nodejs', label: 'Node.js', icon: 'bi-server' },
    { value: 'python', label: 'Python', icon: 'bi-terminal' },
    { value: 'docker', label: 'Docker', icon: 'bi-box' },
    { value: 'kubernetes', label: 'Kubernetes', icon: 'bi-diagram-3' }
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.multiOpen = false;
    }
  }

  toggleMultiOption(value: string): void {
    const index = this.multiValue.indexOf(value);
    if (index > -1) { this.multiValue.splice(index, 1); } else { this.multiValue.push(value); }
  }

  isMultiSelected(value: string): boolean { return this.multiValue.includes(value); }

  removeMultiOption(value: string, event: Event): void {
    event.stopPropagation();
    const index = this.multiValue.indexOf(value);
    if (index > -1) { this.multiValue.splice(index, 1); }
  }

  getMultiSelectedLabels(): SelectOption[] {
    return this.technologies.filter(t => this.multiValue.includes(t.value));
  }
}
