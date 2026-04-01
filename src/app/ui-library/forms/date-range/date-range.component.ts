import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-date-range',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DateRangeComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
  isRangeCalendarOpen: boolean = false;
  rangeCurrentMonth: Date = new Date();
  selectingEnd: boolean = false;
  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  presetRanges = [
    { label: 'Today', getValue: () => this.getToday() },
    { label: 'Yesterday', getValue: () => this.getYesterday() },
    { label: 'Last 7 days', getValue: () => this.getLast7Days() },
    { label: 'Last 30 days', getValue: () => this.getLast30Days() },
    { label: 'This month', getValue: () => this.getThisMonth() },
    { label: 'Last month', getValue: () => this.getLastMonth() }
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isRangeCalendarOpen = false;
    }
  }

  getRangeCalendarDays(): (Date | null)[] {
    const year = this.rangeCurrentMonth.getFullYear();
    const month = this.rangeCurrentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) { days.push(null); }
    for (let i = 1; i <= lastDay.getDate(); i++) { days.push(new Date(year, month, i)); }
    return days;
  }

  previousRangeMonth(): void { this.rangeCurrentMonth = new Date(this.rangeCurrentMonth.getFullYear(), this.rangeCurrentMonth.getMonth() - 1, 1); }
  nextRangeMonth(): void { this.rangeCurrentMonth = new Date(this.rangeCurrentMonth.getFullYear(), this.rangeCurrentMonth.getMonth() + 1, 1); }

  selectRangeDate(date: Date): void {
    if (!this.selectingEnd || !this.startDate) {
      this.startDate = date; this.endDate = null; this.selectingEnd = true;
    } else {
      if (date < this.startDate) { this.endDate = this.startDate; this.startDate = date; }
      else { this.endDate = date; }
      this.selectingEnd = false;
    }
  }

  applyPresetRange(preset: any): void { const range = preset.getValue(); this.startDate = range.start; this.endDate = range.end; this.isRangeCalendarOpen = false; }
  clearRange(): void { this.startDate = null; this.endDate = null; this.selectingEnd = false; }

  isToday(date: Date): boolean { return this.isSameDay(date, new Date()); }
  isInRange(date: Date): boolean { return this.startDate && this.endDate ? date > this.startDate && date < this.endDate : false; }
  isRangeStart(date: Date): boolean { return this.startDate ? this.isSameDay(date, this.startDate) : false; }
  isRangeEnd(date: Date): boolean { return this.endDate ? this.isSameDay(date, this.endDate) : false; }
  isSameDay(d1: Date, d2: Date): boolean { return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear(); }
  formatDate(date: Date | null): string { return date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''; }
  getMonthYear(date: Date): string { return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }

  getToday() { var t = new Date(); return { start: t, end: t }; }
  getYesterday() { var d = new Date(); d.setDate(d.getDate() - 1); return { start: d, end: d }; }
  getLast7Days() { var e = new Date(), s = new Date(); s.setDate(s.getDate() - 6); return { start: s, end: e }; }
  getLast30Days() { var e = new Date(), s = new Date(); s.setDate(s.getDate() - 29); return { start: s, end: e }; }
  getThisMonth() { var n = new Date(); return { start: new Date(n.getFullYear(), n.getMonth(), 1), end: new Date(n.getFullYear(), n.getMonth() + 1, 0) }; }
  getLastMonth() { var n = new Date(); return { start: new Date(n.getFullYear(), n.getMonth() - 1, 1), end: new Date(n.getFullYear(), n.getMonth(), 0) }; }
}
