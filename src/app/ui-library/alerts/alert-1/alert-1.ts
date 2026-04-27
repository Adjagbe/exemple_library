import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-alert-1', standalone: true, imports: [CommonModule], templateUrl: './alert-1.html', styleUrls: ['./alert-1.scss'] })
export class Alert1 {
  alerts = [
    { type:'success', icon:'✅', title:'Success!', msg:'Your changes have been saved successfully.' },
    { type:'warning', icon:'⚠️', title:'Warning', msg:'Your subscription expires in 3 days.' },
    { type:'error', icon:'❌', title:'Error', msg:'Failed to upload file. Max size is 10MB.' },
    { type:'info', icon:'ℹ️', title:'Info', msg:'System maintenance scheduled for Sunday 2–4 AM UTC.' },
  ];
  dismissed = new Set<number>();
  dismiss(i: number) { this.dismissed.add(i); }
}
