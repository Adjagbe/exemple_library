// ═══════════════════════════════════════════════════════════════
// DROPDOWN MENU COMPONENT - Premium UI Library
// Reusable dropdown menu with multiple triggers
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation, Input, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DropdownItem {
  id: string;
  label: string;
  icon?: string;
  link?: string;
  divider?: boolean;
  disabled?: boolean;
  danger?: boolean;
  action?: () => void;
}

@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent {
  @Input() triggerText: string = 'Options';
  @Input() triggerIcon: string = 'bi-three-dots-vertical';
  @Input() triggerType: 'button' | 'icon' | 'avatar' = 'button';
  @Input() avatarSrc: string = '';
  @Input() position: 'left' | 'right' = 'left';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  isOpen: boolean = false;

  items: DropdownItem[] = [
    { id: 'profile', label: 'View Profile', icon: 'bi-person' },
    { id: 'settings', label: 'Settings', icon: 'bi-gear' },
    { id: 'notifications', label: 'Notifications', icon: 'bi-bell' },
    { id: 'divider1', label: '', divider: true },
    { id: 'help', label: 'Help Center', icon: 'bi-question-circle' },
    { id: 'docs', label: 'Documentation', icon: 'bi-book' },
    { id: 'divider2', label: '', divider: true },
    { id: 'logout', label: 'Sign Out', icon: 'bi-box-arrow-right', danger: true }
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  onItemClick(item: DropdownItem): void {
    if (item.disabled || item.divider) return;
    
    if (item.action) {
      item.action();
    }
    
    this.close();
  }
}
