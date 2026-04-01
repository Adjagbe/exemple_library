import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-tags-interactive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-interactive.component.html',
  styleUrl: './tags-interactive.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsInteractiveComponent {}
