// ═══════════════════════════════════════════════════════════════
// SELECT / COMBOBOX COMPONENT - Premium UI Library
// Custom styled select dropdowns with search functionality
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
  icon?: string;
  description?: string;
  disabled?: boolean;
  group?: string;
}

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent {
  // Basic select
  basicValue: string = '';
  basicOptions: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
    { value: 'option5', label: 'Option 5' }
  ];

  // Searchable select
  searchValue: string = '';
  searchQuery: string = '';
  searchOpen: boolean = false;
  countries: SelectOption[] = [
    { value: 'us', label: 'United States', icon: '🇺🇸' },
    { value: 'uk', label: 'United Kingdom', icon: '🇬🇧' },
    { value: 'ca', label: 'Canada', icon: '🇨🇦' },
    { value: 'au', label: 'Australia', icon: '🇦🇺' },
    { value: 'de', label: 'Germany', icon: '🇩🇪' },
    { value: 'fr', label: 'France', icon: '🇫🇷' },
    { value: 'jp', label: 'Japan', icon: '🇯🇵' },
    { value: 'br', label: 'Brazil', icon: '🇧🇷' },
    { value: 'in', label: 'India', icon: '🇮🇳' },
    { value: 'mx', label: 'Mexico', icon: '🇲🇽' }
  ];

  // Multi-select
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

  // Grouped select
  groupedValue: string = '';
  groupedOpen: boolean = false;
  groupedOptions: SelectOption[] = [
    { value: 'chrome', label: 'Chrome', group: 'Browsers' },
    { value: 'firefox', label: 'Firefox', group: 'Browsers' },
    { value: 'safari', label: 'Safari', group: 'Browsers' },
    { value: 'vscode', label: 'VS Code', group: 'Editors' },
    { value: 'sublime', label: 'Sublime Text', group: 'Editors' },
    { value: 'vim', label: 'Vim', group: 'Editors' },
    { value: 'slack', label: 'Slack', group: 'Communication' },
    { value: 'discord', label: 'Discord', group: 'Communication' }
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.searchOpen = false;
      this.multiOpen = false;
      this.groupedOpen = false;
    }
  }

  // Searchable select methods
  getFilteredCountries(): SelectOption[] {
    if (!this.searchQuery) return this.countries;
    return this.countries.filter(c => 
      c.label.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectCountry(option: SelectOption): void {
    this.searchValue = option.value;
    this.searchOpen = false;
    this.searchQuery = '';
  }

  getSelectedCountry(): SelectOption | undefined {
    return this.countries.find(c => c.value === this.searchValue);
  }

  // Multi-select methods
  toggleMultiOption(value: string): void {
    const index = this.multiValue.indexOf(value);
    if (index > -1) {
      this.multiValue.splice(index, 1);
    } else {
      this.multiValue.push(value);
    }
  }

  isMultiSelected(value: string): boolean {
    return this.multiValue.includes(value);
  }

  removeMultiOption(value: string, event: Event): void {
    event.stopPropagation();
    const index = this.multiValue.indexOf(value);
    if (index > -1) {
      this.multiValue.splice(index, 1);
    }
  }

  getMultiSelectedLabels(): SelectOption[] {
    return this.technologies.filter(t => this.multiValue.includes(t.value));
  }

  // Grouped select methods
  getGroups(): string[] {
    return [...new Set(this.groupedOptions.map(o => o.group!))];
  }

  getGroupOptions(group: string): SelectOption[] {
    return this.groupedOptions.filter(o => o.group === group);
  }

  selectGroupedOption(option: SelectOption): void {
    this.groupedValue = option.value;
    this.groupedOpen = false;
  }

  getSelectedGroupedOption(): SelectOption | undefined {
    return this.groupedOptions.find(o => o.value === this.groupedValue);
  }
}
