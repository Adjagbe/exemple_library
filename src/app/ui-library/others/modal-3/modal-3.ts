import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-3.html',
  styleUrls: ['./modal-3.scss']
})
export class Modal3Component {
  open = false;
}
