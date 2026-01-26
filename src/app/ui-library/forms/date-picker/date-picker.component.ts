// ═══════════════════════════════════════════════════════════════
// DATE PICKER COMPONENT - Premium UI Library
// Custom date picker with calendar view
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent {
  // Single date picker
  selectedDate: Date | null = null;
  isCalendarOpen: boolean = false;
  currentMonth: Date = new Date();

  // Date range picker
  startDate: Date | null = null;
  endDate: Date | null = null;
  isRangeCalendarOpen: boolean = false;
  rangeCurrentMonth: Date = new Date();
  selectingEnd: boolean = false;

  // Preset ranges
  presetRanges = [
    { label: 'Today', getValue: () => this.getToday() },
    { label: 'Yesterday', getValue: () => this.getYesterday() },
    { label: 'Last 7 days', getValue: () => this.getLast7Days() },
    { label: 'Last 30 days', getValue: () => this.getLast30Days() },
    { label: 'This month', getValue: () => this.getThisMonth() },
    { label: 'Last month', getValue: () => this.getLastMonth() }
  ];

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isCalendarOpen = false;
      this.isRangeCalendarOpen = false;
    }
  }

  // Calendar generation
  getCalendarDays(): (Date | null)[] {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    // Empty cells for days before first day
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }

  getRangeCalendarDays(): (Date | null)[] {
    const year = this.rangeCurrentMonth.getFullYear();
    const month = this.rangeCurrentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }

  // Navigation
  previousMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
  }

  nextMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
  }

  previousRangeMonth(): void {
    this.rangeCurrentMonth = new Date(this.rangeCurrentMonth.getFullYear(), this.rangeCurrentMonth.getMonth() - 1, 1);
  }

  nextRangeMonth(): void {
    this.rangeCurrentMonth = new Date(this.rangeCurrentMonth.getFullYear(), this.rangeCurrentMonth.getMonth() + 1, 1);
  }

  // Selection
  selectDate(date: Date): void {
    this.selectedDate = date;
    this.isCalendarOpen = false;
  }

  selectRangeDate(date: Date): void {
    if (!this.selectingEnd || !this.startDate) {
      this.startDate = date;
      this.endDate = null;
      this.selectingEnd = true;
    } else {
      if (date < this.startDate) {
        this.endDate = this.startDate;
        this.startDate = date;
      } else {
        this.endDate = date;
      }
      this.selectingEnd = false;
    }
  }

  applyPresetRange(preset: any): void {
    const range = preset.getValue();
    this.startDate = range.start;
    this.endDate = range.end;
    this.isRangeCalendarOpen = false;
  }

  // Helpers
  isSelected(date: Date): boolean {
    if (!this.selectedDate) return false;
    return this.isSameDay(date, this.selectedDate);
  }

  isToday(date: Date): boolean {
    return this.isSameDay(date, new Date());
  }

  isInRange(date: Date): boolean {
    if (!this.startDate || !this.endDate) return false;
    return date > this.startDate && date < this.endDate;
  }

  isRangeStart(date: Date): boolean {
    if (!this.startDate) return false;
    return this.isSameDay(date, this.startDate);
  }

  isRangeEnd(date: Date): boolean {
    if (!this.endDate) return false;
    return this.isSameDay(date, this.endDate);
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  getMonthYear(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  // Preset range calculations
  getToday() {
    const today = new Date();
    return { start: today, end: today };
  }

  getYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return { start: yesterday, end: yesterday };
  }

  getLast7Days() {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - 6);
    return { start, end };
  }

  getLast30Days() {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - 29);
    return { start, end };
  }

  getThisMonth() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start, end };
  }

  getLastMonth() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth(), 0);
    return { start, end };
  }

  clearDate(): void {
    this.selectedDate = null;
  }

  clearRange(): void {
    this.startDate = null;
    this.endDate = null;
    this.selectingEnd = false;
  }
}
