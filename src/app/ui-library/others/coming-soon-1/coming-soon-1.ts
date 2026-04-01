import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-coming-soon-1', 
    standalone: true, 
    imports: [CommonModule], 
    templateUrl: './coming-soon-1.html', 
    styleUrl: './coming-soon-1.scss' })
export class ComingSoon1 implements OnInit, OnDestroy {
  days = 14; hours = 6; minutes = 42; seconds = 30;
  private timer: any;
  ngOnInit() { this.timer = setInterval(() => { if (--this.seconds < 0) { this.seconds = 59; if (--this.minutes < 0) { this.minutes = 59; if (--this.hours < 0) { this.hours = 23; if (--this.days < 0) this.days = 0; } } } }, 1000); }
  ngOnDestroy() { clearInterval(this.timer); }
  pad(n: number) { return n.toString().padStart(2, '0'); }
}
