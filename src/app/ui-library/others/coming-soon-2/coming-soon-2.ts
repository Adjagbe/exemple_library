import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-coming-soon-2', 
    standalone: true, 
    imports: [CommonModule], 
    templateUrl: './coming-soon-2.html', 
    styleUrl: './coming-soon-2.scss' })
export class ComingSoon2 implements OnInit, OnDestroy {
  days = 30; hours = 12; minutes = 0; seconds = 0;
  private timer: any;
  ngOnInit() { this.timer = setInterval(() => { if (--this.seconds < 0) { this.seconds = 59; if (--this.minutes < 0) { this.minutes = 59; if (--this.hours < 0) { this.hours = 23; this.days = Math.max(0, this.days - 1); } } } }, 1000); }
  ngOnDestroy() { clearInterval(this.timer); }
  pad(n: number) { return n.toString().padStart(2, '0'); }
  progress = 65;
}
