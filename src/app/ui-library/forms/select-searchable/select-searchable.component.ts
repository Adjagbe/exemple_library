import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'ui-select-searchable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-searchable.component.html',
  styleUrl: './select-searchable.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SelectSearchableComponent {
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

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.searchOpen = false;
    }
  }

  getFilteredCountries(): SelectOption[] {
    if (!this.searchQuery) return this.countries;
    return this.countries.filter(c => c.label.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  selectCountry(option: SelectOption): void {
    this.searchValue = option.value;
    this.searchOpen = false;
    this.searchQuery = '';
  }

  getSelectedCountry(): SelectOption | undefined {
    return this.countries.find(c => c.value === this.searchValue);
  }
}
