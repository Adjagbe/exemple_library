// ═══════════════════════════════════════════════════════════════
// TEXTAREA COMPONENT - Premium UI Library
// Comment textarea with character count and validation
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TextareaComponent {
  @Input() label: string = 'Comment';
  @Input() placeholder: string = 'Write your comment here...';
  @Input() maxLength: number = 500;
  @Input() minLength: number = 0;
  @Input() rows: number = 4;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() showCharCount: boolean = true;
  @Input() resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';

  @Output() valueChange = new EventEmitter<string>();
  @Output() focused = new EventEmitter<void>();
  @Output() blurred = new EventEmitter<void>();

  value: string = '';
  isFocused: boolean = false;
  isTouched: boolean = false;

  // Demo comments
  comments = [
    {
      id: '1',
      author: 'Sarah Johnson',
      avatar: 'https://placehold.co/40x40/4f46e5/ffffff?text=SJ',
      date: '2 hours ago',
      content: 'This is an excellent product! The quality exceeded my expectations and the delivery was super fast. Highly recommended!',
      likes: 12
    },
    {
      id: '2',
      author: 'Michael Chen',
      avatar: 'https://placehold.co/40x40/10b981/ffffff?text=MC',
      date: '5 hours ago',
      content: 'Great value for money. The customer service was also very helpful when I had questions.',
      likes: 8
    }
  ];

  get characterCount(): number {
    return this.value.length;
  }

  get isOverLimit(): boolean {
    return this.value.length > this.maxLength;
  }

  get isUnderMinimum(): boolean {
    return this.isTouched && this.minLength > 0 && this.value.length < this.minLength;
  }

  get isValid(): boolean {
    if (this.required && !this.value.trim()) return false;
    if (this.isOverLimit) return false;
    if (this.isUnderMinimum) return false;
    return true;
  }

  onInput(): void {
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
    this.focused.emit();
  }

  onBlur(): void {
    this.isFocused = false;
    this.isTouched = true;
    this.blurred.emit();
  }

  submitComment(): void {
    if (!this.isValid || !this.value.trim()) return;

    this.comments.unshift({
      id: Date.now().toString(),
      author: 'You',
      avatar: 'https://placehold.co/40x40/f59e0b/ffffff?text=YO',
      date: 'Just now',
      content: this.value,
      likes: 0
    });

    this.value = '';
    this.isTouched = false;
  }

  likeComment(comment: any): void {
    comment.likes++;
  }
}
