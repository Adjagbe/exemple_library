import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-alert-2', standalone: true, imports: [CommonModule], templateUrl: './alert-2.html', styleUrls: ['./alert-2.scss'] })
export class Alert2 {
  toasts = [
    { icon:'✅', msg:'Profile updated successfully!', accent:'#34d399' },
    { icon:'📦', msg:'New deployment is live.', accent:'#6366f1' },
    { icon:'🔔', msg:'You have 3 unread notifications.', accent:'#f59e0b' },
  ];
}
