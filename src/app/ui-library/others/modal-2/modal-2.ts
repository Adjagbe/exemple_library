import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-2.html',
  styleUrls: ['./modal-2.scss']
})
export class Modal2Component {
  open = false;
  step = 1;
  next() { if (this.step < 3) this.step++; }
  prev() { if (this.step > 1) this.step--; }
  close() { this.open = false; this.step = 1; }
}
