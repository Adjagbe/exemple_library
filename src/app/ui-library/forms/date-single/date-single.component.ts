import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-date-single',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-single.component.html',
  styleUrl: './date-single.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DateSingleComponent {
  selectedDate: Date | null = null;
  isCalendarOpen: boolean = false;
  currentMonth: Date = new Date();
  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isCalendarOpen = false;
    }
  }

  getCalendarDays(): (Date | null)[] {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) { days.push(null); }
    for (let i = 1; i <= lastDay.getDate(); i++) { days.push(new Date(year, month, i)); }
    return days;
  }

  previousMonth(): void { this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1); }
  nextMonth(): void { this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1); }

  selectDate(date: Date): void { this.selectedDate = date; this.isCalendarOpen = false; }
  selectToday(): void { this.currentMonth = new Date(); this.selectedDate = new Date(); this.isCalendarOpen = false; }
  clearDate(): void { this.selectedDate = null; }

  isSelected(date: Date): boolean { return this.selectedDate ? this.isSameDay(date, this.selectedDate) : false; }
  isToday(date: Date): boolean { return this.isSameDay(date, new Date()); }
  isSameDay(d1: Date, d2: Date): boolean { return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear(); }
  formatDate(date: Date | null): string { return date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''; }
  getMonthYear(date: Date): string { return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }
}
