import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-whith-emoji',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-whith-emoji.html',
  styleUrl: './form-whith-emoji.scss',
})
export class FormWhithEmoji {

  formData = {
    name: '',
    icon: '🧩'
  };

  commonIcons = ['🧩', '📦', '🎨', '📋', '📊', '🔧', '⚡', '🎯', '💡', '🔒', '🛒', '📱', '💳', '📝', '🔔'];

  selectIcon(icon: string) {
    this.formData.icon = icon;
  }
}
