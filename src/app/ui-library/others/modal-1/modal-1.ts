import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-1.html',
  styleUrls: ['./modal-1.scss']
})
export class Modal1Component {
  open = false;
}
