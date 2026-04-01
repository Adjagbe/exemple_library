import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-tags-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-icons.component.html',
  styleUrl: './tags-icons.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsIconsComponent {}
