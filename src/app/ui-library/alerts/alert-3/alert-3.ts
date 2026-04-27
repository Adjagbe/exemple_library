import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-alert-3', standalone: true, imports: [CommonModule], templateUrl: './alert-3.html', styleUrls: ['./alert-3.scss'] })
export class Alert3 {
  visible = true;
  close() { this.visible = false; }
}
