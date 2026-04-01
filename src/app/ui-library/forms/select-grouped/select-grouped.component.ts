import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
  group?: string;
}

@Component({
  selector: 'ui-select-grouped',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-grouped.component.html',
  styleUrl: './select-grouped.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SelectGroupedComponent {
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
      this.groupedOpen = false;
    }
  }

  getGroups(): string[] { return [...new Set(this.groupedOptions.map(o => o.group!))]; }
  getGroupOptions(group: string): SelectOption[] { return this.groupedOptions.filter(o => o.group === group); }

  selectGroupedOption(option: SelectOption): void {
    this.groupedValue = option.value;
    this.groupedOpen = false;
  }

  getSelectedGroupedOption(): SelectOption | undefined {
    return this.groupedOptions.find(o => o.value === this.groupedValue);
  }
}
